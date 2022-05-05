import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import cases_graph from "../../images/cases_graph.png";
import lives_graph from "../../images/cases_graph.png";
import tests_graph from "../../images/cases_graph.png";


export const DeanwoodCovid = () => {

    return (
        <>
            <Row className={"p-0"}>
                <Col md={6} className={"p-0"}>
                    <Image fluid={true} src={cases_graph}/>
                </Col>
                <Col md={6} className={"p-0 health-description"}>
                    <h5>Positive Cases:</h5>
                    *Info about

                    <span style={{"visibility": "hidden"}}>
                        I don't know yet why this is necessary, but the only thing' +
                        ' that's seeming to give this div any width and put it back
                        into the intended box model flow is words. So here they are.</span>
                    <div className={"empty-space"}>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col className={"p-0"}>
                    <Image fluid={true} src={lives_graph}/>
                </Col>
                <Col className={"p-0"}>
                    <p>
                        <h5>Lives Lost:</h5>
                        *Info about above data*
                    </p>


                </Col>
            </Row>
            <Row>
                <Col className={"p-0"}>
                    <Image fluid={true} src={tests_graph}/>
                </Col>
                <Col className={"p-0"}>
                    <p>
                        <h5>Total Tests:</h5>
                        *Info about above data*
                    </p>
                </Col>
            </Row>
        </>);

};


export default DeanwoodCovid;
