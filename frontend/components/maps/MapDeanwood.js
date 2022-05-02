import axios from "axios";
import React from "react";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import Legend from "./Legend";
const censusURL = "/api/get_census_data/";
const DeanwoodURL = "/api/get_deanwood_boundary_data/";

export default class MapDeanwood extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        censustract: {},
        boundary: {}
    }

    componentDidMount() {
        axios.get(censusURL)
            .then((res) => {
                this.setState({censustract: res.data});
            });
        axios.get(DeanwoodURL)
            .then((res) => {
                this.setState({boundary: res.data});
            });
    }


    render() {
        return <div id="map">
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                />
                {Object.keys(this.state.censustract).length > 0 &&
                <GeoJSON data={this.state.censustract} key={"census"}
                    pathOptions={{fillColor: "rgb(187, 198, 255)", opacity: "0.1"}}/>
                };
                {Object.keys(this.state.boundary).length > 0 &&
                <GeoJSON data={this.state.boundary} key={"boundary"}
                    pathOptions={{fillColor: "rgb(174,255,71)", color: "rgb(113,189,13)"}}
                />
                };
                <Legend options={[["rgb(113,189,13)", "Deanwood boundary"],
                    ["rgb(187, 198, 255)", "Census tract 78"]]} />
            </MapContainer>
        </div>;
    }
}
