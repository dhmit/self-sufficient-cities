import React from "react";
import * as PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import TEST_IMAGE from "../images/testing.jpg";
/**
 * Displays the Document and provides an option to zoom in
 * @param document document metadata (title, etc.)
 *
 */
const DocumentDisplay = ({document}) => {

    // TODO: import magnifying feature and call it with document image from backend
    return(
        <>
            <img className="doc-image" src={document.imageRef ? document.imageRef : TEST_IMAGE} />
        </>
    );

};

DocumentDisplay.propTypes = {
    document: PropTypes.object
};

export default DocumentDisplay;
