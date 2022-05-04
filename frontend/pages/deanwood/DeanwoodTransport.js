import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import interstate_highway from "../../images/deanwood/interstate-highway.jpeg";
import i295 from "../../images/deanwood/I295deanwoodkenilworth.png";
import DeanwoodHighwayCard from "./DeanwoodHighwayCard";
import DeanwoodI295Card from "./DeanwoodI295Card";

export const DeanwoodTransport = ({resources}) => {

    return (<>
        <Container className="city" id="deanwood-transport">
            <Row>
                <Col md={3} className="nav-col mr-2">
                    <h1>Deanwood, D.C.</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"transport"} resources={resources}/>
                </Col>


                <Row>
                    <Col md={4}/>
                    <Col>
                        <DeanwoodHighwayCard
                            img_source={interstate_highway}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={4}/>
                    <Col>
                        <DeanwoodI295Card
                            img_source={i295}
                        />
                    </Col>
                </Row>


            </Row>
        </Container>
    </>);

};

DeanwoodTransport.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodTransport;
