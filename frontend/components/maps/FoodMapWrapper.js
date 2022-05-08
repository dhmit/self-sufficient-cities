import React, {useState, useEffect} from "react";
import * as L from "leaflet";
import MapTimeSlider from "./MapTimeSlider";


const LeafIcon = L.Icon.extend({
    options: {}
});

const iconUrl = "https://chart.apis.google.com/chart?chst=d_map_pin_letter&";
const blueIcon = new LeafIcon({
        iconUrl: iconUrl + "chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    }),
    greenIcon = new LeafIcon({
        iconUrl: iconUrl + "chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    }),
    yellowIcon = new LeafIcon({
        iconUrl: iconUrl + "chld=•|ffc800&chf=a,s,ee00FFFF"
    }),
    redIcon = new LeafIcon({
        iconUrl: iconUrl + "chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF"
    }),
    purpleIcon = new LeafIcon({
        iconUrl: iconUrl + "chld=%E2%80%A2|a134eb&chf=a,s,ee00FFFF"
    });

function setMarkerColor(type) {
    if (!type) {
        return blueIcon;
    } else if (type === "grocery") {
        return purpleIcon;
    } else if (type === "convenience") {
        return greenIcon;
    } else if (type === "restaurant") {
        return yellowIcon;
    } else if (type === "liquor") {
        return redIcon;
    }
}

const main_location = {
    coordinates: [38.90, -76.93],
    name: "Map of food services over time"
};

const legend = [
    ["#a134eb", "Grocery"],
    ["#2ecc71", "Convenience"],
    ["#ffc800", "Restaurant"],
    ["#e85141", "Liquor"]
];


export const FoodMapWrapper = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        return fetch("/api/get_food_addresses/").then(response => {
            return response.json();
        });
    };

    useEffect(() => {
        fetchData().then(res => {
            setData(res.address_data);
        });
    }, []);

    return (
        <MapTimeSlider setMarkerColor={setMarkerColor}
                       data={data}
                       legend={legend}
                       timeRange={[1943, 2022]}
                       mainLocation={main_location}/>
    );
};

export default FoodMapWrapper;
