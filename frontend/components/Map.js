import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React from "react";

export default class Map extends React.Component {
    state = {
        position: [38.9051606, -77.0036513],
        location: "Deanwood neighborhood, Washington DC"
    }
    // TODO: check if markers can be deterined using coordinates

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
                        <b>Deanwood</b>
                        <br/> Self-sustaining city until around the 1950s.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>;
    }
}
