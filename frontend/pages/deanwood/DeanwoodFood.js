import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
// import MapDeanwood from "../../components/maps/MapDeanwood";
import FoodMap from "../../components/maps/FoodMap";

export const DeanwoodFood = ({resources}) => {
    return (
        <>
        <Container className="city" id="deanwood-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Food in Deanwood, D.C.</h1>
                    <p>
                        In the modern day, Deanwood might be called a “food desert,” a
                        low-income census tract where a substantial number of residents have
                        low access to a supermarket or large grocery store, as defined by the
                        Economic Research Service (ERS) in 2011. As of 2017, there are only two
                        full-service grocery stores in Ward 7, the ward of DC that contains
                        Deanwood, for a population of 80,000 people. But such a bleak statistic
                        is not without history. Ashante Reese, in her book Black Food
                        Geographies, points out that literature on the topic of food scarcity
                        (involving racial biases or not) tends to frame “lack” as a terminal
                        issue without struggle. These texts often paint a desolate picture of
                        access and inaction for communities like Deanwood but fail to document
                        how residents adapt and create their own opportunities in response.
                        Deanwood has a rich history, particularly in the area of food, and with
                        this project, we hope to illuminate how Deanwood residents sustained
                        themselves even with a lack of outside support.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
                </Col>
                <Row xs={1} md={2} className="justify-content-around mt-5">
                    <Col md={4}/>
                    <Col md={4}>
                        <p>
                            The project tells the rise and fall of urban communities that grew their
                            own food in the 20th century United States. Taking the Deanwood
                            neighborhood in Washington, D.C. as their starting place, students
                            consulted newspaper articles and census data to design an interactive
                            site. This specific page shows through an interactive food map
                            how access to food for residents in Deanwood has changed over time from
                            the early 1900s to the present day.
                        </p>
                    </Col>
                    <Col md={4}>
                        <blockquote>
                            "Because I am a family of five, I have to go frequent to the grocery
                            store quite often. And a lot of times I have to go over to the Maryland
                            side, because of the quality of food at the Safeway on Minnesota Avenue.
                            Or there is not a grocery store in a good maybe five-mile, maybe more,
                            vicinity." -- Research Participant from Ashanté Reese's There Ain't
                            Nothing in Deanwood

                        </blockquote>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}/>
                    <Col><FoodMap/></Col>
                </Row>
                <Row className="mt-5">
                    <Row>
                    <Col md={4}/>
                    <Col>
                        <h1>General Summary</h1>
                        <p>
                            Throughout the 1900s, Deanwood received less government investment and
                            benefits compared to similar-sized White neighborhoods in DC, such as
                            Kenilworth. However, the ways in which the residents of Deanwood adapted
                            helped the neighborhood develop a healthy, self-sustaining economy.
                        </p>
                        <p>
                           In particular, Deanwood practiced self-sufficiency in goods and services
                            related to food. Most of the food-related businesses in Deanwood were
                            community-based, and the food  largely came from small, family-owned
                            businesses that sourced and sold locally. This type of business
                            environment circulated money, jobs, and resources within the community
                            and helped strengthen community relations.
                        </p>

                        <p>
                           Oral histories from 1975 of Deanwood residents shed more light on how
                            this self-sufficiency came about. Many residents who were interviewed
                            for the Anacostia Oral History Project discussed how their families grew
                            most of their own food and sold the surplus in neighborhood markets and
                            mom and pop stores. One resident, Anita Blake, said, “[Our family] grew
                            all our own vegetables.” Since her uncle owned a drug store, their
                            surplus was sold there. Another resident Ethel Greene, mentioned how her
                            mother was interested in merchandising, so they “had stands in the Old
                            Market where we sold honey and flowers, fruits and vegetables.”
                        </p>
                        <p>
                            In this period, Deanwood was ripe with local entrepreneurs whose
                            businesses were integral parts of the community, just as they were
                            individually a part of the local community. For example, Certified Market
                            was a family-owned business in Deanwood in the 1940s that went on to
                            become a successful chain store called Murry’s Steak.
                        </p>
                        <p>
                            But Deanwood, despite the community’s relative self-sufficiency, was not
                            exempt from greater societal trends–namely, the phenomenon of the
                            supermarket. Starting from the 1930s and continuing into the modern day,
                            chain stores like Kroger and Safeway have become a dominant force in
                            American food for most urban and suburban citizens. Shoppers liked chain
                            stores for their convenience, variety, and perceived modernity, which
                            combined plainly outcompeted local purveyors such as hucksters (street
                            vendors). The cost of this switch, however, was the social relationships
                            formed through such communal activities.
                        </p>
                        <p>
                            The transition to chain grocery stores was not smooth for Deanwood, a
                            community largely knit together by “businesses ran by and for the
                            community.” In general, these chain stores were not friendly to black
                            employment. The New Negro Alliance, a D.C.-based employment justice
                            organization for middle-class blacks in the 1900s, boycotted and
                            picketed a number of Safeway Inc.’s stores for discriminatory hiring
                            practices. Their efforts culminated in the landmark case New Negro
                            Alliance v. Sanitary Grocery Co., 303 U.S. 552, which safeguards the
                            right to peacefully protest hiring discrimination.
                        </p>
                        <p>
                            For Deanwood, in one instance, the entrance of a Safeway “cut through”
                            local food vendors business, according to Allison, a 68-year old
                            Deanwood resident that Reese interviewed for Black Food Geographies.
                            But residents complained about discrimination in the store which
                            neglected to hire black workers despite serving a nearly all-black
                            clientele. After mass complaint and food quality concerns, the location
                            closed in 1980.
                        </p>
                        <p>
                            In an attempt to rejuvenate the community-level food system lost in
                            Deanwood, a Baltimore-based chain of black grocery stores called
                            Community Foods opened a store called Super Pride in the Safeway’s old
                            lot. Built in 1981, Super Pride prided itself on its “soul food” and
                            close community ties while still retaining a modern supermarket feel.
                            According to Edward Brown, general manager in 1983, it was “not a
                            mom-and-pop store. [They had] to fight a lot of preconceived notions
                            about black food retailers.” However, the location closed within
                            the decade.
                        </p>

                        <p>
                            Barry Scher, a spokesman for Giant Food Inc., a large chain grocery
                            store company at the time, called Super Pride stores “small and
                            antiquated.” The transition towards cultural and economic dependency on
                            supermarkets had well finished by this time, and the resources of
                            large, nationwide corporations were outstripping local grocers.
                        </p>

                        <p>
                            And yet, though this social expectation was catching on, the physical
                            stores did not follow. Following the turmoil around the former Safeway
                            and then Super Pride’s closure, chain grocery stores tended to avoid
                            or leave Deanwood. From 2010 to 2017, the number of full-service grocery
                            stores in Ward 7 (which contains Deanwood) fell from four to two for a
                            population of 80.000 people.
                        </p>

                        <p>
                            So we return to Deanwood’s classification as a “food desert.” But as
                            Ashante Reese points out, such a simplified term “overemphasizes lack
                            and very rarely examines agency or resilience among community members.”
                            It brings to mind images of barren emptiness and removes the nuance of
                            neighborhood response as well as non-supermarket adjacent food sources.
                        </p>
                        <p>
                            However, as in the past the residents of Deanwood adapt to their
                            conditions. The grocery store closest to Deanwood, a new Safeway, is
                            described by residents as “dirty,” “dangerous,” “poorly stocked,” and
                            of “last resort.” Those who have easy access to transportation prefer
                            to visit further stores, expanding their own food geographies, and those
                            who don’t carpool or source food in bulk. Churches and other community
                            organizations organize food programs. Residents actively weigh cost,
                            distance, desire, and safety to achieve patterns of life that are
                            healthy and well-informed, even if it requires more deliberation than
                            it might living with better access.
                        </p>
                    </Col>
                </Row>
                </Row>

            </Row>
        </Container>
        </>
     );
 };

DeanwoodFood.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodFood;
