import axios from "axios";
import React from "react";
import {MapContainer, Marker, TileLayer, GeoJSON} from "react-leaflet";
import Table from "./Table";
import Legend from "./Legend";

// MORNING TEAM
const URL = "/api/get_census_data/";
const TABLE_URL = "/api/get_table_data/";


export default class MapMacro extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        location: "Deanwood neighborhood, Washington DC",
        tabledata: [],
        censustract: {}
    }

    handleTableClick(event) {
        axios.get(TABLE_URL + event.target.id)
            .then((res) => {
                this.setState({tabledata: res.data});
            });
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                this.setState({censustract: res.data});
            });
    }

    showTableData(event) {
        event.target.setStyle({
            fillColor: "green"
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
    // createMarkers = () => {
    //    // let markers = <>;
    //     let markers = this.state.positions.map((position)=> {
    //
    //     })
    //     return markers
    // }
    render() {
        return <div id="map">
            <h1>{this.state.location}</h1>
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                {/*{this.createMarkers()}*/}
                <Marker position={this.state.position}/>
                <Marker position={[38.887665, -76.925919]}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                />
                {Object.keys(this.state.censustract).length > 0 &&
                    <GeoJSON data={this.state.censustract} onEachFeature={this.onEachBlock}/>
                };
                <div style={{marginTop: "16.5rem", marginLeft: "0.75rem",
                    position: "relative", zIndex:1000}}>
                    <Legend id="legend"/>
                </div>
            </MapContainer>
            <br />
            <button id={"table1"}
                onClick={this.handleTableClick.bind(this)}>
                Table 1
            </button>

            <button id={"table2"}
                onClick={this.handleTableClick.bind(this)}>
                Table 2
            </button>

            <button id={"table3"}
                onClick={this.handleTableClick.bind(this)}>
                Table 3
            </button>

            <button id={"table4"}
                onClick={this.handleTableClick.bind(this)}>
                Table 4
            </button>

            <button id={"table5"}
                onClick={this.handleTableClick.bind(this)}>
                Table 5
            </button>

            <button id={"table6"}
                onClick={this.handleTableClick.bind(this)}>
                Table 6
            </button>

            <button id={"table7"}
                onClick={this.handleTableClick.bind(this)}>
                Table 7
            </button>

            <button id={"table8"}
                onClick={this.handleTableClick.bind(this)}>
                Table 8
            </button>

            <Table tabledata={this.state.tabledata}/>
        </div>;
    }
}
