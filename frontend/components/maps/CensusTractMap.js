import React from "react";
import * as ReactDomServer from "react-dom/server";
import * as PropTypes from "prop-types";
import {FormSelect} from "react-bootstrap";

import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";

const DEANWOOD_JOIN_CODE = "G11000100078";

const START_COORDS = {
    deanwood: [38.897665, -76.925919],
    detroit: [42.331429, -83.045753],
    los_angeles: [34.052235, -118.243683],
    houston: [29.749907, -95.358421]
};


class CensusTractMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            closest_distance: 0,
            farthest_distance: 0,
            start_pos: START_COORDS.deanwood,
            map: undefined
        };
        this.styleTracts = this.styleTracts.bind(this);
        this.onEachFeature = this.onEachFeature.bind(this);
        this.generatePopupContent = this.generatePopupContent.bind(this);
        this.onPosSelected = this.onPosSelected.bind(this);
    }

    shouldComponentUpdate(nextProps, _nextState, _nextContext) {
        return (nextProps !== this.props);
    }

    onPosSelected(e) {
        e.preventDefault();
        const new_focus = e.currentTarget.value;
        const new_coords = START_COORDS[new_focus];
        this.setState({start_pos: new_coords});
        const map = this.state.map;
        if (map) map.flyTo(new_coords);
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
        const tract_data = this.props.deanwood_similarities[tract_code];

        const tract_name = tract_data["full_name"];
        const tract_distance = Number(tract_data["distance"]).toFixed(2);

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
        if (tract_name === DEANWOOD_JOIN_CODE)
            return {
                color: "black",
                fillColor: "#00FF00",
                fillOpacity: 0.8,
                opacity: 0.8
            };

        return {
            // color: this.calculateTractColor(tract_distance)
            color: "black",
            fillColor: "#00FF00",
            fillOpacity: this.props.deanwood_similarities[tract_name]["opacity"],
            opacity: this.props.deanwood_similarities[tract_name]["opacity"]
        };
    }

    render() {
        return (
            <div className="map">
                <FormSelect
                    aria-label="Census Map Focus Selector"
                    onChange={(e) => this.onPosSelected(e)}
                >
                    <option value="deanwood">Deanwood</option>
                    <option value="detroit">Detroit</option>
                    <option value="los_angeles">Los Angeles</option>
                    <option value="houston">Houston</option>
                </FormSelect>
                <MapContainer
                    center={this.state.start_pos}
                    zoom={11} scrollWheelZoom={false}
                    whenCreated={map => this.setState({map})}>
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
    census_tracts: PropTypes.array.isRequired,
    deanwood_similarities: PropTypes.object.isRequired
};

export default CensusTractMap;
