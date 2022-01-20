import React from "react";
import * as PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import TEST_IMAGE from "../images/testing.jpg";
import STYLES from "./DocumentDisplay.module.scss";
/**
 * Displays the Document and provides an option to zoom in
 * @param document document metadata (title, etc.)
 *
 */
const DocumentDisplay = ({document}) => {

    // TODO: import magnifying feature and call it with document image from backend
    return(
        <>
            <img className={STYLES.docImage} src={document.image ? document.image : TEST_IMAGE} />
        </>
    );

};

DocumentDisplay.propTypes = {
    document: PropTypes.object
};

export default DocumentDisplay;
