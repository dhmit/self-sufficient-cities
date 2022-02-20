import axios from "axios";
import React from "react";
import {MapContainer, Marker, TileLayer, GeoJSON, FeatureGroup} from "react-leaflet";
import Table from "./Table";
import "./MapMacro.css";

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

    clickBehavior() {
        console.log("click detected");
        const map = document.getElementById("MapContainer");

        const sb = document.getElementById("sidebar");
        if (!sb) {
            const sidebar = document.createElement("div");
            sidebar.id = "sidebar";
            sidebar.innerHTML =
             "<div id = 'sidebar-div'>" +
                " <h1 id =" +
                " 'sidebar-h1'>" +
                " sidebar is working" +
                " </h1> </div>";
            map.appendChild(sidebar);
        }

        else {
            map.removeChild(sb);
        }
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
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}
                id = {"MapContainer"}>
                <Marker position={this.state.position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                />

                <FeatureGroup
                    // onEachFeature = {this.showTableData}

                    eventHandlers={{
                        click: () => {
                            this.clickBehavior();
                        },
                        mouseover: () => {
                            console.log("mouseover works");
                        }
                        //event.target.bindPopup("hello world").openPopup();}

                    }}
                >
                    {Object.keys(this.state.censustract).length > 0 &&
                    <GeoJSON data={this.state.censustract}/>}
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
