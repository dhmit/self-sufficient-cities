import React, {useState} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import * as Text from "./DeanwoodCommunityText";
import MapTest from "../../components/maps/MapTest";
import Suburban_gardens from "../../images/suburban_gardens.png";
import Deanwood_kiosk from "../../images/deanwood_kiosk.png";
import Citation from "../../components/global/Citation";

// eslint-disable-next-line max-len
const DeanwoodProfile = (statement, hasMap = true, hasTitle = true, data = [], voronoi = [], paths=[],
    title = "", source = "", alt_text = "", mapType="") => {
    let right;

    if (hasMap) {
        // eslint-disable-next-line max-len
        right = <Col><CommunityMap data={data} mapType={mapType} voronoi_data={voronoi} paths_data={paths}/></Col>;
    }
    else if (source) {
        right = <Col><Image src={source} alt={alt_text} fluid={true}/></Col>;
    }

    // let statement_array = statement.split("\n");
    return (<div className={"Profile"}>
        <Row>
            <Col md={4}/>
            <Col>
                {hasTitle && <h2>{title}</h2>}
                {console.log(typeof(statement))}
                {console.log(statement)}
                {statement.map((s, idx) => (
                    <p key={idx} className={"intro-text"}>{s}</p>
                ))}
            </Col>
            {right}

        </Row>
    </div>);
};

class CommunityMap extends React.Component {
    state = {
        decade: 1980
    };

    render() {
        return (<div>
            {/* eslint-disable-next-line max-len */}
            <button className={"communityButton"} onClick={() => this.setState({decade:1940})}>1940s</button>
            {/* eslint-disable-next-line max-len */}
            <button className={"communityButton"} onClick={() => this.setState({decade:1950})}>1950s</button>
            {/* eslint-disable-next-line max-len */}
            <button className={"communityButton"} onClick={() => this.setState({decade:1960})}>1960s</button>
            {/* eslint-disable-next-line max-len */}
            <button className={"communityButton"} onClick={() => this.setState({decade:1970})}>1970s</button>
            {/* eslint-disable-next-line max-len */}
            <button className={"communityButton"} onClick={() => this.setState({decade:1980})}>1980s</button>
            {/* eslint-disable-next-line max-len */}
            <button className={"communityButton"} onClick={() => this.setState({decade:1990})}>1990s</button>
            {/* eslint-disable-next-line max-len */}
            <MapTest decade = {this.state.decade} data = {this.props.data} mapType={this.props.mapType} voronoi = {this.props.voronoi_data} paths = {this.props.paths_data}/>
        </div>);
    }
}

