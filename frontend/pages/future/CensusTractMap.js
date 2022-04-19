import React from "react";
import axios from "axios";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";

export default class CensusTractMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: [38.897665, -76.925919],
            census_tracts: {}
        };
    }

    componentDidMount() {
        axios.get("/api/get_1940_census_geodata")
            .then((res) => {
                this.setState({census_tracts: res.data.features});
                console.log(res.data);
            });
    }

    styleTracts(tract_data) {
        return {
            color: tract_data.properties.SHAPE_AREA > 1803508 ? "green" : "red"
        };
    }

    render() {
        return (
            <div id="map">
                <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                    />
                    {Object.keys(this.state.census_tracts).length > 0 &&
                        this.state.census_tracts.map(tract => {
                            return (<GeoJSON key={tract.properties["GISJOIN"]}
                                data={tract} style={() => this.styleTracts(tract)}/>);
                        })
                    };
                </MapContainer>
            </div>
        );
    }
}
