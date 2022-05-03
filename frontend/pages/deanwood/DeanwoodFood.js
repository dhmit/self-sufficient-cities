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
                <Col md={3} className="nav-col mr-2">
                    <h1>Food in Deanwood, D.C.</h1>
                    <p>
                        In the modern day, Deanwood might be called a “food desert,” a
                        low-income census tract where a substantial number of residents have
                        low access to a supermarket or large grocery store, as defined by the
                        Economic Research Service (ERS) in 2011. As of 2017, there are only two
                        full-service grocery stores in Ward 7, the ward of DC that contains
                        Deanwood, for a population of 80,000 people. But such a bleak statistic
                        is not without history. Ashante Reese, in her book Black Food
                        Geographies, points out that literature on the topic of food scarcity
                        (involving racial biases or not) tends to frame “lack” as a terminal
                        issue without struggle. These texts often paint a desolate picture of
                        access and inaction for communities like Deanwood but fail to document
                        how residents adapt and create their own opportunities in response.
                        Deanwood has a rich history, particularly in the area of food, and with
                        this project, we hope to illuminate how Deanwood residents sustained
                        themselves even with a lack of outside support.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
                </Col>
                <Row xs={1} md={2} className="justify-content-around mt-5">
                    <Col md={4}/>
                    <Col md={4}>
                        <p>
                            The project tells the rise and fall of urban communities that grew their
                            own food in the 20th century United States. Taking the Deanwood
                            neighborhood in Washington, D.C. as their starting place, students
                            consulted newspaper articles and census data to design an interactive
                            site. This specific page shows through an interactive food map
                            how access to food for residents in Deanwood has changed over time from
                            the early 1900s to the present day.
                        </p>
                    </Col>
                    <Col md={4}>
                        <blockquote>
                            "Because I am a family of five, I have to go frequent to the grocery
                            store quite often. And a lot of times I have to go over to the Maryland
                            side, because of the quality of food at the Safeway on Minnesota Avenue.
                            Or there is not a grocery store in a good maybe five-mile, maybe more,
                            vicinity." -- Research Participant from Ashanté Reese's There Ain't
                            Nothing in Deanwood

                        </blockquote>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}/>
                    <Col><FoodMap/></Col>

                </Row>
                <Row className="mt-5">
                    <Row>
                    <Col md={4}/>
                    <Col>
                        <p>
                            Throughout the 1900s, Deanwood received less government investment and
                            benefits compared to similar-sized White neighborhoods in DC, such as
                            Kenilworth. However, the ways in which the residents of Deanwood adapted
                            helped the neighborhood develop a healthy, self-sustaining economy.
                        </p>
                    </Col>
                </Row>
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
