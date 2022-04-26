import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
// import Lifeexpectancy from "./Lifeexpectancy";
import HealthTrends from "./Health_Trends";

// if putting resource bar back in, add {resources} within parameter parentheses below
export const DeanwoodHealth = ({resources}) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row>
                <h1>Health</h1>
                <h3>COVID in Deanwood: Ward 3 vs. Ward 7</h3>
                <DeanwoodNav selected={"covid_data"} resources={resources}/>
            </Row>
            <Row>
                <HealthTrends/>

            </Row>

            <Row>
                <Col>
                    <p>Home page with any necessary intro information!</p>
                </Col>
            </Row>
        </Container>

    </>);

};

DeanwoodHealth.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodHealth;
