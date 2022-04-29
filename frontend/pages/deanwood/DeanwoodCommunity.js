import React, {useState} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import * as Text from "./DeanwoodCommunityText";
import Suburban_gardens from "../../images/suburban_gardens.png";
import Deanwood_kiosk from "../../images/deanwood_kiosk.png";
import MapDeanwood from "../../components/maps/MapDeanwood";

const quotes = ["Eligendi excepturi corporis velit " +
"provident dicta neque autem. Enim ab at distinctio " +
"enim debitis temporibus. Provident enim natus cumque. " +
"Quibusdam impedit nam et ipsam. Consequatur earum quam " +
"dolore doloremque earum.… Eligendi excepturi corporis velit " +
"provident dicta neque autem. Enim ab at distinctio enim debitis " +
"temporibus. Provident enim natus cumque. Quibusdam impedit nam et ipsam. " +
"Consequatur earum quam dolore doloremque earum.", "Hello this is a test", "This is another test" +
" to see if the quotes are properly cycling through the carousel"];


const DeanwoodProfile = (statement, hasMap = true, hasTitle = true,
    title = "", source = "", alt_text = "") => {
    let right;
    if (hasMap) {
        right = <Col><MapDeanwood/></Col>;
    }
    else if (source) {
        right = <Col><Image src={source} alt={alt_text} fluid={true}/></Col>;
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
    const [imageNum, setImage] = useState(0);
    const numQuotes = quotes.length;

    const forward = () => {
        setImage((imageNum + 1) % numQuotes);
    };

    const backward = () => {
        if (imageNum === 0){
            setImage(numQuotes - 1);
        }
        else{
            setImage((imageNum - 1) % numQuotes);
        }
    };

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
                <Row xs={1} md={2} className="Prime mt-5">
                    <Col md={4}/>
                    <Col className = "Holder" >
                        <Row className = "Carousel justify-content-between align-items-center">
                            <Col className = "justify-content-center">
                                <button onClick = {backward}>
                                    Left
                                </button>
                            </Col>
                            <Col className = "col-9">
                                <p className={"intro-text"}>
                                    {quotes[imageNum]}
                                </p>
                            </Col>

                            <Col className = "justify-content-center">
                                <button onClick = {forward}>
                                    Right
                                </button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.quoteContext, false, false)}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <h3>
                            {Text.uniqueDeanwood}
                        </h3>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.infrastructure1, false, true,
                    "Lack of Public Infrastructure", Suburban_gardens,
                    "The Suburban Gardens amusement park")}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.senatorTaxesQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.infrastructure2, false, false,
                    "", Deanwood_kiosk, "A small kiosk where Deanwood's books are kept")}
                {DeanwoodProfile(Text.selfReliance1, false, true,
                    "Self-Reliance and Farming")}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.surplusQuote}
                        </blockquote>
                    </Col>
                </Row>
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.raiseChickensQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.selfReliance2, true, false)}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.lifesaverQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.selfReliance3, false, false)}
                <Row>
                    <Col md = {4}/>
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
