import {MapContainer, Marker, Popup, TileLayer, Polygon} from "react-leaflet";
import React from "react";

const TEST_DATA = [{
    name: "Test title",
    date: "Test date",
    info: "Test info",
    coordinates: [38.8051606, -77.0036513]
}];

const MAIN_LOCATION = {
    name: "Deanwood neighborhood, Washington DC",
    date: "Test date",
    info: "Test info",
    coordinates: [38.9051606, -77.0036513]
};

const TEST_REGION = [
    [38.8151606, -77.0036513],
    [38.8941606, -77.0036513],
    [38.8051606, -77.0136513],
    [38.8051606, -77.0006513]
];

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        TEST_DATA.push(MAIN_LOCATION);
        this.state = {
            mainLocation: MAIN_LOCATION,
            markerData: TEST_DATA
        };
    }

    render() {
        const markerObjects = this.state.markerData.map((location, i) => (
            <Marker key={i} position={location.coordinates}>
                <Popup>
                    {location.name}
                </Popup>
            </Marker>
        ));

        return <div id="map">
            <h1>{this.state.mainLocation.name}</h1>
            <MapContainer center={this.state.mainLocation.coordinates} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markerObjects}
                <Polygon
                    eventHandlers={{click: () => {console.log("marker clicked");}}}
                    pathOptions={{color: "purple"}}
                    positions={TEST_REGION}
                />
            </MapContainer>
        </div>;
    }
}
