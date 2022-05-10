import React from "react";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import Legend from "./Legend";
import * as PropTypes from "prop-types";

export default class MapDeanwood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorDeanwood: "",
            colorKenilworth: "",
            colorCensus: "",
            colorWard7: "",
            mapLink: this.props.mapStyle && this.props.mapStyle === "bw"
                ? "http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        };
    }

    componentDidMount() {
        this.props.legend.map((item) => {
            if (item[1].indexOf("Deanwood") > -1) {
                this.setState({colorDeanwood: item[0]});
            } else if (item[1].indexOf("Kenilworth") > -1) {
                this.setState({colorKenilworth: item[0]});
            } else if (item[1].indexOf("Census") > -1) {
                this.setState({colorCensus: item[0]});
            } else if (item[1].indexOf("Ward 7") > -1) {
                this.setState({colorWard7: item[0]});
            }
        });

    }


    render() {
        return <div className="map">
            <MapContainer center={this.props.position} zoom={this.props.zoom}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={this.state.mapLink}
                />
                {this.props.censusBoundary && Object.keys(this.props.censusBoundary).length > 0 &&
                <GeoJSON data={this.props.censusBoundary} key={"census-boundary"}
                         pathOptions={{color: this.state.colorCensus, fillOpacity: 0}}
                />
                };
                {this.props.kenilworthBoundary && Object.keys(this.props.kenilworthBoundary).length > 0 &&
                <GeoJSON data={this.props.kenilworthBoundary} key={"kenilworth-boundary"}
                         pathOptions={{color: this.state.colorKenilworth, fillOpacity: 0}}
                />
                };
                {this.props.ward7Boundary && Object.keys(this.props.ward7Boundary).length > 0 &&
                <GeoJSON data={this.props.ward7Boundary} key={"ward7-boundary"}
                         pathOptions={{color: this.state.colorWard7, fillOpacity: 0}}
                />
                };
                {this.props.deanwoodBoundary && Object.keys(this.props.deanwoodBoundary).length > 0 &&
                <GeoJSON data={this.props.deanwoodBoundary} key={"deanwood-boundary"}
                         pathOptions={{color: this.state.colorDeanwood, fillOpacity: 0}}
                />
                };
                <Legend options={this.props.legend}/>

            </MapContainer>
        </div>;
    }
}


MapDeanwood.propTypes = {
    censusBoundary: PropTypes.object,
    deanwoodBoundary: PropTypes.object,
    kenilworthBoundary: PropTypes.object,
    ward7Boundary: PropTypes.object,
    zoom: PropTypes.number,
    position: PropTypes.array,
    legend: PropTypes.array,
    mapStyle: PropTypes.string
};
