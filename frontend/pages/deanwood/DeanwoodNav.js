import React from "react";
import {TAG_CLASS, TAG_DISPLAY_NAMES} from "../../constants/tags";
import * as PropTypes from "prop-types";

export const DeanwoodNav = ({resources, selected}) => {
    return (<div className="city-links">
        {resources.map(resource => {
            return <a href={resource === "overview" ? "/deanwood/" : "/deanwood/" + resource}
                className={selected === resource
                    ? "selected city-tag-" + TAG_CLASS[resource]
                    : "city-tag-" + TAG_CLASS[resource]}
                key={"deanwood-" + resource}>
                {TAG_DISPLAY_NAMES[resource]}
            </a>;
        })}
    </div>);

};


DeanwoodNav.propTypes = {
    resources: PropTypes.array,
    selected: PropTypes.string
};


export default DeanwoodNav;
