import React, {useState} from "react";
import * as PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import TEST_IMAGE from "../images/testing.jpg";
import Magnifier from "react-magnifier";
import {number} from "prop-types";

/**
 * Displays the Document and provides an option to zoom in
 * @param document document metadata (title, etc.)
 *
 */
const DocumentDisplay = ({document}) => {
    const [Scale, setScale] = useState(Scale);



    // TODO: call magnifying feature with document image from backend
    return(
        <>

            <Magnifier className="doc-image" src={document.image ? document.image : TEST_IMAGE}
                mgShape='square' mgHeight={300} mgWidth={300}
                mgMouseOffsetX={-50} mgMouseOffsetY={50} zoomFactor={Scale}/>

            <label className="labels">Magnification Scale:   </label>
            <input
                     type="number"
                     min="1.0"
                     max="5.0"
                     value={Scale}
                     placeholder="1.0"
                     onChange={e => setScale(e.target.value)}
            />
            
        </>
    );
};

DocumentDisplay.propTypes = {
    document: PropTypes.object
};

export default DocumentDisplay;
