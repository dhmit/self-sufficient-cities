import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import table from "./table";
import table2 from "./table2";
import table3 from "./table3";
import table4 from "./table4";
import table5 from "./table5";
import table6 from "./table6";
import table7 from "./table7";
import table8 from "./table8";
// MORNING TEAM

export default class MapMacro extends React.Component {
    state = {
        position: [38.9051606, -77.0036513],
        location: "Deanwood neighborhood, Washington DC"
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
            </MapContainer>
        </div>;
    }
}
