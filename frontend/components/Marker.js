import React from "react";
import {MapContainer, Marker, TileLayer, GeoJSON} from "react-leaflet";

const Marker = (props) => {
    // put functions related to marker behavior? for example, useEffect()

    return (
        <Marker position=props.location/>
    );
}
