import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import * as Text from "./DeanwoodCommunityText";
import MapDeanwood from "../../components/maps/MapDeanwood";

const DeanwoodProfile = (statement, hasMap = true, hasTitle = true, title = "", source = "") => {
    let right;
    if (hasMap){
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
                {hasTitle && <h2>{title}</h2>}
                {statement_array.map((s, idx) => (
                    <p key={idx} className={"intro-text"}>{s}</p>
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
                {DeanwoodProfile(Text.quoteContext, false, false)}
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <h3>
                            {Text.uniqueDeanwood}
                        </h3>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.infrastructure1, false, true, "Lack of Public" +
                    " Infrastructure", "../../images/suburban_gardens.png")}
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <blockquote>
                            {Text.senatorTaxesQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.infrastructure2, false, false )}
                {DeanwoodProfile(Text.selfReliance1, false, true, "Self-Reliance and Farming")}
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <blockquote>
                            {Text.surplusQuote}
                        </blockquote>
                    </Col>
                </Row>
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <blockquote>
                            {Text.raiseChickensQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.selfReliance2, true, false)}
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <blockquote>
                            {Text.lifesaverQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.selfReliance3, false, false)}
                <Row>
                    <Col md = {4}></Col>
                    <Col>
                        <blockquote>
                            {Text.noStoresQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile("", true, true, "Churches as Centers of Community")}
                {DeanwoodProfile(Text.conclusion, false, true, "Conclusion")}







            </Row>
        </Container>
    </>);

};

DeanwoodCommunity.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodCommunity;
