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
        return <div className="map">
            <MapContainer center={this.state.position} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Object.keys(this.state.censustract).length > 0 &&
                <GeoJSON data={this.state.censustract} key={"census"}
                         pathOptions={{
                             color: "rgb(255,114,0)",
                             fillOpacity: 0
                         }}/>
                };
                {Object.keys(this.state.boundary).length > 0 &&
                <GeoJSON data={this.state.boundary} key={"boundary"}
                         pathOptions={{color: "rgb(0,95,255)", fillOpacity: 0}}
                />
                };
                <Legend options={[["rgb(0,95,255)", "Deanwood boundary"],
                    ["rgb(255,114,0)", "Census tract 78"]]}/>
            </MapContainer>
        </div>;
    }
}
