import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import FoodMap from "../../components/maps/FoodMap";
import murry from "../../images/Murry.png";
import safeway from "../../images/Safeway.png";
import unfair from "../../images/PeoplesUnfair.png";
import superpride from "../../images/SuperPride.png";
import groceries from "../../images/DeanwoodGroceryMap.png";
import income_map_2005 from "../../images/MedianIncome2005.PNG";
import income_map_2015 from "../../images/MedianIncome2015.PNG";
import goods from "../../images/CommonCommoditiesPrices.PNG";
import income from "../../images/MedianIncomeDeanwood.PNG";
import pharmacy from "../../images/strand_pharmacy.jpg";
import pharmacy_modern from "../../images/strand_pharmacy_modern.jpg";
import theatre from "../../images/strand_theatre.jpg";
import theatre_modern from "../../images/strand_theatre_modern.jpg";

export const DeanwoodFood = ({resources}) => {
    return (
        <Container className="city" id="deanwood-food">
            <Row>
                <Col lg={3} className="nav-col p-0 mr-2">
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
                    <DeanwoodNav selected={"food"} resources={resources}/>
                </Col>
                <Col lg={4}/>
                <Col lg={4}>
                    <p>
                        The project tells the rise and fall of urban communities that grew
                        their own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an
                        interactive site. This specific page shows through an interactive food map
                        how access to food for residents in Deanwood has changed over time
                        from the early 1900s to the present day.
                    </p>
                </Col>
                <Col lg={4}>
                    <blockquote>
                        "Because I am a family of five, I have to go frequent to the grocery
                        store quite often. And a lot of times <mark>I have to go over to the
                        Maryland side, because of the quality of food</mark> at the Safeway on
                        Minnesota Avenue. Or there is not a grocery store in a good maybe five-mile,
                        maybe more, vicinity."
                    </blockquote>
                    <span className="blockquote-credit">
                    -Research Participant from Ashanté Reese's <i>There Ain't
                    Nothing in Deanwood</i></span>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="p-0 mt-4 mb-5">
                    <FoodMap/>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="p-0 mt-4">
                    <h1>General summary</h1>
                    <p>
                        Throughout the 1900s, Deanwood received less government
                        investment and benefits compared to similar-sized White
                        neighborhoods in DC, such as Kenilworth. However, the ways in which
                        the residents of Deanwood adapted helped the neighborhood develop a
                        healthy, self-sustaining economy.
                    </p>
                    <p>
                        In particular, Deanwood practiced self-sufficiency in goods and
                        services related to food. Most of the food-related businesses in Deanwood
                        were community-based, and the food largely came from small,
                        family-owned businesses that sourced and sold locally. This type of business
                        environment circulated money, jobs, and resources within the
                        community and helped strengthen community relations.
                    </p>

                    <p>
                        Oral histories from 1975 of Deanwood residents shed more light
                        on how this self-sufficiency came about. Many residents who were
                        interviewed for the Anacostia Oral History Project discussed how their
                        families grew most of their own food and sold the surplus in neighborhood
                        markets and mom and pop stores. One resident, Anita Blake, said, “[Our
                        family] grew all our own vegetables.” Since her uncle owned a drug store,
                        their surplus was sold there. Another resident Ethel Greene, mentioned
                        how her mother was interested in merchandising, so they “had stands in
                        the Old Market where we sold honey and flowers, fruits and vegetables.”
                    </p>
                </Col>
                <Col lg={4}/>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image className="img-wymer" src={pharmacy} fluid={true}
                           alt="Photograph of Strand Pharmacy"/>
                    <small className="text-right">Southwest corner of Grant Street and Division
                        Avenue NE. Wymer, John P.&nbsp;
                        <a href={"http://dchistory.pastperfectonline.com/" +
                        "photo/F571BB0F-BF81-410A-9516-334285347220"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image className="img-wymer" src={pharmacy_modern} fluid={true}
                           alt="Street view of what used to be
                           the Strand Pharmacy, since shuttered. Sept 2021."/>

                    <small>Screengrab from Google Street View, Sept 2021. <a
                        href={"https://www.google.com/maps/" +
                        "@38.8983127,-76.9256001,3a,75y,221.39h,85.55t/data=!3m6!1e1!3m4!1sbR9RAoP-" +
                        "A-w_9OwmC_JxGQ!2e0!7i16384!8i8192"}>
                        (source)
                    </a>
                    </small>
                </Col>
                <Col lg={4}/>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image className="img-wymer" src={theatre} fluid={true}
                           alt="Photograph of Strand Theater"/>
                    <small className="text-right">Princess Market in Strand Theatre, Grant Street
                        near Division Avenue NE. Wymer, John P.&nbsp;
                        <a href={"http://dchistory.pastperfectonline.com/photo/" +
                        "08318894-2A56-4F7E-9FB7-926326490587"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image className="img-wymer" src={theatre_modern} fluid={true}
                           alt="Street view of the Strand Pharmacy"/>

                    <small>Screengrab from Google Street View, Sept 2021. What used to be Strand
                        Theatre about to turn into modern apartments.<a
                            href={"https://www.google.com/maps/@38.8983131," +
                            "-76.9263279,3a,75y,119.69h,98.6t/data=!3m6!1e1!3m4!1s97" +
                            "rZIAe4yoEKQiyXql_GMg!2e0!7i16384!8i8192"}> (source)
                        </a>
                    </small>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="p-0 mt-4">
                    <p>
                        In this period, Deanwood was ripe with local entrepreneurs whose
                        businesses were integral parts of the community, just as they
                        were individually a part of the local community. For example,
                        Certified Market was a family-owned business in Deanwood in the 1940s that
                        went on to become a successful chain store called Murry’s Steak.
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="p-0">
                    <Image src={murry} alt="Murry's Steak, a family-owned business that originated during the peak
                        of Deanwood's entrepreneurial period." fluid={true}/>
                    <small> Murry's Steak, a family-owned business that originated during the peak
                        of Deanwood's entrepreneurial period. <a
                            href={"https://offbeatenpathdc.com/murrys-family-of-fine-food/"}> (source)
                        </a>

                    </small>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="p-0 mt-4">
                    <p>
                        But Deanwood, despite the community’s relative self-sufficiency,
                        was not exempt from greater societal trends–namely, the phenomenon of
                        the supermarket. Starting from the 1930s and continuing into the
                        modern day, chain stores like Kroger and Safeway have become a dominant
                        force in American food for most urban and suburban citizens. Shoppers
                        liked chain stores for their convenience, variety, and perceived modernity,
                        which combined plainly outcompeted local purveyors such as hucksters
                        (street vendors). The cost of this switch, however, was the social
                        relationships formed through such communal activities.
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="p-0 mt-4">
                    <Image src={safeway} alt="Modern Safeway in Deanwood" fluid={true}/>
                    <small>Modern Safeway in Deanwood at 322 40th St NE, Washington, DC 20019.
                        <a href={"https://www.google.com/maps/place/322+40th+St+NE," +
                        "+Washington,+DC+20019/@38.8935226,-76.9481625,3a,75y,159." +
                        "01h,97.13t/data=!3m7!1e1!3m5!1sPyI-vSLsz72h3dwuZaVGBA!2e0!" +
                        "5s20151101T000000!7i13312!8i6656!4m5!3m4!1s0x89b7b8ec79ecd195" +
                        ":0xb1e7243ebfe81f77!8m2!3d38.8932744!4d-76.9479073"}> (source)
                        </a>
                    </small>
                </Col>
                <Col lg={4}/>
                <Col lg={4} className="p-0 mt-4">
                    <Image src={unfair} alt="Mary McLeod Bethune picketing outside
                        People’s Drug Store with New Negro Alliance" fluid={true}/>
                    <small>
                        Mary McLeod Bethune picketing outside
                        People’s Drug Store with New Negro Alliance, August 3,
                        1939. Unknown photographer (CC BY-NC 2.0)
                    </small>
                </Col>
                <Col lg={4} xs={12} sm={12} md={12} className="mt-4 p-md-0 p-lg-2">
                    <p>
                        The transition to chain grocery stores was not smooth for
                        Deanwood, a community largely knit together by “businesses ran by and for
                        the community.” In general, these chain stores were not friendly to
                        black employment. The New Negro Alliance, a D.C.-based employment
                        justice organization for middle-class blacks in the 1900s, boycotted and
                        picketed a number of Safeway Inc.’s stores for discriminatory
                        hiring practices. Their efforts culminated in the landmark case New
                        Negro Alliance v. Sanitary Grocery Co., 303 U.S. 552, which safeguards
                        the right to peacefully protest hiring discrimination.
                    </p>
                    <blockquote>
                        <mark>“Don't Buy Where You Can't Work”</mark>
                    </blockquote>
                    <span className="blockquote-credit">-The New Negro Alliance</span>
                    <br/><br/>
                    <p>
                        For Deanwood, in one instance, the entrance of a Safeway “cut
                        through” local food vendors business, according to Allison, a 68-year old
                        Deanwood resident that Reese interviewed for Black Food
                        Geographies. But residents complained about discrimination in the store
                        which neglected to hire black workers despite serving a nearly
                        all-black clientele. After mass complaint and food quality concerns, the
                        location closed in 1980.
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="p-0 mt-4">
                    <p>
                        In an attempt to rejuvenate the community-level food system lost
                        in Deanwood, a Baltimore-based chain of black grocery stores called
                        Community Foods opened a store called Super Pride in the
                        Safeway’s old lot. Built in 1981, Super Pride prided itself on its “soul
                        food” and close community ties while still retaining a modern supermarket
                        feel. According to Edward Brown, general manager in 1983, it was “not
                        a mom-and-pop store. [They had] to fight a lot of preconceived
                        notions about black food retailers.”

                    </p>

                    <blockquote> “Super Pride is not a mom-and-pop
                        store. <mark>We've had to fight</mark> a lot
                        of preconceived notions about black food retailers.”
                    </blockquote>
                    <br/>
                    <p>
                        However, the location closed within the decade.
                    </p>
                </Col>
                <Col lg={4}/>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image src={superpride} alt="Sign from a former Super Pride Market
                        in Baltimore, Maryland." fluid={true}/>
                    <small>
                        Sign from a former Super Pride Market
                        in Baltimore, Maryland. Photograph by Eli Pousson,
                        2019 Source: Baltimore Heritage.

                    </small>
                </Col>
                <Col lg={4} className="mt-4">
                    <p>
                        Barry Scher, a spokesman for Giant Food Inc., a large
                        chain grocery store company at the time, called Super Pride stores
                        “small and antiquated.” The transition towards cultural and
                        economic dependency on supermarkets had well finished by this time, and the
                        resources of large, nationwide corporations were outstripping local
                        grocers.
                    </p>

                    <p>
                        And yet, though this social expectation was catching on,
                        the physical stores did not follow. Following the turmoil around the
                        former Safeway and then Super Pride’s closure, chain grocery stores
                        tended to avoid or leave Deanwood. From 2010 to 2017, the number of
                        full-service grocery stores in Ward 7 (which contains Deanwood) fell from
                        four to two for a population of 80.000 people.
                    </p>
                </Col>
                <Col lg={4}/>
                <Col lg={4} className="mt-4">
                    <Image src={groceries} alt="Grocery store locations and
                    percentage Black or African American population" fluid={true}/>
                    <small> Grocery store locations and percentage Black or African American
                        population. Map by Emeline Renz (@mapgrrl) via Ashanté Reese's Black Food
                        Geographies: Race, Self-Reliance, and Food Access in Washington, D.C.
                    </small>
                </Col>
                <Col lg={4}>
                    <p>
                        So we return to Deanwood’s classification as a “food
                        desert.” But as Ashanté Reese points out, such a simplified term
                        “overemphasizes lack and very rarely examines agency or resilience among
                        community members.” It brings to mind images of barren emptiness and removes
                        the nuance of neighborhood response as well as non-supermarket
                        adjacent food sources.
                    </p>
                    <blockquote> “[The term food desert] overemphasizes lack
                        and very rarely examines agency or resilience among
                        community members.”
                        -Ashante Reese
                    </blockquote>
                    <p>
                        However, as in the past the residents of Deanwood adapt
                        to their conditions. The grocery store closest to Deanwood, a new
                        Safeway, is described by residents as “dirty,” “dangerous,” “poorly
                        stocked,” and of “last resort.” Those who have easy access to
                        transportation prefer to visit further stores, expanding their own food
                        geographies, and those who don’t carpool or source food in bulk. Churches
                        and other community organizations organize food programs. Residents actively
                        weigh cost, distance, desire, and safety to achieve patterns of life
                        that are healthy and well-informed, even if it requires more
                        deliberation than it might living with better access.
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="mt-4">
                    <h1>Food Affordability</h1>
                    <p>
                        The flight of easily accessible food businesses is not
                        the only concern for
                        the growing level of food insecurity in Deanwood.
                        Deanwood has been in the lower
                        economic bracket compared the majority of Washington
                        D.C.
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6}>
                    <Image src={income_map_2005} fluid={true}/>
                    <Image src={income_map_2015} fluid={true}/>
                    <Image src={income} fluid={true}/>
                    <small> Notable points in the graph
                        are the jumps between 1980-
                        1990 and 2015-2020. Another major point of interest
                        is the large period of
                        stagnation between 1990-2015.
                    </small>
                    <p>
                        This on its own would not neccessarily be a pressing
                        issue when it comes to food accessibility. After all, there was a point in
                        time where Deanwood was food self-sufficient. However, when you look at the
                        median income of Deanwood residents and compare it to rising inflation and
                        thea rising cost of common commodities, there is a significant disparity
                        in the growth between the two.
                        <b> Notice the period of stagnant economic growth in
                            Deanwood residents between 1990-2015 in the above graph. </b> Now
                        compare this with price of common commodities between the
                        same time period.
                    </p>
                    <Image src={goods} fluid={true}/>
                    <p>
                        The price of a lot of common goods (except chicken!)
                        nearly doubled during this time frame,
                        whereas the median income of Deanwood residents hardly
                        increased at all. If food business
                        disappear and the food that is accessible becomes
                        increasingly less affordable,
                        the problem of recent periods of food insecurity becomes
                        quite evident.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

DeanwoodFood.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodFood;
