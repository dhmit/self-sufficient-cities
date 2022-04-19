import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import cases_graph from "../../images/cases_graph.png";
import lives_graph from "../../images/cases_graph.png";
import tests_graph from "../../images/cases_graph.png";

export const DeanwoodCovid = ({resources}) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row>
                <h1>COVID</h1>
                <h3>Put all our lil graphs here.</h3>
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
        </Container>

    </>);

};

DeanwoodCovid.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodCovid;
