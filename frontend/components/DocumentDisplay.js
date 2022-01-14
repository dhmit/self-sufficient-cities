import React, {useState} from "react";
import * as PropTypes from "prop-types";

/**
 * Displays the Document and provides an option to zoom in
 * @param document document metadata (title, etc.)
 *
 */
const DocumentDisplay = (document) => {

    return(
        <>
            <h1>{document.title}</h1>
        </>
    );
};

DocumentDisplay.propTypes = {
    document: PropTypes.object,
};

export default DocumentDisplay;
