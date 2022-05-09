import React from "react";
import {Col} from "react-bootstrap";
import MapDeanwood from "../maps/MapDeanwood";
import * as PropTypes from "prop-types";

const DeanwoodI295Card = ({deanwood_boundary, kenilworth_boundary}) => {
    return (
        <Col>
            <h2>I-295 and Deanwood</h2>
            <div>
                <p>
                    When African Americans moved to Deanwood, white people began to move out.
                    This was the beginning of “white flight” from Deanwood to other areas including
                    Kenilworth, marking a demographic shift of the Deanwood population. The
                    construction of the I-295 played a part in the isolation of the black community
                    from other areas. To this day, I-295 serves as a barrier for those living in the
                    neighborhoods in Deanwood, blocking residents from access to the parks, shops,
                    and other amenities on the west side of the highway.
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
