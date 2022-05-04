import React from "react";
import * as PropTypes from "prop-types";

import {TAG_CLASS, TAG_DISPLAY_NAMES} from "../../constants/tags";


const CityTag = ({resource}) => {
    return (
        <a href={resource === "overview" ? "/deanwood/" : "/deanwood/" + resource}
            className={"city-tag-" + TAG_CLASS[resource]}
            key={"deanwood-" + resource}>
            {TAG_DISPLAY_NAMES[resource]}
        </a>
    );
};

CityTag.propTypes = {
    resource: PropTypes.string
};

export default CityTag;
