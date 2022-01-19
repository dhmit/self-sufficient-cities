import React from "react";
import Magnifier from "react-magnifier";
import TEST_IMAGE from "../images/testing.jpg";




const magnifyTest = () => {
    return (
        <div>
            <Magnifier src={TEST_IMAGE} width={100} mgShape='square' mgHeight={300} mgWidth={300} mgMouseOffsetX={300} mgMouseOffsetY={100} zoomFactor={2}/>
        </div>
    );
};

export default magnifyTest;

// export default function ExampleComponent() {
//   return <Magnifier src={TEST_IMAGE} width={500} />;
// }
