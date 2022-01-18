import React from "react";
import * as PropTypes from "prop-types";

const ShowcaseItem = ({title, date, imageRef}) => {

    return (
        <li className="showcase-item">
            <img src={imageRef} alt="" />
            <p>
                {date}
                {title}
            </p>
        </li>
    );
};

ShowcaseItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.object,
    imageRef: PropTypes.string,
};

export default ShowcaseItem;