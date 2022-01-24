import React from "react";
<<<<<<< HEAD
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// import table from "./table";
import JSONDataDisplay from "./table1";
// import Table2 from "./table2";
// import Table3 from "./table3";
// import Table4 from "./table4";
// import Table5 from "./table5";
// import Table6 from "./table6";
// import Table7 from "./table7";
import Table8 from "./table8";
=======
import {GeoJSON, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import axios from "axios";
>>>>>>> 8e40600df1eb6ca10d9bb78046d700782397bfb3
// MORNING TEAM

const URL = "/api/get_census_data/";

export default class MapMacro extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        location: "Deanwood neighborhood, Washington DC",
        censusdata: {}
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                this.setState({censusdata: res.data});
            });
    }

    render() {
        return <div id="map">
            <h1>{this.state.location}</h1>
            <Table8/>
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
                {Object.keys(this.state.censusdata).length > 0 &&
                    <GeoJSON data={this.state.censusdata}/>
                };
            </MapContainer>
        </div>;
    }
}
