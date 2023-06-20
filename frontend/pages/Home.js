import React from "react";
import {Container, Row, Col, Modal, Button} from "react-bootstrap";

import HomePageCard from "../components/home/HomePageCard";
import deanwood_img from "../images/wymar.jpg";
import detroit_img from "../images/detroit.png";
import tn_img from "../images/tn.png";

import Citation from "../components/global/Citation";

const city_data = [
    {
        img: deanwood_img,
        title: "DEANWOOD, D.C.",
        text: "Explore the rise and fall of a self-sustaining neighborhood right in the US" +
            " capital.",
        resources: ["overview", "housing", "food", "health", "transportation", "community",
            "future"],
        class: ""
    },
    {
        img: detroit_img,
        title: "DETROIT, MI",
        text: "Research to come",
        resources: ["overview", "housing", "community", "health"],
        class: "disabled"
    },
    {
        img: tn_img,
        title: "MEMPHIS, TN",
        text: "Research to come",
        resources: ["overview", "housing", "community", "health"],
        class: "disabled"
    }
];

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }
    
      
    render() {
        const handleClose = () => this.setState({show: false});

        return <>
            <Modal show={this.state.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Archived Copy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Self-Sufficient Cities was a project by the <a href = "https://digitalhumanities.mit.edu/">MIT Programs in Digital Humanities</a> in collaboration with our Spring 2022 Faculty Fellow, <a href = "https://sts-program.mit.edu/people/sts-faculty/kate-brown/">Kate Brown</a>, Professor of Science, Technology, and Society at MIT. The project has been archived, and is no longer being actively maintained. 
                    <br/><br/>
                    The project contains student work, and there may be features which are incomplete or inaccurate
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row xs={1} md={2} className='justify-content-around'>
                    <Col md={4} className={"city-heading"}>
                        <h1>Self-Sufficient Cities</h1>
                        <p>
                            Racial discrimination in access to housing, jobs, finance and health
                            care has left a lasting mark on the US urban landscape. In Boston in
                            2015, the average White family’s assets amounted to $247,500. The
                            average Black family’s assets totaled all of $8.00—the price of two
                            McDonald’s happy meals.
                            <a className={"citation-pointer"} href={"#source-1"}>[1]</a>
                            We set out in this digital history lab to figure out at the neighborhood
                            level how this great gap in wealth occurred.
                        </p>

                        <Citation
                            identifier={"source-1"}
                            title={"$8: The Complicated Story Behind One Of " +
                            "The Most Repeated Statistics About Boston."}
                            accessed={"Accessed April 8, 2022."}
                            link={"https://www.wbur.org/news/2021/07/08/greater-boston-black-families-net-worth"}
                        />
                    </Col>
                    <Col>
                        <Row xs={1} md={2}>
                            {city_data.map((data, idx) => {
                                return (
                                    <HomePageCard
                                        extra_class={data.class}
                                        img_source={data.img}
                                        title={data.title}
                                        text={data.text}
                                        resources={data.resources}
                                        key={idx}
                                    />
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>;
    }

};

