import React from "react";
import PropTypes from "prop-types";
import * as L from "leaflet";
import MapTimeSlider from "./MapTimeSlider";


const LeafIcon = L.Icon.extend({
    options: {}
});

const blueIcon = new LeafIcon({
    iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
});

function setMarkerColor() {
    return blueIcon;
}

const main_location = {
    coordinates: [38.903760, -76.929470],
    name: ""
};
export const HousingMapWrapper = ({addresses}) => {
    return (
        <MapTimeSlider setMarkerColor={setMarkerColor}
                       data={addresses}
                       legend={[]}
                       timeRange={[1980, 2022]}
                       zoom={17}
                       mainLocation={main_location}/>
    );
};

HousingMapWrapper.propTypes = {
    addresses: PropTypes.array
};

export default HousingMapWrapper;
