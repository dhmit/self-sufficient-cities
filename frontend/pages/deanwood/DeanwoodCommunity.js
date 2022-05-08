import React, {useState} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import * as Text from "./DeanwoodCommunityText";
import MapCommunity from "../../components/maps/MapCommunity";
import Suburban_gardens from "../../images/suburban_gardens.png";
import Deanwood_kiosk from "../../images/deanwood_kiosk.png";
import Deanwood_burville from "../../images/Deanwood_Burville.jpeg";
import Deanwood_first_baptist from "../../images/Deanwood_first_baptist_church.jpeg";
import Deanwood_meeting from "../../images/Deanwood_Meeting.jpeg";
import Citation from "../../components/global/Citation";

import ArrowRight from "../../images/icons/arrow-right.svg";
import ArrowLeft from "../../images/icons/arrow-left.svg";

// eslint-disable-next-line max-len
const DeanwoodProfile = (statement, hasMap = true, hasTitle = true, data = [], voronoi = [], paths = [],
                         title = "", source = "", alt_text = "", image_caption = "", mapType = "") => {

    let left;
    let map;

    if (hasMap) {
        // eslint-disable-next-line max-len
        map =
            <MapCommunityWrapper data={data} mapType={mapType} voronoi_data={voronoi}
                                 paths_data={paths}/>;
    } else if (source) {
        left = <>
            <Image src={source} alt={alt_text} fluid={true}/>
            <small>{image_caption}</small>
        </>;

    }

    return (<>
        {left ? <Col lg={4}/> : <Col lg={5}/>}
        {left && <Col lg={4} className="p-0">{left}</Col>}
        <Col lg={left ? 4 : 6} className="p-0">
            {hasTitle && <h2 className="mt-3">{title}</h2>}
            {/* Iterate through statement. If item is string, the next item might be a
                 citation. Check next for type not string. Add to paragraph if not string.
                  Continue. */}
            {statement.map((s, idx) => (
                typeof s === "string" ? <p key={idx}>{s}{
                    typeof statement[idx + 1] === "string" ? "" : statement[idx + 1]
                } </p> : ""
            ))}
            {map}
        </Col>
    </>);
};

class MapCommunityWrapper extends React.Component {
    state = {
        decade: 1940
    };

    render() {
        return (<ul className="list-inline">
            {[4, 5, 6, 7, 8, 9].map((num) => {
                return <li key={`decade-${num}`} className="list-inline-item">
                    <button className={`community-button
                    ${this.state.decade === parseInt(`19${num}0`) ? "selected" : ""}`}
                            onClick={() => this.setState({decade: parseInt(`19${num}0`)})}>
                        19{num}0s
                    </button>
                </li>;
            })
            }
            <MapCommunity decade={this.state.decade} data={this.props.data}
                          mapType={this.props.mapType} voronoi={this.props.voronoi_data}
                          paths={this.props.paths_data}/>
        </ul>);
    }
}

