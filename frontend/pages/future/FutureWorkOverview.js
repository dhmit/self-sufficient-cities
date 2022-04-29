import React from "react";
import {Container, Row, Col, ToggleButton} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "../deanwood/DeanwoodNav";
import CensusTractMap from "./CensusTractMap";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import MapDeanwood from "../../components/maps/MapDeanwood";

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import {ButtonGroup} from "@material-ui/core";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const data = {
    datasets: [
        {
            label: 'A dataset',
            data: [{x: 0, y: 1}],
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const RADIOS = [
    { name: 'Active', value: 0 },
    { name: 'Radio', value: 1 },
    { name: 'Radio', value: 2 },
  ];

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    setRadioValue(newValue) {
        this.setState({value: newValue});
    }

    render() {
        return (
            <ButtonGroup className="mb-2">
            {this.props.radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={this.state.value === radio.value}
                onChange={(e) => this.setRadioValue(e.currentTarget.value)}
            >
                {radio.name}
            </ToggleButton>
            ))}
          </ButtonGroup>
        );
    }
}

export const FutureWorkOverview = ({resources}) => {

    return (<>
        <Container className="city" id="future-work-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Future Work</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"future"} resources={resources}/>
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
                    <Col md={4}/>
                    <Col><CensusTractMap/></Col>
                </Row>
                <RadioButtons radios={RADIOS}/>
                <Row><Col><Scatter md={4} options={options} data={data} /></Col></Row>
                <Row className="mt-3">
                    <Col md={4}/>
                    <Col md={1}/>
                    <Col md={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit
                            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                            iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                            te
                            feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                            nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit
                            lobortis nisl ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit
                            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                            iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                            te
                            feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                            nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit
                        </p>
                    </Col>
                    <Col md={1}/>
                </Row>
            </Row>
        </Container>
    </>);

};

FutureWorkOverview.propTypes = {
    resources: PropTypes.array
};

RadioButtons.propTypes = {
    radios: PropTypes.array
};


export default FutureWorkOverview;
