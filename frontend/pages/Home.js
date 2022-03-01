import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import HomePageCard from "../components/home/HomePageCard";
import dh_logo from "../images/dh_logo.svg";


export default class Home extends React.Component {
    render() {
        return <>
            <Container>
                <Row xs={1} md={2} className='justify-content-around'>
                    <Col md={4}>
                        <h1>Self-Sufficient Cities</h1>
                        <p>
                            The project tells the rise and fall of urban communities that grew their
                            own food in the 20th century United States. Taking the Deanwood
                            neighborhood in Washington, D.C. as their starting place, students
                            consulted newspaper articles and census data to design an interactive
                            site.
                        </p>
                    </Col>
                    <Col>
                        <Row xs={1} md={2}>
                            <HomePageCard
                                img_source={dh_logo}
                                title='DEANWOOD, D.C.'
                                text='Explore the rise and fall of a self-sustaining neighborhood
                                right in the US capital.'
                                resources={["oral_history", "map", "timeline"]}
                            />
                            <HomePageCard
                                img_source={dh_logo}
                                title='DETROIT, MI'
                                text='Filler text!'
                                resources={["map", "oral_history"]}
                            />
                            <HomePageCard
                                img_source={dh_logo}
                                title='MEMPHIS, TN'
                                text='Filler text!'
                                resources={["map", "timeline", "oral_history"]}
                            />
                            <HomePageCard
                                img_source={dh_logo}
                                title='Sampleville'
                                text='More text coming soon?'
                                resources={["oral_history", "timeline"]}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>;
    }

};