export const DeanwoodCommunity = ({resources, community_data, voronoi_data, paths_data}) => {
    const [imageNum, setImage] = useState(0);
    const numQuotes = Text.quotes.length;

    const forward = () => {
        setImage((imageNum + 1) % numQuotes);
    };

    const backward = () => {
        if (imageNum === 0){
            setImage(numQuotes - 1);
        }
        else{
            setImage((imageNum - 1) % numQuotes);
        }
    };

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Deanwood, D.C.</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
                </Col>
                <Row xs={1} md={2} className="Prime mt-5">
                    <Col md={4}/>
                    <Col className = "Holder" >
                        <Row className = "Carousel justify-content-between align-items-center">
                            <Col className = "justify-content-center">
                                <button onClick = {backward}>
                                    Left
                                </button>
                            </Col>
                            <Col className = "col-9">
                                <p className={"intro-text"}>
                                    {Text.quotes[imageNum]}
                                </p>
                            </Col>

                            <Col className = "justify-content-center">
                                <button onClick = {forward}>
                                    Right
                                </button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.quoteContext, false, false)}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <h3>
                            {Text.uniqueDeanwood}
                        </h3>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.infrastructure1, false, true, [], [], [],
                    "Lack of Public Infrastructure", Suburban_gardens,
                    "The Suburban Gardens amusement park")}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.senatorTaxesQuote}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.infrastructure2, false, false, [], [], [],
                    "", Deanwood_kiosk, "A small kiosk where Deanwood's books are kept")}

                {DeanwoodProfile(Text.selfReliance1, false, true, [], [], [],
                    "Self-Reliance and Farming")}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.surplusQuote}
                        </blockquote>
                    </Col>

                </Row>
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.raiseChickensQuote}
                        </blockquote>
                    </Col>
                </Row>
                {/* eslint-disable-next-line max-len */}
                {DeanwoodProfile(Text.selfReliance2, true, false, community_data, voronoi_data, paths_data,"", "", "", "Food")}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.lifesaverQuote}
                            {<a key="6"
                                className={"citation-pointer"}
                                title="Black-owned Grocery Chain"
                                href={"#source-6"}>[6]
                            </a>}
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.selfReliance3, false, false)}
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                            {Text.noStoresQuote}
                            {<a
                                key="8"
                                className={"citation-pointer"}
                                title="Deanwood: Affordability"
                                href={"#source-8"}>[8]
                            </a>}
                        </blockquote>
                    </Col>
                </Row>
                {/* eslint-disable-next-line max-len */}
                {DeanwoodProfile([], true, true, community_data, [], [],"Churches as" +
                    " Centers of" +
                    " Community", "","","Religion")}
                {DeanwoodProfile(Text.conclusion, false, true, [], [], [],"Conclusion")}
                <Col md={4}/>
                <Col md={8} className="justify-content-around mt-5">
                    <h2>Sources</h2>
                    <Citation
                        identifier={"source-1"}
                        title={"Vietnam War Timeline"}
                        accessed={"Accessed April 20, 2022."}
                        link={"https://www.britannica.com/list/vietnam-war-timeline"}
                    />
                    <Citation identifier={"source-2"}
                              title={"D.C. Home Rule"}
                              accessed={"Accessed April 20, 2022."}
                              link={"https://dccouncil.us/dc-home-rule/"}/>
                    <Citation identifier={"source-3"}
                              title={"18th annual report of the Department of Playgrounds," +
                              " District of Columbia, 1929"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://digdc.dclibrary.org/islandora/object/dcplislandora%3A30754?solr_nav%5Bid%5D=085689ab129a36502735&solr_nav%5Bpage%5D=0&solr_nav%5Boffset%5D=3#page/8/mode/2up"}
                    />
                    <Citation identifier={"source-4"}
                              title={"Remembering Suburban Gardens, D.C.’s only amusement park"}
                              accessed={"Accessed April 26, 2022."}
                              link={"https://www.washingtonpost.com/local/remembering-suburban-gardens-dcs-only-amusement-park/2013/10/26/62bb1c9a-3d72-11e3-a94f-b58017bfee6c_story.html"}
                    />
                    <Citation identifier={"source-5"}
                              title={"Anybody Want a Kiosk?"}
                              accessed={"Accessed April 26, 2022."}
                              link={"https://washingtoncitypaper.com/article/384807/anybody-want-a-kiosk/"}
                    />
                    <Citation identifier={"source-6"}
                              title={"Black-owned Grocery Chain Brings Service Back to NE" +
                              " Neighborhood: Black-owned Grocery Chain Brings Service Back to" +
                              " NE Neighborhood"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://www.proquest.com/docview/147336449/32F1A9D3902840A7PQ/2"}
                    />
                    <Citation identifier={"source-7"}
                              title={"The history of Deanwood’s local foodscape"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://www.dcpolicycenter.org/publications/black-food-geographies/"}
                    />
                    <Citation identifier={"source-8"}
                              title={"Deanwood: Affordability, if not amenities, in a part of" +
                              " D.C. rich in history: Community center is a refuge for young and" +
                              " old as development reshapes a hot neighborhood."}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://www.proquest.com/docview/2319094697/fulltext/B2DCBD808374483DPQ/1?accountid=12492"}
                    />
                    <Citation identifier={"source-9"}
                              title={"Finding God on Every Corner: Deanwood"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://awolau.org/1151/place-holder-do-not-delete/finding-god-on-every-corner-deanwood/"}
                    />
                </Col>
            </Row>


        </Container>

    </>);

};

DeanwoodCommunity.propTypes = {
    resources: PropTypes.array,
    community_data: PropTypes.array,
    voronoi_data: PropTypes.array,
    paths_data: PropTypes.array
};

CommunityMap.propTypes = {
    data: PropTypes.array,
    mapType: PropTypes.string,
    voronoi_data: PropTypes.array,
    paths_data: PropTypes.array
};



export default DeanwoodCommunity;
