import React from "react";
import {Container, Row, Col} from "react-bootstrap";
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

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const SCATTER_OPTIONS = {
    scales: {
        x: {
            beginAtZero: true
        },
        y: {
            beginAtZero: true
        }
    }
};

class KMeansPlot extends React.Component {
    constructor(props) {
        super(props);

        // Make initial data
        this.radios = Object.keys(this.props.data[0]);
        const [initYAxis, initXAxis] = [...this.radios.slice(0, 2)];
        const initData = this.getData(initXAxis, initYAxis);
        this.state = {
            xAxis: initXAxis,
            yAxis: initYAxis,
            data: initData
        };
    }

    getData(xDim, yDim) {
        let newData = [];
        for (const element of this.props.data) {
            newData.push({
                x: element[xDim],
                y: element[yDim]
            });
        }
        return newData;
    }

    onXChange(event) {
        const newXAxis = event.target.value;
        const newData = this.getData(newXAxis, this.state.yAxis);
        this.setState({xAxis: newXAxis, data: newData});
    }

    onYChange(event) {
        const newYAxis = event.target.value;
        const newData = this.getData(this.state.xAxis, newYAxis);
        this.setState({yAxis: newYAxis, data: newData});
    }

    render() {
        const plotLabel = `${this.state.yAxis} vs. ${this.state.xAxis}`;
        return (
            <div>
                <div className="radio-row">
                    <div
                        className="radio-col"
                        onChange={(e) => this.onYChange(e)}>
                        <h5>Y-Axis</h5>
                        {this.radios.map((radio, idx) => (
                            <div key={idx}>
                                <input
                                    type="radio"
                                    value={radio}
                                    name="radio-column-y"
                                /> {radio}
                            </div>
                        ))}
                    </div>
                    <div
                        className="radio-col"
                        onChange={(e) => this.onXChange(e)}>
                        <h5>X-Axis</h5>
                        {this.radios.map((radio, idx) => (
                            <div key={idx}>
                                <input
                                    type="radio"
                                    value={radio}
                                    name="radio-column-x"
                                /> {radio}
                            </div>
                        ))}
                    </div>
                </div>
                <Scatter
                    lg={4}
                    options={SCATTER_OPTIONS}
                    data={{
                        datasets: [
                            {
                                label: plotLabel,
                                data: this.state.data,
                                backgroundColor: "rgba(255, 99, 132, 1)"
                            }
                        ]
                    }}
                />
            </div>
        );
    }
}

class FutureWorkOverview extends React.Component {
    tracts;

    constructor(props) {
        super(props);
        this.state = {
            resources: props.resources,
            census_tracts: [],
            deanwood_similarities: {},
            kmeans_tract_data: [],
            show_census_map: false,
            show_kmeans: false
        };
        this.onShowKMeans = this.onShowKMeans.bind(this);
        this.onShowCensusMap = this.onShowCensusMap.bind(this);
    }

    onShowCensusMap(e) {
        e.preventDefault();

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

        this.setState({show_census_map: true});
    }

    onShowKMeans(e) {
        e.preventDefault();

        // load the kmeans data for the different tracts
        axios.get("/api/get_1940_kmeans_tract_data")
            .then((res) => {
                this.setState({kmeans_tract_data: res.data.tracts});
            });

        this.setState({show_kmeans: true});
    }

