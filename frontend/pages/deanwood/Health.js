import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodCovid from "./Covid";
// import DeanwoodResident from "./Resident";
import HealthTrends from "./Health_Trends";
import HealthHome from "./HealthHome";
import DeanwoodNav from "./DeanwoodNav";

// if putting resource bar back in, add {resources} within parameter parentheses below
export const DeanwoodHealth = ({resources}) => {
    const tabs = [
        {label: "healthHome", name: "Home", el: <HealthHome resources={resources}/>},
        {label: "covidData", name: "COVID-19 Data", el: <DeanwoodCovid resources={resources}/>},
        {label: "healthTrends", name: "Health Trends", el: <HealthTrends resources={resources}/>}
    ];
        // {
        //     label: "residentProfile",
        //     name: "Resident Profile",
        //     el: <DeanwoodResident resources={resources}/>
        // }
    const [displayState, setDisplayState] = useState("healthHome");
    return (<>
        <Container className="city" id="deanwood-health">
            <Row>
                <Col md={3} sm={12} className="nav-col mr-2">
                    <h1>Deanwood, D.C.</h1>
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
                <Row className="justify-content-around mt-5">
                    <Col md={4} className={"p-0"}/>
                    <Col md={8} className={"p-0"}>
                        <ul className="list-inline">
                            {tabs.map((tab, idx) =>
                                <li className="list-inline-item" key={`li-tab-${idx}`}>
                                    <Button key={idx} onClick={() => setDisplayState(tab.label)}>
                                        {tab.name}
                                    </Button>
                                </li>
                            )}
                        </ul>
                        <Col md={12} className={"p-0"}>
                            {tabs.map((tab, idx) =>
                                <div key={idx}>
                                    {displayState === tab.label && tab.el}
                                </div>
                            )}
                        </Col>
                    </Col>
                </Row>
            </Row>
        </Container>

    </>);

};

DeanwoodHealth.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodHealth;
