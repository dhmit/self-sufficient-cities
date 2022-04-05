import axios from "axios";
import React from "react";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";

const URL = "/api/get_census_data/";


export default class MapMacro extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        censustract: {}
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                this.setState({censustract: res.data});
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
                <GeoJSON data={this.state.censustract}/>
                };
            </MapContainer>
        </div>;
    }
}
