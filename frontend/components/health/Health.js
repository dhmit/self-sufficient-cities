import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodCovid from "./Covid";
import DeanwoodResident from "./Resident";
import HealthTrends from "./Health_Trends";


// if putting resource bar back in, add {resources} within parameter parentheses below
export const DeanwoodHealth = ({resources}) => {
    const tabs = [
        {label: "covidData", name: "COVID-19 Data", el: <DeanwoodCovid resources={resources}/>},
        {label: "healthTrends", name: "Health Trends", el: <HealthTrends resources={resources}/>},
        {
            label: "residentProfile",
            name: "Resident Profile",
            el: <DeanwoodResident resources={resources}/>
        }
    ];
    const [displayState, setDisplayState] = useState("residentProfile");
    return (<>
        <Container className="city" id="deanwood-overview">
            <Row>
                <h1>Health</h1>
                <h3>COVID in Deanwood: Ward 3 vs. Ward 7</h3>
            </Row>

            <Row>
                {tabs.map((tab, idx) =>
                    <Col key={idx}>
                        <Button key={idx} onClick={() => setDisplayState(tab.label)}>
                            {tab.name}
                        </Button>
                    </Col>
                )}
            </Row>

            <Row>
                {tabs.map((tab, idx) =>
                    <Container key={idx}>
                        {displayState === tab.label && tab.el}
                    </Container>
                )}
            </Row>
        </Container>

    </>);

};

DeanwoodHealth.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodHealth;
