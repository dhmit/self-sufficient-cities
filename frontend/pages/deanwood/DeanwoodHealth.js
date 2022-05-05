import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import HealthHome from "../../components/health/HealthHome";
import DeanwoodCovid from "../../components/health/Covid";
import HealthTrends from "../../components/health/Health_Trends";
import DeanwoodResident from "../../components/health/Resident";

export const DeanwoodOverview = ({resources}) => {
    const tabs = [
        {label: "healthHome", name: "Home", el: <HealthHome/>},
        {label: "covidData", name: "COVID-19 Data", el: <DeanwoodCovid/>},
        {label: "healthTrends", name: "Health Trends", el: <HealthTrends/>},
        {
            label: "residentProfile",
            name: "Resident Profile",
            el: <DeanwoodResident/>
        }
    ];
    const [displayState, setDisplayState] = useState("healthHome");
    return (<Container className="city" id="deanwood-health">
            <Row>
                <Col md={3} xl={3} className="nav-col mr-2">
                    <h1>Health in Deanwood, D.C.</h1>
                    <p>
                        Deanwood lies in Ward 7 of the District of Columbia, home to over
                        80 thousand (mostly Black) inhabitants. A couple of miles across the
                        Anacostia lies Ward 3, with about the same number of (mostly White)
                        inhabitants. However, the small distance between the two wards belies
                        a world of difference. The disparity between Ward 3 and Ward 7 is not
                        just demographic or economic: as shown here, it extends to people's
                        health. Those who, by accident of birth, lie in the wrong side of the
                        divide can expect to lead lives that are ten years shorter and have
                        higher rates of chronic diseases such as diabetes.
                    </p>
                    <DeanwoodNav selected={"health"} resources={resources}/>
                </Col>
                <Col md={"auto"} xl={"auto"}>
                    <Row className="mt-5">
                        <Col md={4}/>
                        <Col md={8} className={"p-0"}>
                            <ul className="list-inline">
                                {tabs.map((tab, idx) =>
                                    <li className="list-inline-item" key={`li-tab-${idx}`}>
                                        <Button
                                            className={`btn-health-tab ${displayState === tab.label ? "selected" : ""}`}
                                            key={idx}
                                            onClick={() => setDisplayState(tab.label)}>
                                            {tab.name}
                                        </Button>
                                    </li>
                                )}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className={"p-0"}/>
                        <Col className={"p-0"}>{tabs.map((tab, idx) =>
                            <Container className={"p-0"} key={idx}>
                                {displayState === tab.label && tab.el}
                            </Container>
                        )}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

DeanwoodOverview.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodOverview;
