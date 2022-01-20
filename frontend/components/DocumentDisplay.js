import React, {useState} from "react";
import * as PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
/**
 * Displays the Document and provides an option to zoom in
 * @param document document metadata (title, etc.)
 *
 */
const DocumentDisplay = (document) => {

    return(
        <div>
            <h1>{document.title}</h1>
            <Image src='{Imagepath}' />
        </div>

};

DocumentDisplay.propTypes = {
    document: PropTypes.object
};

export default DocumentDisplay;
