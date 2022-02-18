import axios from "axios";
import React from "react";
import {MapContainer, Marker, TileLayer, GeoJSON, FeatureGroup} from "react-leaflet";
import Table from "./Table";

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
        console.log("in tabel data");
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

    render() {
        return <div id="map">
            <h1>{this.state.location}</h1>
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <Marker position={this.state.position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                />
                <FeatureGroup
                    // onEachFeature = {this.showTableData}

                    eventHandlers={{
                        click: () => {
                            console.log("click works");
                        },
                        mouseover: (tract, layer) => {
                            layer.bindPopup("popup works :)");
                        }
                        //event.target.bindPopup("hello world").openPopup();}

                    }}
                >
                    {Object.keys(this.state.censustract).length > 0 &&
                    <GeoJSON data={this.state.censustract}/>};
                </FeatureGroup>

            </MapContainer>

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
