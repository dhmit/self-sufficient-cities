import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import cases_graph from "../../images/cases_graph.png";
import lives_graph from "../../images/cases_graph.png";
import tests_graph from "../../images/cases_graph.png";

export const DeanwoodCovid = () => {

    return (<>
        <Row mt-3>
            <Col>
                <h5>Positive Cases:</h5>
                <Image src={cases_graph}/>
                <p>*Info about above data*</p>
            </Col>
            <Col>
                <h5>Lives Lost:</h5>
                <Image src={lives_graph}/>
                <p>*Info about above data*</p>
            </Col>
            <Col>
                <h5>Total Tests:</h5>
                <Image src={tests_graph}/>
                <p>*Info about above data*</p>
            </Col>
        </Row>

    </>);

};


export default DeanwoodCovid;
