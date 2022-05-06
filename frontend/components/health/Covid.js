import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import Citation from "../../components/global/Citation";
import cases_graph from "../../images/cases_graph.png";
import lives_graph from "../../images/lives_graph.png";
import tests_graph from "../../images/tests_graph.png";


export const DeanwoodCovid = () => {

    return (
        <>
            <Row className={"p-0"}>
                <p className={"m-0"}>The following graphs were compiled from OpenDataDC
                    <a className={"citation-pointer"}
                       title={"DC COVID-19 Cases by Ward"}
                       href={"#source-1"}>[1]
                    </a> using Washington D.C. COVID-19 data
                    collected from the start of the pandemic (March 2020) up to January 2022. All
                    data was analyzed and converted into visual representations using Jupyter
                    Notebook.
                </p>
            </Row>
            <Row className={"p-0"}>
                <Col md={6} className={"p-0"}>
                    <h5>Positive Cases:</h5>
                    <Image fluid={true} src={cases_graph}/>
                </Col>
                <Col md={6} className={"p-0 graph-descriptions"}>
                    <p className="emphasized mt-5">By 01/13/2022:</p>
                    <p>
                        <span className={"health-ward3"}>Ward 3:</span> 7181 cases
                    </p>
                    <p>
                        <span className={"emphasized"}>87.7</span> cases per 1000 people</p>
                    <p>
                        <span className={"health-ward7"}>Ward 7:</span> 17748 cases
                    </p>
                    <p><span className={"emphasized"}>229</span> cases per 1000 people</p>
                    <p className="my-2">
                        <span className={"health-ward7"}>Ward 7</span> had ≈
                        <span className={"health-ward7"}>2.6</span>x more cases/person</p>
                    <span style={{"visibility": "hidden"}}>
                        I don't know yet why this is necessary, but the only thing' +
                        ' that's seeming to give this div any width and put it back
                        into the intended box model flow is words. So here they are.</span>

                </Col>
            </Row>

            <Row className="p-0">
                <Col md={6} className={"p-0"}>
                    <h5>Lives Lost:</h5>
                    <Image fluid={true} src={lives_graph}/>
                </Col>
                <Col md={6} className={"p-0 graph-descriptions"}>
                    <p className="emphasized mt-5">by 01/13/2022:</p>
                    <p><span className={"health-ward3"}>Ward 3:</span> 60
                        deaths</p>
                    <p><span className={"emphasized"}>0.7</span> deaths per 1000 people</p>
                    <p><span className={"health-ward7"}>Ward 7:</span> 200
                        deaths</p>
                    <p><span className={"emphasized"}>2.5</span> deaths per 1000 people</p>
                    <p className="my-2"><span className={"health-ward7"}>Ward 7</span> had
                        ≈ <span className={"health-ward7"}>3.5</span>x more deaths/person</p>
                </Col>
            </Row>

            <Row className="p-0">
                <Col md={6} className={"p-0"}>
                    <h5>Total Tests:</h5>
                    <Image fluid={true} src={tests_graph}/>
                </Col>
                <Col md={6} className={"p-0 graph-descriptions"}>
                    <p className="emphasized mt-5">by 01/10/2022:</p>
                    <p><span className={"health-ward3"}>Ward 3:</span> 287,717
                        tests</p>
                    <p><span className={"emphasized"}>3514</span> tests per 1000 people</p>
                    <p><span className={"health-ward7"}>Ward 7:</span> 238,388
                        tests</p>
                    <p><span className={"emphasized"}>3078</span> tests per 1000 people</p>
                    <p className="my-2"><span className={"health-ward3"}>Ward 3</span> had
                        ≈ <span className={"health-ward3"}>1.14</span>x more tests/person</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={8}>
                    <h2>Sources</h2>
                    <Citation identifier={"source-1"}
                              title={"DC COVID-19 Cases by Ward"}
                              link={"https://opendata.dc.gov/datasets/dc-covid-19-cases-by-ward/explore?showTable=true"}/>
                </Col>
            </Row>
        </>
    );
};


export default DeanwoodCovid;
