import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import MapDeanwood from "../../components/maps/MapDeanwood";
import FoodMap from "../../components/maps/FoodMap";
import DeanwoodOverview from "./DeanwoodOverview";

export const DeanwoodFood = ({resources}) => {
    return (
        <>
        <Container className="city" id="deanwood-overview">
            <Row >
                {/*MENU BAR*/}
                <Row><h1>Menu Bar</h1></Row>
                {/*HOW TO USE BOX*/}
                <Row>
                    <h1>
                        Help (?)
                    </h1>
                    <p className={"hep-text"} style={{backgroundColor:"Gainsboro"}}>
                        Fill in with map use instructions! Fill in with map use instructions!
                        Fill in with map use instructions!
                        Fill in with map use instructions!
                        Fill in with map use instructions!Fill in with map use instructions!
                        Fill in with map use instructions!
                        Fill in with map use instructions!
                    </p>
                </Row>
                {/*MAP AND INFO BOX*/}
                <Row lg = {2} style={{backgroundColor:"green"}}>
                    <Col lg = {8} style={{backgroundColor:"red"}}>
                        <h1>
                            MAP
                        </h1>
                    </Col>
                    <Col lg = {4} style={{backgroundColor:"blue"}}>
                        <h1>
                            LOCATION INFO
                        </h1>
                    </Col>
                </Row>

            </Row>
        </Container>
        </>
     );
 };

DeanwoodFood.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodFood;