export const DeanwoodCommunity = ({resources, community_data, voronoi_data, paths_data}) => {
    const [quoteNum, setQuoteNum] = useState(0);
    const numQuotes = Text.quotes.length;

    const forward = () => {
        setQuoteNum((quoteNum + 1) % numQuotes);
    };

    const backward = () => {
        if (quoteNum === 0) {
            setQuoteNum(numQuotes - 1);
        } else {
            setQuoteNum((quoteNum - 1) % numQuotes);
        }
    };

    return (<>
        <Container className="city" id="deanwood-community">
            <Row>
                <Col lg={3} className="nav-col p-0 mr-2">
                    <h1>Deanwood Community</h1>
                    <p>
                        Informed by analysis of oral histories, historical newspapers, and city
                        directories, this page documents the tight-knit community that emerged in
                        the face of systemic racism and how it changed over time. Deanwood's unique
                        community history was attributed to the lack of public infrastructure
                        implemented, the proactive practice of self-cultivation and the unifying
                        influence of its churches.
                    </p>
                    <DeanwoodNav selected={"community"} resources={resources}/>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="community-carousel carousel">
                    {quoteNum > 0 && <button onClick={backward}>
                        <ArrowLeft fill={"#888"} height={"20px"}/>
                    </button>}
                    {Text.quotes[quoteNum]}

                    {quoteNum < Text.quotes.length - 1 &&
                    <button onClick={forward}>
                        <ArrowRight fill={"#888"} height={"20px"}/>
                    </button>}

                </Col>
                {DeanwoodProfile(Text.quoteContext, false, false)}
                <Col lg={5}/>
                <Col lg={6} className="p-0">
                    <h4 className="mb-4">
                        {Text.uniqueDeanwood}
                    </h4>
                </Col>
                <Col lg={4}/>
                <Col lg={8}>
                    <Image
                        src={Suburban_gardens}
                        alt={"The Suburban Gardens amusement park"}
                        fluid={true}
                    />
                    <small>Amusement parks and other recreational venues were often only free
                        for white people. Suburban Gardens was the first and only amusement
                        park built in DC, and it gave black residents a place to relax and
                        play.
                    </small>
                </Col>
                {DeanwoodProfile(Text.infrastructure1, false, true, [], [], [],
                    "Lack of Public Infrastructure")}
                <Col lg={5}/>
                <Col lg={6} className="p-0">
                    {Text.senatorTaxesQuote}
                </Col>
                {DeanwoodProfile(Text.infrastructure2, false, false, [], [], [],
                    "", Deanwood_kiosk, "A small kiosk where Deanwood's books are kept")}

                {DeanwoodProfile(Text.selfReliance1, false, true, [], [], [],
                    "Self-Reliance and Farming")}
                <Col lg={4}/>
                <Col lg={4}>
                    {Text.surplusQuote}
                </Col>
                <Col lg={4}>
                    {Text.raiseChickensQuote}
                </Col>
                {/* eslint-disable-next-line max-len */}
                {DeanwoodProfile(Text.selfReliance2, true, false, community_data, voronoi_data, paths_data, "", "", "", "", "Food")}
                <Col lg={4}/>
                <Col lg={8} className="mt-4 mb-4">
                        {Text.lifesaverQuote}
                </Col>
                {DeanwoodProfile(Text.selfReliance3, false, false)}
                <Col lg={4}/>
                <Col lg={8}>
                    <blockquote>
                        {Text.noStoresQuote}

                    </blockquote>
                </Col>
                {/* eslint-disable-next-line max-len */}
                {DeanwoodProfile(Text.church1, true, true, community_data, [], [], "Churches as" +
                    " Centers of" +
                    " Community", "", "", "", "Religion")}
                {DeanwoodProfile(Text.church2, false, false,
                    [], [], "", "", Deanwood_first_baptist,
                    "Deanwood residents gathering to build the First Baptist Church",
                    "Deanwood residents gathering to begin construction of the " +
                    "First Baptist Church")}

                <Row>
                    <Col md={4}/>
                    = <Col>
                    <Image
                        src={Deanwood_meeting}
                        alt={"A monthly dinner meeting in church"}
                        fluid={true}
                    />
                    <p>
                        <small>
                            Home-grown food was often shared among members of the church.
                            Here, a monthly meeting with food is being held in a church member’s
                            home
                        </small>
                        <a key="9"
                           className={"citation-pointer"}
                           title="Images of America: Washington D.C.'s Deanwood"
                           href={"#source-9"}>[9]
                        </a>
                    </p>

                </Col>
                </Row>
                {DeanwoodProfile(Text.church3, false, false,
                    [], [], "", "", Deanwood_burville,
                    "The Burville Elementary School in Deanwood",
                    "Burville Elementary School")}
                {DeanwoodProfile(Text.church4, false, false, [], [], "", "", "")}
                <Row>
                    <Col md={4}/>
                    <Col>
                        <blockquote>
                            {Text.noTaxQuote}
                            {<a
                                key="10"
                                className={"citation-pointer"}
                                title="Deanwood complaints"
                                href={"#source-12"}>[12]
                            </a>}
                        </blockquote>
                        <blockquote>
                            -Carolyn Ricanek
                        </blockquote>
                    </Col>
                </Row>
                {DeanwoodProfile(Text.church5, false, false, [], [], "", "", "")}
                {DeanwoodProfile(Text.conclusion, false, true, [], [], [], "Conclusion")}
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
                              title={"Images of America: Washington D.C.'s Deanwood"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://www.abebooks.com/9780738553504/Washington-D.C.s-Deanwood-Images-America-0738553506/plp"}
                    />
                    <Citation identifier={"source-10"}
                              title={"DEANWOOD CLOSE-KNIT D.C. COMMUNITY"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://www.washingtonpost.com/archive/realestate/1988/08/06/deanwood-close-knit-dc-community/123ee1fd-0e29-4464-ae83-4c248282c034/"}
                    />
                    <Citation identifier={"source-11"}
                              title={"Finding God on Every Corner: Deanwood"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://awolau.org/1151/place-holder-do-not-delete/finding-god-on-every-corner-deanwood/"}
                    />

                    <Citation identifier={"source-12"}
                              title={"Is NE Area Getting Too Much Religion?"}
                              accessed={"Accessed April 22, 2022."}
                              link={"https://www.washingtonpost.com/archive/local/2005/02/03/is-ne-area-getting-too-much-religion/ee65576b-bbb0-4d98-8efc-66fe8aca464e/"}
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

MapCommunityWrapper.propTypes = {
    data: PropTypes.array,
    mapType: PropTypes.string,
    voronoi_data: PropTypes.array,
    paths_data: PropTypes.array
};


export default DeanwoodCommunity;
