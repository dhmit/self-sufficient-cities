import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line max-len
import {MapContainer, Popup, LayerGroup, LayersControl, TileLayer, GeoJSON, Marker} from "react-leaflet";
const URL = "/api/get_census_data/";

//import data from "./community.json";



export default class MapMacro extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        censustract: {}
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                console.log(res.data);
                this.setState({censustract: res.data});
            });



    }



    // load geojson data based on this.props.decade



    render() {

        // eslint-disable-next-line max-len


        let foodMarkers = [];
        let healthMarkers = [];
        let otherMarkers = [];
        let autoMarkers = [];
        let liquorMarkers = [];
        let religionMarkers = [];

        console.log(this.props.mapType);


        const geos = this.props.data;

        for (let i = 0; i < geos.length; i++) {
            let coords = geos[i]["coordinates"];
            coords.forEach((elt, i) => coords[i] = parseFloat(elt));


            if (geos[i]["kind"] === "Food" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                console.log(geos[i]);
                foodMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            // eslint-disable-next-line max-len
            else if ((geos[i]["kind"] === "Health" || geos[i]["kind"] === "Pharmacy") && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                healthMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Other" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                otherMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Auto" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                autoMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Liquor" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                liquorMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Religion" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                religionMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

        }




        return <div id="map">
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                />
                {Object.keys(this.state.censustract).length > 0 &&
                <GeoJSON data={this.state.censustract}/>
                };


                <LayersControl position="topright">
                    <LayersControl.Overlay checked name="Food">
                        <LayerGroup>{foodMarkers}</LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Health">
                        <LayerGroup>{healthMarkers}</LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Auto">
                        <LayerGroup>{foodMarkers}</LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Liquor">
                        <LayerGroup>{healthMarkers}</LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Religion">
                        <LayerGroup>{religionMarkers}</LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Other">
                        <LayerGroup>{otherMarkers}</LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>

            </MapContainer>
        </div>;
    }
}

MapMacro.propTypes = {
    decade: PropTypes.number,
    data: PropTypes.array,
    mapType: PropTypes.string
};

Marker.propTypes = {
    position: PropTypes.array

};
