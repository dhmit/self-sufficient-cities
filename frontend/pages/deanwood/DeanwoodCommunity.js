import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import * as Text from "./DeanwoodCommunityText";
import MapDeanwood from "../../components/maps/MapDeanwood";

const DeanwoodProfile = (statement, map = true, source = "") => {
    let right;
    if (map){
        right = <Col><MapDeanwood/></Col>;
    }
    else{
        right = <img src = {source} ></img>;
    }
    let statement_array = statement.split("\n");
    return (<div className={"Profile"}>
        <Row>
            <Col md={4}/>
            <Col>
                {statement_array.map(s => (
                    <p key={s} className={"intro-text"}>{s}</p>
                ))}
            </Col>
            {right}
        </Row>
    </div>);
};

export const DeanwoodCommunity = ({resources}) => {
    return (<>
        <Container className="city" id="deanwood-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Deanwood, D.C.</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
                </Col>
                <Row xs={1} md={2} className="justify-content-around mt-5">
                    <Col md={4}/>
                    <Col md={4}>
                        <p className={"intro-text"}>
                            Eligendi excepturi corporis velit provident dicta neque autem. Enim ab
                            at
                            distinctio enim debitis temporibus. Provident enim natus cumque.
                            Quibusdam
                            impedit nam et ipsam. Consequatur earum quam dolore doloremque earum.…
                            Eligendi excepturi corporis velit provident dicta neque autem.
                            Enim ab at distinctio enim debitis temporibus.
                            Provident enim natus cumque. Quibusdam impedit nam
                            et ipsam. Consequatur earum quam dolore doloremque earum.…
                        </p>
                    </Col>
                    <Col md={4}>
                        <blockquote>
                            "This is a blockquote. Eligendi excepturi corporis velit. Enim
                            ab at distinctio enim debitis temporibus"
                        </blockquote>
                    </Col>
                </Row>
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <blockquote>
                           "Deanwood was once a propsperous
                           neighborhood with a close-knit community Deanwood was once a propsperous
                           neighborhood with a close-knit communityDeanwood was once a propsperous
                           neighborhood with a close-knit community"
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.quoteContext, false)}
                {DeanwoodProfile(Text.fillerString, true)}

            </Row>
        </Container>
    </>);

};

DeanwoodCommunity.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodCommunity;
