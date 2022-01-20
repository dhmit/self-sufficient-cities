import React, {useState} from "react";
import Magnifier from "react-magnifier";
import TEST_IMAGE from "../images/testing.jpg";
import {number} from "prop-types";




const magnifyTest = () => {
    const [Scale, setScale] = useState(1.5);

     const handleIncrement = () =>
         setScale(currentCount => currentCount + 0.1);
     const handleDecrement = () =>
        setScale(currentCount => currentCount - 0.1);

     return (
        <div>

            <Magnifier src={TEST_IMAGE} width={100} mgShape='square' mgHeight={300} mgWidth={300} mgMouseOffsetX={300} mgMouseOffsetY={100} zoomFactor={Scale}/>
            <h5>Magnification Scale:{Scale.toFixed(2)}</h5>
            <button type="button" onClick={handleIncrement}>Increase</button>
            <button type="button" onClick={handleDecrement}>Decrease </button>

        </div>
    );
};

export default magnifyTest;

