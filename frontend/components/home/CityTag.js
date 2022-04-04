import React from "react";
import * as PropTypes from "prop-types";

import {TAG_CLASS, TAG_DISPLAY_NAMES} from "../../constants/tags";


const CityTag = ({resource}) => {
    return (
        <span className={"city-tag-" + TAG_CLASS[resource]}>
            {TAG_DISPLAY_NAMES[resource]}
        </span>
    );
};

CityTag.propTypes = {
    resource: PropTypes.string
};

export default CityTag;
