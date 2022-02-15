import React from "react";
import * as PropTypes from "prop-types";
import {Badge} from "react-bootstrap";

import {TAG_COLORS, TAG_DISPLAY_NAMES} from "../constants/tags";


const CityTag = ({resource}) => {
    return (
        <Badge pill bg={TAG_COLORS[resource]}>
            {TAG_DISPLAY_NAMES[resource]}
        </Badge>
    );
};

CityTag.propTypes = {
    resource: PropTypes.string
};

export default CityTag;
