import React from "react";
import {Container, Row, Col, ToggleButton} from "react-bootstrap";
import * as PropTypes from "prop-types";
import axios from "axios";
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

const DEANWOOD_COORDS = [38.897665, -76.925919];

class FutureWorkOverview extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            resources: props.resources,
            census_tracts: [],
            deanwood_similarities: {}
        };
    }

    componentDidMount() {

        // load the census tract shapes
        axios.get("/api/get_1940_census_geodata")
            .then((res) => {
                this.setState({census_tracts: res.data.features});
            });

        // load the similarity data for the different tracts
        axios.get("/api/get_1940_deanwood_similarities")
            .then((res) => {
                this.setState({deanwood_similarities: res.data});
            });
    }

    render() {
        return (<>
            <Container className="city" id="future-research-overview">
                <Row >
                    <Col md={3} className="nav-col mr-2">
                        <h1>Future Research</h1>
                        <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                        </p>
                        <DeanwoodNav selected={"future"} resources={this.state.resources}/>
                    </Col>
                    <Row xs={1} md={2} className="justify-content-around mt-5">
                        <Col md={4}/>
                        <Col md={8}>
                            <h3>Introduction</h3>
                            <p>
                                All of the results that we’ve found profoundly show the rise and
                                fall of sustainability in Deanwood - from the push of the great
                                depression and stories of community, to today when family homes
                                held for generations are being sold off and Deanwood suffers from
                                higher rates of Covid-19 cases and deaths. However, Deanwood is
                                just one of a multitude of neighborhoods that practiced
                                self-reliance in the early 20th century. By using machine learning
                                techniques and data analysis, we identified strong candidates
                                (and confirmed suspicions) for self-sustaining communities by
                                comparing them to trends that we found in Deanwood and Eight Mile
                                Wyoming, a neighborhood in Detroit also known for its self-reliance.
                            </p>
                            <p>
                                Our approach leverages two data sets: the 1940s Federal Decennial
                                Census, and the 1917-1919 Cost of Living in the United States.
                                For the 1940s census, we find that we are able to identify several
                                strong potential candidates using even primitive machine learning
                                techniques such as Nearest Neighbor and K-Means Clustering, while
                                identifying communities with 1917-1919 Cost of Living in the
                                United States is best suited for a more advanced adversarial
                                learning approach.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col>
                            <h3>Datasets Used</h3>
                            <p>
                                The bulk of our research utilizes the results of the 1940s census
                                and the cost of living dataset, each have their own quirks and
                                nuances when sifting through the data and results.
                            </p>
                            <p>
                                The 1940s census data covers 59 major U.S. cities
                                (and the District of Columbia) at the census tract level. There are
                                7,465 census tracts in total, each of them with 194 features. They
                                features span a wide range of topics, from statistics about the
                                working population to the value of homes.
                            </p>
                            <p>
                                The 1917-1919 Cost of Living survey includes per-household
                                information from 163 cities about the yearly cost of living and the
                                occupations of house residents. Overall, there are 2,199 features
                                per household, with 2,136 features corresponding to various costs
                                and 63 categories about the occupations of the households.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col>
                            <CensusTractMap
                                census_tracts={this.state.census_tracts}
                                deanwood_similarities={this.state.deanwood_similarities}
                                position={DEANWOOD_COORDS}
                            />
                        </Col>
                    </Row>
                    <RadioButtons radios={RADIOS}/>
                    <Row><Col><Scatter md={4} options={options} data={data} /></Col></Row>
                    <Row className="mt-3">
                        <Col md={4}/>
                        <Col md={1}/>
                        <Col md={6}>
                            <p>
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
    }
}

FutureWorkOverview.propTypes = {
    resources: PropTypes.array
};

RadioButtons.propTypes = {
    radios: PropTypes.array
};


export default FutureWorkOverview;
