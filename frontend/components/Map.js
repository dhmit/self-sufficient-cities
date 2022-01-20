import {MapContainer, Marker, Popup, TileLayer, GeoJSON} from "react-leaflet";
import React from "react";
import axios from "axios";

const URL = "/api/get_census_data/";

export default class Map extends React.Component {
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
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={this.state.position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
                {Object.keys(this.state.censusdata).length > 0 &&
                    <GeoJSON data={this.state.censusdata}/>
                }
            </MapContainer>
        </div>;
    }
}