    render() {
        const kmeans_data = this.state.kmeans_tract_data;
        return (<>
            <Container className="city" id="future-research-overview">
                <Row>
                    <Col lg={3} className="nav-col p-0 mr-2">
                        <h1>Searching for Patterns</h1>

                        <DeanwoodNav selected={"future"} resources={this.state.resources}/>
                    </Col>
                    <Col lg={5}/>
                    <Col lg={6} className="p-0 mt-md-3 mt-lg-0">
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
                    <Col lg={5}/>
                    <Col lg={6} className="p-0 mt-3">
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
                    <Col lg={4}/>
                    <Col lg={8} className="p-0 mt-3">
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
                    <Col lg={4}/>
                    <Col lg={8} className="p-0 mt-3">
                        {(this.state.show_kmeans && kmeans_data.length > 0)
                            ? <KMeansPlot data={kmeans_data}/>
                            : (
                                <button
                                    onClick={this.onShowKMeans}
                                    className="future-button">
                                    Show Kmeans Visualization
                                </button>
                            )
                        }
                    </Col>
                    <Col lg={4}/>
                    <Col lg={8} className="p-0 mt-4">
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
                    <Col lg={4}/>
                    <Col lg={8} className="p-0">
                        {this.state.show_census_map
                            ? (
                                <CensusTractMap
                                    census_tracts={this.state.census_tracts}
                                    deanwood_similarities={this.state.deanwood_similarities}
                                />
                            )
                            : (
                                <button
                                    onClick={this.onShowCensusMap}
                                    className="future-button">
                                    Show Tract Similarities
                                </button>
                            )
                        }
                    </Col>
                    <Col lg={4}/>
                    <Col lg={8} className="p-0 mt-3">
                        <h3>Adversarial Machine Learning Model</h3>
                        <p>
                            A custom machine learning model was created to identify other
                            self-sustaining neighborhoods from the 1917-1919 Cost of Living
                            in the United States census. Since this dataset is not divided
                            per tract, but per city, the results will tell us with less
                            accuracy of where self-sustaining neighborhoods are located, but
                            will give us an adequate idea of in which cities we are likely to
                            find them.
                        </p>
                        <p>
                            The machine learning model was relatively shallow, using 10
                            linear layers and 12 convolutional layers. Categorical data from
                            this dataset was stored using one-hot encoding, in which data
                            such as gender would be converted from "male" to [0, 1] and
                            "female" to [1, 0].
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
                            model's convolutional layers. These values were added to the
                            2136 numerical values and processed together to a single value
                            ranging from 0 - 1 using the model's linear layers. The output
                            value represents the likelihood of a city containing a
                            self-sustaining neighborhood. To increase confidence in the results,
                            500 trials of training were performed. The cities that ranked
                            the highest on each trial were assigned a score of
                            (# of tracts - ranking) squared, and the scores for all rounds
                            were averaged to obtain the final ranking.
                        </p>
                    </Col>
                    <Col lg={5}/>
                    <Col lg={6} className="p-0 mt-3">
                        <h3>Results</h3>
                        <p>
                            The above analyses indicate that there are quite a few possible
                            census tracts that are worth looking into:
                        </p>
                        <h5>Angelina County, TX</h5>
                        <p>
                            Parts of Angelina County, Texas show a large quantity of
                            agricultural workers, coupled with a majority Black population.
                            Furthermore, the Texas Historical Society has recorded a history of
                            farming taking place at the household level.
                        </p>
                        <h5>Harris County, TX</h5>
                        <p>
                            Census Tract 8 and 9 of Harris County (shown in the “Houston”
                            dropdown of the Nearest Neighbor Analysis) are also prime
                            candidates. They show similarities to Deanwood much similar to
                            Angelina County. However, in addition, there are markers of
                            densely packed homes (which is one of the key indicators that
                            we have found).
                        </p>
                        <h5>Cook County, Illinois</h5>
                        <p>
                            Census Tract 625 in Cook County is another prime candidate.
                            With a large portion of the population living in a household with
                            5-9 members, over half of the working population having an
                            occupation in “housework,” and a majority of residents not having
                            completed high school, this tract is the one flagged as “closest”
                            to Deanwood by our methods.
                        </p>
                        <p>
                            In the future, we hope to examine these areas much more, along
                            with fine-tuning our methods for identifying self-sustaining
                            neighborhoods, in order to gain new insights into how these
                            communities grew and developed.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>);
    }
}

FutureWorkOverview.propTypes = {
    resources: PropTypes.array
};

KMeansPlot.propTypes = {
    data: PropTypes.array
};


export default FutureWorkOverview;
