import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import MapDeanwood from "../../components/maps/MapDeanwood";
import cases_graph from "../../images/cases_graph.png";
import lives_graph from "../../images/cases_graph.png";
import tests_graph from "../../images/cases_graph.png";

// if putting resource bar back in, add {resources} within parameter parentheses below
export const DeanwoodHealth = ({resources}) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row>
                <h1>Health</h1>
                <h3>COVID in Deanwood: Ward 3 vs. Ward 7</h3>
                <DeanwoodNav selected={"covid_data"} resources={resources}/>
            </Row>
            <Row mt-3>
                <Col>
                    <h5>Positive Cases:</h5>
                    <Image src={cases_graph}/>
                    <p>*Info about above data*</p>
                </Col>
                <Col>
                    <h5>Lives Lost:</h5>
                    <Image src={lives_graph}/>
                    <p>*Info about above data*</p>
                </Col>
                <Col>
                    <h5>Total Tests:</h5>
                    <Image src={tests_graph}/>
                    <p>*Info about above data*</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>I can talk about another graph here.</p>
                </Col>
                <Col>
                    <p>And show it here!</p>
                    <MapDeanwood/>
                </Col>
            </Row>
        </Container>

    </>);

};

DeanwoodHealth.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodHealth;
