import axios from "axios";
import React from "react";
import {MapContainer, Marker, TileLayer, GeoJSON} from "react-leaflet";
import Table from "./Table";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut, Pie} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// MORNING TEAM
const URL = "/api/get_census_data/";
const TABLE_URL = "/api/get_table_data/";
const data2 = {
    labels: ["White Home-Owners", "White Tenants","Non-white Tenants","Non-white Home-Owners"],
    datasets: [
        {
            label: "Home-Owners vs. Tenants",
            data: [380, 277, 1183, 836],
            backgroundColor: [
                "rgb(255, 85, 0)",
                "rgb(0, 204, 0)",
                "rgb(153, 255, 153)",
                "rgb(255, 153, 102)"
            ]
        }
    ]
};
const data = {
    labels: ["Native-Born White", "African American", "Foreign Born White", "Other Races"],
    datasets: [
        {
            label: "Population by Race and Nativity in Deanwood, 1940",
            data: [2412, 9777, 186, 4],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
        }
    ]
};

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


    render() {
        return <div id="map">
            <h1>{this.state.location}</h1>
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <Marker position={this.state.position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                />
                {Object.keys(this.state.censustract).length > 0 &&
                    <GeoJSON data={this.state.censustract} onEachFeature={this.onEachBlock}/>
                };
            </MapContainer>
            <div className="chart-and-table">
                <div className="charts">
                    <h1>Population by Race and Nativity</h1>
                    <Doughnut data={data} />
                    <h1>Home-Owners vs. Tenants</h1>
                    <Pie data={data2} />
                </div>
                <div className="table-container">
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
                </div>
            </div>
        </div>;
    }
}
