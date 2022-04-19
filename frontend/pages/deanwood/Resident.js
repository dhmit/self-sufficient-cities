import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";

export const DeanwoodResident = ({resources}) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row>
                <h1>RESIDENT</h1>
                <h3>Put our big boy & his data here.</h3>
                <DeanwoodNav selected={"covid_data"} resources={resources}/>
            </Row>
            <Row>
                <Col>
                    <p>Column for Ward 3 data.</p>
                </Col>
                <Col>
                    <p>Column for big boy.</p>
                </Col>
                <Col>
                    <p>Column for Ward 7 data.</p>
                </Col>
            </Row>
        </Container>

    </>);

};

DeanwoodResident.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodResident;
