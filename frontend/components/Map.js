import {MapContainer, Marker, Popup, TileLayer, Polygon} from "react-leaflet";
import React from "react";

const TESTDATA = [{
    location: "Test title",
    date: "Test date",
    info: "Test info",
    position: [38.8051606, -77.0036513],
}];

const MAINLOCATION = {
    position: [38.9051606, -77.0036513],
    location: "Deanwood neighborhood, Washington DC",
    date: "Test date",
    info: "Test info",
};

const TESTREGION = [
    [38.8151606, -77.0036513],
    [38.8941606, -77.0036513],
    [38.8051606, -77.0136513],
    [38.8051606, -77.0006513],
];

export default class Map extends React.Component {
    state = {
        position: [38.9051606, -77.0036513],
        location: "Deanwood neighborhood, Washington DC"
    }

    render() {
        // REMOVE THIS FROM RENDER
        TESTDATA.push(MAINLOCATION);
        const markerObjects = TESTDATA.map((x, i) => (
            <Marker key={i} position={x.position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        ));

        return <div id="map">
            <h1>{this.state.location}</h1>
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markerObjects}
                <Polygon eventHandlers={{
                    click: () => {
                        console.log('marker clicked');
                    },
                }} pathOptions={{ color: "purple" }} positions={TESTREGION} />
            </MapContainer>
        </div>;
    }
}
