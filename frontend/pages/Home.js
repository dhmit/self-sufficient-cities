import React from "react";
import {Container, Row, Col} from "react-bootstrap";

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
    render() {
        return <>
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

