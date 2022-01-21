import React from "react";
import {GeoJSON, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import axios from "axios";
// MORNING TEAM

const URL = "/api/get_census_data/";

export default class MapMacro extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        location: "Deanwood neighborhood, Washington DC",
        censusdata: {}
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                this.setState({censusdata: res.data});
            });
    }

    render() {
        return <div id="map">
            <h1>{this.state.location}</h1>
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <Marker position={this.state.position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Object.keys(this.state.censusdata).length > 0 &&
                    <GeoJSON data={this.state.censusdata}/>
                };
            </MapContainer>
        </div>;
    }
}
