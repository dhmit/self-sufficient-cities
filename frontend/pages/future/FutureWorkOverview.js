import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import axios from "axios";

import DeanwoodNav from "../deanwood/DeanwoodNav";
import CensusTractMap from "../../components/maps/CensusTractMap";

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
                        <DeanwoodNav selected={"future"} resources={this.state.resources}/>
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
                        <Col>
                            <CensusTractMap
                                census_tracts={this.state.census_tracts}
                                deanwood_similarities={this.state.deanwood_similarities}
                                position={DEANWOOD_COORDS}
                            />
                        </Col>
                    </Row>
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

export default FutureWorkOverview;
