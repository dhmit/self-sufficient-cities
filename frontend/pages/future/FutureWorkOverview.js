import React from "react";
import {Container, Row, Col, ToggleButton} from "react-bootstrap";
import * as PropTypes from "prop-types";
import axios from "axios";
import DeanwoodNav from "../deanwood/DeanwoodNav";
import CensusTractMap from "../../components/maps/CensusTractMap";


import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";
import {Scatter} from "react-chartjs-2";
import {ButtonGroup} from "@material-ui/core";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

export const data = {
    datasets: [
        {
            label: "A dataset",
            data: [{x: 0, y: 1}],
            backgroundColor: "rgba(255, 99, 132, 1)"
        }
    ]
};

const RADIOS = [
    {name: "x", value: 0},
    {name: "y", value: 1}
];

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        // this.setRadioValue = this.setRadioValue.bind(this);
    }

    setRadioValue(newValue) {
        console.log(newValue);
        this.setState({value: newValue});
    }

    radioIsChecked(e, radio) {
        e.preventDefault();
        return this.state.value === radio.value;
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
                        checked={(e) => this.radioIsChecked(e, radio)}
                        onChange={(e) => this.setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
}

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
                        <Col md={8}>
                            <h3>K-Means Clustering</h3>
                            <p>
                                K-Means clustering is a method where each entity has all of its
                                data summarized as a point in N-dimensional space, where N is the
                                number of variables associated with the entity. From there,
                                “clusters” are randomly generated, with the goal of making it such
                                that each cluster is as dense as possible (i.e. that all of the
                                data points in a cluster are closer to each other than other
                                clusters). This type of analysis is good for finding large-scale
                                trends and groupings, along with identifying key axes that can be
                                used to distinguish between certain types of data points. In this
                                case, we can find the clusters that are home to sustainable
                                neighborhoods, and look at what neighborhoods are grouped the same
                                to try to find trends.
                            </p>
                            <p>
                                The graphic below allows you to explore how the different census
                                tracts were classified. The axes can be changed to any of the 248
                                variables in the 1950s census, so that you can see how the
                                groupings are compared across different dimensions.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} />
                        <Col>
                            <RadioButtons radios={RADIOS}/>
                            <RadioButtons radios={RADIOS}/>
                            <Scatter md={4} options={options} data={data} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col md={8}>
                            <h3>Nearest Neighbor Analysis</h3>
                            <p>
                                Nearest Neighbor follows a very similar pattern to K-Means
                                clustering, as it still maps the census tracts in N-dimensional
                                space, but instead of categorizing all of the census tracts into
                                certain groups, it instead looks at one particular census tract and
                                measures how “far” other districts are from it. This is very useful
                                for identifying specific census tracts that are worth further
                                investigation, and results can be chained together (for instance,
                                if we use Tract A as a starting point, and find that Tract B is
                                close to A and also practices sustainability, then we can start
                                the search again from Tract B as well).
                            </p>
                            <p>
                                The maps below show what census tracts are closest to
                                Deanwood, after the data has been normalized to ensure all
                                variables are on the same scale. You can either select from areas
                                of note, or scroll around on your own!
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col md={8}>
                            <CensusTractMap
                                census_tracts={this.state.census_tracts}
                                deanwood_similarities={this.state.deanwood_similarities}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={4}/>
                        <Col md={8}>
                            <h3>Adversarial Machine Learning Model</h3>
                            <p>
                                A custom machine learning model was created to identify other
                                self-sustaining neighborhoods from the 1917-1919 Cost of Living
                                in the United States census. Since this dataset is not divided
                                per-tract, but per-city, the results will tell us with less
                                accuracy of where self-sustaining neighborhoods are located, but
                                will give us an adequate idea of which cities we are likely to
                                find them.
                            </p>
                            <p>
                                The machine learning model was relatively shallow, using 10
                                linear layers and 12 convolutional layers. Categorical data from
                                this dataset was stored using one-hot encoding.in which data
                                such as gender would be converted from “male” to [0, 1] and
                                “female” to [1, 0].
                            </p>
                            <p>
                                The numerical data and categorical data were combined and assessed
                                in two different stages by the model. Categorical data was
                                converted to a matrix of (63, 124) and then processed using
                                convolutions in an attempt to capture how the relationships between
                                values of different categories impacted whether the city might
                                possibly contain a self-sustaining neighborhood.
                            </p>
                            <p>
                                The matrix was then converted into an array of numbers using the
                                model’s convolutional layers, These values were added to the
                                2136 numerical values and processed together to a single value
                                ranging from 0 - 1 using the model’s linear layers. The output
                                value represents the likelihood of a city containing a
                                self-sustaining neighborhood. The method is unstable so frequency
                                analysis was performed - (500 trials). The cities that ranked
                                the highest on each trial were assigned a score based on their
                                rank and the score was averaged for each rank to determine
                            </p>
                            <p>
                                The following graphic represents the ranking of each cities.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col md={8}>
                            <h3>Results</h3>
                            <p>Some cool results belong here!</p>
                        </Col>
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
