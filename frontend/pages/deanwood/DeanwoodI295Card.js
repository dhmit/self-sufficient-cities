import React from "react";
import * as PropTypes from "prop-types";
import {Col, Figure} from "react-bootstrap";

const DeanwoodI295Card = ({img_source}) => {
    return (
        <Col>
            <div className='city-card'>
                <h3>I-295 and Deanwood</h3>
                {/*<p>{text}</p>*/}
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

                <Figure>
                    <Figure.Image
                        src={img_source}/>
                    <Figure.Caption>
                        Map of Kenilworth and Deanwood, split by I-295
                    </Figure.Caption>
                </Figure>

            </div>
        </Col>
    );
};

DeanwoodI295Card.propTypes = {
    img_source: PropTypes.string
};

export default DeanwoodI295Card;
