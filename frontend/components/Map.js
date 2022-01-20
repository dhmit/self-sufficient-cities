import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React from "react";

export default class Map extends React.Component {
    state = {
        position: [38.9051606, -77.0036513],
        location: "Deanwood neighborhood, Washington DC",
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
            </MapContainer>
        </div>;
    }
}
