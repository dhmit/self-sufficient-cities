import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import * as PropTypes from "prop-types";
import * as L from "leaflet";

const LeafIcon = L.Icon.extend({
    options: {}
});

const iconUrl = "https://chart.apis.google.com/chart?chst=d_map_pin_letter&";
const blueIcon = new LeafIcon({
    iconUrl: iconUrl + "chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
});

const redIcon = new LeafIcon({
    iconUrl: iconUrl + "chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF"
});

export const MapMarkers = ({selectMarker, markers, selected, position, zoom}) => {
    const markerObjects = markers.map((location, i) => (
        <Marker eventHandlers={{click: selectMarker.bind(location)}} key={i} position={location}
                icon={location === selected ? redIcon : blueIcon}>
        </Marker>
    ));
    return (
        <div className="map map-deeds">
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://stamen-tiles-a.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
                />
                {markerObjects}
            </MapContainer>
        </div>);
};

MapMarkers.propTypes = {
    markers: PropTypes.array,
    selected: PropTypes.array,
    selectMarker: PropTypes.func,
    position: PropTypes.array,
    zoom: PropTypes.number
};


export default MapMarkers;


