import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import MapDeanwood from "../../components/maps/MapDeanwood";
import Citation from "../../components/global/Citation";

export const DeanwoodOverview = ({resources}) => {
    return (
        <>
            <Container className="city" id="deanwood-overview">
                <Row>
                    <Col md={3} xl={3} className="nav-col mr-2">
                        <h1>Self-Sufficient City Deanwood, District of Columbia</h1>
                        <p>
                            Racial discrimination in access to housing, jobs, finance and health
                            care has left a lasting mark on the US urban landscape. In Boston in
                            2015, the average White family’s assets amounted to $247,500. The
                            average Black family’s assets totaled all of $8.00—the price of two
                            McDonald’s happy meals.
                            <a className={"citation-pointer"}
                               title="$8: The Complicated Story Behind One Of
                               The Most Repeated Statistics About Boston."
                               href={"#source-1"}>[1]</a>
                            We set out in this digital history lab to figure out at the neighborhood
                            level how this great gap in wealth occurred. We selected a
                            historically-Black neighborhood in Washington, DC called Deanwood. We
                            gathered a lot of data—census records, data on housing, taxes, health,
                            commerce and community services. We found a surprising story of
                            unprogress. The longer the twentieth century stretched, the worse the
                            nieghborhood faired.
                            Here is that story.
                        </p>
                        <DeanwoodNav selected={"overview"} resources={resources}/>
                    </Col>
                    <Col md={"auto"} xl={"auto"}>
                        <Row xs={1} md={2} xl={3} className="justify-content-around mt-5">
                            <Col md={4}/>
                            <Col md={4}>
                                <p>
                                    In the early 1920s, developers in Washington, DC bought up farms
                                    on land across the Anacostia River from the city center,
                                    territory that was newly incorporated into the city. The
                                    developers divided the farm land into small plots and sold them.
                                    At that time, Washington city leaders were expelling African
                                    American citizens from alley houses and housing deemed
                                    substandard in Georgetown and other central DC neighborhoods.
                                    <a className={"citation-pointer"}
                                       title="Musgrove, Chocolate City (2014)."
                                       href={"#source-2"}>[2]</a>
                                    Displaced, many Black residents moved to the new development in
                                    Deanwood. Migrants from the sharecropping south also settled
                                    across the Anacostia River. In this way, an intergrated city
                                    became segregated.

                                </p>
                            </Col>
                            <Col md={4}>
                                <blockquote>
                                    "Despite high rates of unemployment, census records from the
                                    midst of the Great Depression show a remarkable fact. <mark>Among
                                    Black residents of Deanwood, rates of homeowner occupancy,</mark> a
                                    significant indicator of financial stability, <mark>were some of the
                                    highest in the city"</mark>
                                </blockquote>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}/>
                            <Col><MapDeanwood/></Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={4}/>
                            <Col md={1}/>
                            <Col md={6}>
                                <p>
                                    As in many historically Black neighborhoods, Deanwood residents
                                    had trouble finding regular employment. Long-standing patterns
                                    of discrimination banned Black citizens from most wage jobs and
                                    increasingly from spending time in non-Black sections of the
                                    city. The highest ambition, Anita Blake remembered, was to get a
                                    job at the US Mint. The lowest level government jobs were open
                                    to Black people.
                                    <a className={"citation-pointer"}
                                       title={"Anita Blake and Irene Donnelly, " +
                                       "Anacostia Oral History Project: 16."}
                                       href={"#source-3"}>[3]</a> As Normal Dale
                                    remembered in 1975, “You had no
                                    decent jobs. It was understood that Negroes had an inferior
                                    status, and that was it.”
                                    <a className={"citation-pointer"} href={"#source-4"}
                                       title={"Norman E. Dale, Anacostia Oral History Project," +
                                       " 1975, survey instrument 4-197071, tape #13, " +
                                       "John Kinard Collection JK Book, " +
                                       "Transcriptions Oral Histories, box 37, ACM archives."}>
                                        [4]
                                    </a>
                                </p>
                                <p>
                                    Despite high rates of unemployment, census records from the
                                    midst of the Great Depression show a remarkable fact. Among
                                    Black residents of Deanwood, rates of homeowner occupancy, a
                                    significant indicator of financial stability, were some of the
                                    highest in the city (59% in 1940), far higher than the city
                                    average for “Nonwhite” residents elsewhere (19%) or White
                                    residents (33%) in the rest of the city.
                                    <a className={"citation-pointer"}
                                       title="United States Census Bureau. “Sixteenth census of
                                       the United States: 1940. Population and housing.”
                                       Hathi Trust. 1942."
                                       href={"#source-5"}>[5]</a>
                                    Black Deanwood residents managed to own their homes when most
                                    White Americans could not afford them. How did Deanwood
                                    residents manage to achieve the American dream of homeownership
                                    when facing widespread discrimination?
                                </p>
                                <p>
                                    Real estate records show that most buyers put money down—not on
                                    one lot—but purchased from two to six lots, each were two-tenths
                                    of an acre.<a className={"citation-pointer"}
                                                  title="District of Columbia,
                                                  Property Records Search"
                                                  href={"#source-6"}>[6]</a>

                                </p>
                                <p>
                                    After building a small house, residents, many of them former
                                    farmers, used the rest of their land for chicken coops, kitchen
                                    gardens, pig pens, and orchards. Black residents east of the
                                    Anacostia River had no garbage collection and no sewers until
                                    the 1950s. Residents remembered garbage wasn’t a problem. Pigs
                                    roamed the ravines and stream beds, lined with fruit trees,
                                    eating waste. Cooks fed food scraps to chickens. They composted
                                    organic waste, human and animal manure.<a
                                    className={"citation-pointer"}
                                    title={"Anita Blake and Irene Donnelly, Anacostia Oral" +
                                    " History Project, 1975, survey instrument 4-197071, tape #29."}
                                    href={"#source-7"}>[7]</a> Children learned to garden at school
                                    with their own vegetable beds.<a
                                    className={"citation-pointer"}
                                    title={"Elizabeth Barker, oral history interviews, " +
                                    "1976-1981 OH-31 Schlesinger Library, Radcliff."}
                                    href={"#source-8"}>[8]</a> Some grew more than enough food for
                                    themselves. They sold them from their back doors or street
                                    carts. Peddlers from Anacostia traded in fresh produce from hand
                                    carts across the city.<a
                                    className={"citation-pointer"}
                                    title={"Ashante Reese, Black Food Geographies: " +
                                    "Race, Self-Reliance, and Food Access in Washington, D. C. " +
                                    "(Chapel Hill,  University of North Carolina Press, 2019); " +
                                    "42-3."}
                                    href={"#source-9"}>[9]</a> As late as 1949, Deanwood had the
                                    look and feel of a self-contained agricultural village, though
                                    it existed inside city boundaries.
                                </p>
                                <p>
                                    In the postwar decades, Deanwood did not flourish. Thanks to the
                                    availability of government jobs, Black families made enough
                                    money to buy good houses, but were barred from purchasing
                                    housing financed with government-backed loans. From 1950 to
                                    1960, 57,000 nonwhites arrived in the District of Columbia and
                                    crammed into the limited inventory available to Black buyers and
                                    tenants.<a
                                    className={"citation-pointer"}
                                    title="1960 Neighbors Inc DC Housing Report,
                                    “Housing in Washington, DC,” the United States Commission on
                                    Civil Rights, (Washington, DC: 1960)."
                                    href={"#source-10"}>[10]</a> More people crowded into the same
                                    small rooms. Housing
                                    deteriorated. Rates of home-owner occupancy dropped.
                                </p>
                            </Col>
                            <Col md={1}/>
                        </Row>
                    </Col>
                    <Col md={4}/>
                    <Col md={8} className="justify-content-around mt-5">
                        <h2>Sources</h2>
                        <Citation
                            identifier={"source-1"}
                            title={"$8: The Complicated Story Behind One Of " +
                            "The Most Repeated Statistics About Boston."}
                            accessed={"Accessed April 8, 2022."}
                            link={"https://www.wbur.org/news/2021/07/08/greater-boston-black-families-net-worth"}
                        />
                        <Citation identifier={"source-2"}
                                  title={"Musgrove, Chocolate City (2014)."}/>
                        <Citation identifier={"source-3"}
                                  title={"Anita Blake and Irene Donnelly, " +
                                  "Anacostia Oral History Project: 16."}/>
                        <Citation identifier={"source-4"}
                                  title={"Norman E. Dale, Anacostia Oral History Project, 1975, " +
                                  "survey instrument 4-197071, tape #13, " +
                                  "John Kinard Collection JK Book, Transcriptions Oral Histories," +
                                  " box 37, ACM archives."}/>
                        <Citation identifier={"source-5"}
                                  title={"United States Census Bureau. “Sixteenth census of the" +
                                  " United States: 1940. Population and housing.” " +
                                  "Hathi Trust. 1942."}
                                  link={"https://babel.hathitrust.org/cgi/pt?" +
                                  "id=mdp.39015019193161&view=1up&seq=638"}/>
                        <Citation identifier={"source-6"}
                                  title={"District of Columbia, Property Records Search,"}
                                  link={"https://register.shelby.tn.us/search/index.php"}/>
                        <Citation identifier={"source-7"}
                                  title={"Anita Blake and Irene Donnelly, " +
                                  "Anacostia Oral History Project, 1975, survey instrument " +
                                  "4-197071, tape #29."}
                        />
                        <Citation identifier={"source-8"}
                                  title={"Elizabeth Barker, oral history interviews, 1976-1981" +
                                  " OH-31 Schlesinger Library, Radcliff."}/>
                        <Citation identifier={"source-9"}
                                  title={"Ashante Reese, Black Food Geographies: Race, " +
                                  "Self-Reliance, and Food Access in Washington, " +
                                  "D. C. (Chapel Hill,  " +
                                  "University of North Carolina Press, 2019); 42-3."}/>
                        <Citation identifier={"source-10"} title={"1960 Neighbors Inc DC Housing" +
                        " Report, “Housing in Washington, DC,” the United States " +
                        "Commission on Civil Rights, (Washington, DC: 1960)."}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

DeanwoodOverview.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodOverview;
