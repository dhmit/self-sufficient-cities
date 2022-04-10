import React from "react";
// import PropTypes from "prop-types";
import {GeoJSON, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import axios from "axios";
import Table from "./Table";
import {MapDropdown, TimeControl} from "./MapConsolidated";

const MAIN_LOCATION = {
    coordinates: [38.9051606, -77.0036513],
    name: "Deanwood neighborhood, Washington DC",
    date: "Test date",
    info: "Test info"
};
const URL = "/api/get_census_data/";

export default class MapHousing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // states from MapMicro
            mainLocation: MAIN_LOCATION,
            markerData: [],
            sliderState: [1900, 2022],
            timeRange: [1900, 2022],
            lastValid: [1900, 2022],
            names: ["Australia", "Canada", "USA", "Poland", "Spain", "France"],
            // states from MapMacro
            position: [38.897665, -76.925919],
            location: "Deanwood neighborhood, Washington DC",
            tabledata: [],
            censustract: {}
        };
    }

    componentDidMount() {
        fetch("/api/get_address_data/")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    markerData: [...this.state.markerData, ...data["address_data"]]
                });
            });
        // from MapMacro
        axios.get(URL)
            .then((res) => {
                this.setState({censustract: res.data});
            });
    };


    setSliderValue = (newLowerBound, newUpperBound) => {
        this.setState({
            sliderState: [newLowerBound, newUpperBound],
            lastValid: [newLowerBound, newUpperBound]
        });
    }



    onEachBlock = (block, layer) => {
        console.log("onEachBlock");
        const blockName = block.properties.NAMELSAD;

        layer.on({
            click: this.showTableData,
            mouseover: (event) => {
                event.target.bindPopup(blockName).openPopup();
            }
        });
    }

    render() {
        const validAddresses = this.state.markerData.filter((location) => (
            (location.coordinates.length === 2 && location.year &&
                location.year >= this.state.lastValid[0] &&
                location.year <= this.state.lastValid[1]) ||
            (!location.year)
        ));

        const markerObjects = validAddresses.map((location, i) => (
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
                    <MapDropdown name="Addresses" items={this.state.markerData}/>
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
                        {markerObjects}
                        <Marker position={this.state.position}/>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                        />
                        {Object.keys(this.state.censustract).length > 0 &&
                        <GeoJSON data={this.state.censustract} onEachFeature={this.onEachBlock}/>
                        };
                    </MapContainer>

                    <TimeControl
                        sliderState={this.state.sliderState} change={this.setSliderValue}
                        defaultTime={this.state.timeRange}>
                    </TimeControl>
                    <Table tabledata={this.state.tabledata}/>
                </div>
            </div>
        </>);
    }
}
