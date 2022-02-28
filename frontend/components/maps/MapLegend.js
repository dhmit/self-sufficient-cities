import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Legend from "./Legend";
// AFTERNOON TEAM


const MAIN_LOCATION = {
    coordinates: [38.9051606, -77.0036513],
    name: "Deanwood neighborhood, Washington DC",
    date: "Test date",
    info: "Test info"
};

export default class MapLegend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainLocation: MAIN_LOCATION,
            markerData: [],
            legendMarkerData: [],
            sliderState: [1900, 2022],
            timeRange: [1900, 2022],
            lastValid: [1900, 2022],
            names: ["Australia", "Canada", "USA", "Poland", "Spain", "France"]
        };
    }

    componentDidMount() {
        // this makes a call to views.py
        fetch("/api/get_legend_testing/")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("data", data);
                this.setState({
                    legendMarkerData: [...this.state.legendMarkerData, ...data["legend_testing"]]
                });
            });
    };

    render() {
        const legendMarkerObjects = this.state.legendMarkerData.map((location, i) => (
            <Marker key={i} position={location.coordinates}>
                <Popup>
                    {location.address}
                </Popup>
            </Marker>
        ));

        return (<>
            <h1>{this.state.mainLocation.name}</h1>
            <div className="main-element">
                <div className="event-selector">
                    <h3 className="event-selector-title">Event Selector</h3>
                </div>
                <div id="map">
                    <MapContainer
                        center={this.state.mainLocation.coordinates} zoom={13}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                        />
                        {legendMarkerObjects}
                        <div style={{
                            marginTop: "17.5rem", marginLeft: "0.75rem",
                            position: "relative", zIndex: 1000
                        }}>
                            <Legend id="legend"/>
                        </div>
                    </MapContainer>
                </div>
            </div>
        </>);
    }
}
