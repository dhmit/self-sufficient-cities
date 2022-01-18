import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React from "react";

// import "calvinmetcalf/leaflet-ajax";

// $.getJSON("usa_adm.geojson",function(data){
//     // L.geoJson function is used to parse geojson file and load on to map
//     L.geoJson(data).addTo(newMap);
// });
// const DCTractsGeoJson = new L.GeoJSON.AJAX("tl_2021_11_tract.geojson");
// const DCTractsGeoJson = L.geoJson("tl_2021_11_tract.geojson");
// console.log(L.geoJson("tl_2021_11_tract.geojson"));


// $.ajax({
//     type: "POST",
//     url: "tl_2021_11_tract.geojson",
//     dataType: 'json',
//     success: function (response) {
//         let DCTractsGeoJson = L.geoJson(response);
//         console.log(DCTractsGeoJson);
//     }
// });

// fetch("frontend/components/tl_2021_11_tract.geojson", {
//     method: 'get'
// }).then(function(response){
//     // success
//     console.log(response);
//     });

// Using Axios?????????

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'tl_2021_11_tract.geojson');
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.responseType = 'json';
// xhr.onload = function() {
//     if (xhr.status !== 200) return;
//     console.log(xhr.response);
// };
// xhr.send();

export default class Map extends React.Component {
    state = {
        position: [38.9051606, -77.0036513],
        location: "Deanwood neighborhood, Washington DC"
    }

    render() {
        return <div id="map">
            <h1>{this.state.location}</h1>
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={this.state.position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>;
    }
}
