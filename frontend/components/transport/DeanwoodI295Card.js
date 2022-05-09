import React from "react";
import {Col} from "react-bootstrap";
import MapDeanwood from "../maps/MapDeanwood";
import * as PropTypes from "prop-types";

const DeanwoodI295Card = ({deanwood_boundary, kenilworth_boundary}) => {
    return (
        <Col>
            <h3>I-295 and Deanwood</h3>
            <div>
                <p>
                    The story of I-295 and Deanwood begins with the trend of Urban Renewal in
                    Washington D.C. before the post World War II period. Alleyways where
                    African Americans lived were cleared under the guise of “sanitation
                    reasons,” before they were pushed into Deanwood in the 1940s. From this
                    point there was the beginning of a “white flight” from Deanwood to other
                    areas, with Kenilworth being one of them. This marks the beginning of a
                    demographic shift of the Deanwood population, and one can see how the
                    construction of I-295 played a part in the isolation of the black community
                    from other areas. I-295 serves as a barrier for those living in the
                    neighborhoods in Deanwood from gaining access to the parks on the west
                    side of the highway, which you can see from the map below.
                </p>
            </div>

            <MapDeanwood deanwoodBoundary={deanwood_boundary}
                         kenilworthBoundary={kenilworth_boundary}
                         zoom={14} position={[38.9052, -76.9336]}
                         legend={[["rgb(0,89,255)", "Deanwood boundary"],
                             ["rgb(255,114,0)", "Kenilworth boundary"]]}/>
            <small>Map of Kenilworth and Deanwood, split by I-295</small>
        </Col>
    );
};


DeanwoodI295Card.propTypes = {
    deanwood_boundary: PropTypes.object,
    kenilworth_boundary: PropTypes.object
};

export default DeanwoodI295Card;
