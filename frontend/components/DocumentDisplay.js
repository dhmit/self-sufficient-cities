import React, {useState} from "react";
import * as PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import TEST_IMAGE from "../images/testing.jpg";
import Magnifier from "react-magnifier";

/**
 * Displays the Document and provides an option to zoom in
 * @param document document metadata (title, etc.)
 *
 */
const DocumentDisplay = ({document}) => {
    const [Scale, setScale] = useState(1.5);
    const handleIncrement = () =>
        setScale(currentCount => currentCount + 0.1);
    const handleDecrement = () =>
        setScale(currentCount => currentCount - 0.1);


    // TODO: call magnifying feature with document image from backend
    return(
        <>
            <Magnifier className="doc-image" src={document.image ? document.image : TEST_IMAGE}
                mgShape='square' mgHeight={300} mgWidth={300}
                mgMouseOffsetX={-50} mgMouseOffsetY={50} zoomFactor={Scale}/>
            <h5>Magnification Scale: {Scale.toFixed(2)}</h5>
            <button className="btn btn-outline-secondary mx-2" type="button"
                onClick={handleIncrement}>Increase</button>
            <button className="btn btn-outline-secondary" type="button"
                onClick={handleDecrement}>Decrease </button>

        </>
    );

};

DocumentDisplay.propTypes = {
    document: PropTypes.object
};

export default DocumentDisplay;
