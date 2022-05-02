import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line max-len
import {
    MapContainer,
    Popup,
    LayerGroup,
    LayersControl,
    TileLayer,
    GeoJSON,
    Marker,
    Polygon,
    Circle,
    Polyline,
    Tooltip
} from "react-leaflet";
const URL = "/api/get_census_data/";

//import data from "./community.json";



export default class MapMacro extends React.Component {
    state = {
        position: [38.897665, -76.925919],
        censustract: {}
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                //console.log(res.data);
                this.setState({censustract: res.data});
            });



    }



    // load geojson data based on this.props.decade



    render() {

        // eslint-disable-next-line max-len


        let foodMarkers = [];
        let healthMarkers = [];
        let otherMarkers = [];
        let autoMarkers = [];
        let liquorMarkers = [];
        let religionMarkers = [];




        const geos = this.props.data;

        for (let i = 0; i < geos.length; i++) {
            let coords = geos[i]["coordinates"];
            coords.forEach((elt, i) => coords[i] = parseFloat(elt));


            if (geos[i]["kind"] === "Food" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                foodMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            // eslint-disable-next-line max-len
            else if ((geos[i]["kind"] === "Health" || geos[i]["kind"] === "Pharmacy") && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                healthMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Other" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                otherMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Auto" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                autoMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Liquor" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                liquorMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

            else if (geos[i]["kind"] === "Religion" && geos[i]["year"] === this.props.decade) {
                // eslint-disable-next-line max-len
                religionMarkers.push(
                    <Marker key={i.toString()} position = {coords}>
                        <Popup>
                            <p>{geos[i]["name"]}</p>
                        </Popup>
                    </Marker>);
            }

        }

        const purpleOptions = {color: "purple"};
        const redOptions = {color: "red"};

        //console.log("here ", this.props.voronoi);
        let shapes = [];
        let v = this.props.voronoi;
        for (let i = 0; i < v.length; i++) {
            if (v[i]["year"] === this.props.decade) {
                for (let j=0; j< v[i]["shapes"].length; j++) {
                    shapes.push(
                        // eslint-disable-next-line max-len
                        <Polygon id={j.toString()} pathOptions={purpleOptions} positions={v[i]["shapes"][j]}/>
                    );
                }
            }
        }
        let omie = [];
        omie.push(
            // eslint-disable-next-line max-len
            <Circle id={100} center={[38.89874393140099, -76.92357341077269]} pathOptions={redOptions} radius={75}/>
        );

        let paths = this.props.paths;
        console.log(paths);

        for (let i = 0; i < paths.length; i++) {
            if (paths[i]["decade"] === this.props.decade) {
                for (let j=0; j< paths[i]["paths"].length; j++) {
                    console.log("path ", paths[i]["paths"][j]["path"]);
                    omie.push(
                        // eslint-disable-next-line max-len
                        <Polyline id={j.toString()} pathOptions={redOptions} positions={paths[i]["paths"][j]["path"]} pane={"markerPane"}>
                            {/* eslint-disable-next-line max-len */}
                            <Tooltip sticky>{paths[i]["paths"][j]["distance"]} miles in {paths[i]["paths"][j]["time"]} minutes</Tooltip>
                        </Polyline>
                    );
                }
            }
        }





        let L = [];
        //console.log(this.props.mapType);
        if (this.props.mapType === "Food") {
            L = [


                <LayersControl.Overlay key={1} name="Voronoi Representation">
                    <LayerGroup>{shapes}</LayerGroup>
                </LayersControl.Overlay>,

                <LayersControl.Overlay checked key={2} name="Community Boundaries">
                    <LayerGroup>{Object.keys(this.state.censustract).length > 0 &&
                    <GeoJSON data={this.state.censustract}/>}</LayerGroup>
                </LayersControl.Overlay>,

                <LayersControl.Overlay key={3} name="From Omie Cheek's House">
                    <LayerGroup>{omie}</LayerGroup>
                </LayersControl.Overlay>




            ];
        } else if (this.props.mapType === "Religion") {
            L = [


                <LayersControl.Overlay checked key={2} name="Community Boundaries">
                    <LayerGroup>{Object.keys(this.state.censustract).length > 0 &&
                    <GeoJSON data={this.state.censustract}/>}</LayerGroup>
                </LayersControl.Overlay>
            ];
        }

        let m =[];
        if (this.props.mapType === "Food") {
            m = foodMarkers;
        } else if (this.props.mapType === "Religion") {
            m = religionMarkers;
        }


        return <div id="map">
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"

                />


                {m}


                <LayersControl position="topright">
                    {L}
                </LayersControl>


            </MapContainer>
        </div>;
    }
}

MapMacro.propTypes = {
    decade: PropTypes.number,
    data: PropTypes.array,
    mapType: PropTypes.string,
    voronoi: PropTypes.array,
    paths: PropTypes.array
};

Marker.propTypes = {
    position: PropTypes.array

};
