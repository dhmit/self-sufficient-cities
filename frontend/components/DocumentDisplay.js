import React, {useState} from "react";
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

    return(
        <>
            <img className={STYLES.docImage} src={TEST_IMAGE} />
        </>
    );

};

DocumentDisplay.propTypes = {
    document: PropTypes.object
};

export default DocumentDisplay;
