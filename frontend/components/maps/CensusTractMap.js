import React from "react";
import * as ReactDomServer from "react-dom/server";
import * as PropTypes from "prop-types";

import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";

const DEANWOOD_JOIN_CODE = "G11000100078";

class CensusTractMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            closest_distance: 0,
            farthest_distance: 0
        };
        this.styleTracts = this.styleTracts.bind(this);
        this.prep_distance_data = this.prep_distance_data.bind(this);
        this.onEachFeature = this.onEachFeature.bind(this);
        this.generatePopupContent = this.generatePopupContent.bind(this);
    }

    componentDidUpdate(prevProps, _prevState, _ss) {
        if (prevProps !== this.props) this.prep_distance_data();
    }

    /**
     * A method that generates the content for the popup that belongs to a census tract
     *
     * @param name - the full name of the census tract to be displayed
     * @param distance the similarity score for the given tract
     */
    generatePopupContent(name, distance) {
        return (
            <div className={"tract-popup-content"}>
                <b>{name}</b>
                <div>Similarity Score: {distance}</div>
                <em>Lower is better!</em>
            </div>
        );
    }

    /**
     * A method used for giving each Census Tract its own pop up that activates on click.
     *
     * The popup contains information containing its closeness to Deanwood and its full name.
     *
     * @param feature - the GeoJSON feature that will have the popup applied
     * @param layer - the layer that the GeoJSON feature
     */
    onEachFeature(feature, layer) {

        const tract_code = feature.properties["GISJOIN"];

        let tract_name;
        let tract_distance;
        if (tract_code === DEANWOOD_JOIN_CODE) {
            tract_name = "Census Tract 78 (Deanwood), District of Columbia";
            tract_distance = 0;
        } else if (!(tract_code in this.props.deanwood_similarities)) {
            return;
        } else {
            tract_name = this.props.deanwood_similarities[tract_code]["full_name"];
            tract_distance = this.props.deanwood_similarities[tract_code]["distance"].toFixed(2);
        }

        const popupContent = ReactDomServer.renderToString(
            this.generatePopupContent(tract_name, tract_distance)
        );
        layer.bindPopup(popupContent);
    }

    /**
     * Generates the styling for a given census tract data point, and returns the style object
     * required by the Leaflet GeoJSON component
     *
     * @param tract_data element of state.census_tracts, the tract to determine styling for
     * @returns {{color: (string)}} object to be used by GeoJSON.style
     */
    styleTracts(tract_data) {
        let tract_name = tract_data.properties["GISJOIN"];

        // Deanwood is itself, so color that specially
        if (tract_name === DEANWOOD_JOIN_CODE) return {color: "black", fillColor: "#00FF00"};

        // Color tract different if there is no data for it
        if (!(tract_name in this.props.deanwood_similarities)) return {color: "grey"};

        const tract_distance = this.props.deanwood_similarities[tract_name]["distance"];

        return {
            // color: this.calculateTractColor(tract_distance)
            color: "black",
            fillColor: "#00FF00",
            fillOpacity: 0.8 * (this.state.farthest_distance/5 - tract_distance) /
                (this.state.farthest_distance/5 - this.state.closest_distance),
            opacity: 0.8 * (this.state.farthest_distance/5 - tract_distance) /
                (this.state.farthest_distance/5 - this.state.closest_distance)
        };
    }

    prep_distance_data() {
        Object.entries((this.props.deanwood_similarities)).forEach(([_, data]) => {
            const distance = data["distance"];
            this.setState({
                closest_distance: Math.min(this.state.closest_distance, distance),
                farthest_distance: Math.max(this.state.farthest_distance, distance)
            });
        });
        return true;
    }

    render() {
        return (
            <div id="map">
                <MapContainer center={this.props.position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                    />
                    {this.props.census_tracts && this.props.deanwood_similarities &&
                        this.props.census_tracts.map(tract => {
                            return (
                                <GeoJSON
                                    key={tract.properties["GISJOIN"]}
                                    data={tract}
                                    style={() => this.styleTracts(tract)}
                                    onEachFeature={this.onEachFeature}
                                />
                            );
                        })

                    }
                </MapContainer>
            </div>
        );
    }
}

CensusTractMap.propTypes = {
    position: PropTypes.array.isRequired,
    census_tracts: PropTypes.array.isRequired,
    deanwood_similarities: PropTypes.object.isRequired
};

export default CensusTractMap;
