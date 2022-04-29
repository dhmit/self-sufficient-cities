import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import MapDeanwood from "../../components/maps/MapDeanwood";

export const DeanwoodFood = ({resources}) => {

    return (<>
        <Container className="food" id="deanwood-food">
            <Row >
                {/*MENU BAR*/}
                <Row><h1>Menu Bar</h1></Row>
                {/*HOW TO USE BOX*/}
                <Row>
                    <h1>
                        Help Box
                    </h1>
                </Row>
                {/*MAP AND INFO BOX*/}
                <Row lg = {2} style={{backgroundColor:"green"}}>
                    <Col style={{backgroundColor:"red"}}>
                        <h1>
                            MAP
                        </h1>
                    </Col>
                    <Col style={{backgroundColor:"blue"}}>
                        <h1>
                            LOCATION INFO
                        </h1>
                    </Col>
                </Row>

            </Row>
        </Container>
    </>);

};

DeanwoodFood.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodFood;
