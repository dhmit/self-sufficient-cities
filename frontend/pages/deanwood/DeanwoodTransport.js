import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import wymer_deanwood_info from "../../images/deanwood/WY_deanwood_explanation.jpg";
import interstate_highway from "../../images/deanwood/interstate-highway.jpeg";
import Streets from "../../components/transport/Streets";
import DeanwoodHighwayCard from "../../components/transport/DeanwoodHighwayCard";
import DeanwoodI295Card from "../../components/transport/DeanwoodI295Card";
import Citation from "../../components/global/Citation";

import image_47th_Place_NE from "../../images/deanwood/streets/47th_Place_NE.jpg";
import image_48th_Place_NE from "../../images/deanwood/streets/48th_Place_NE.jpg";
import image_45th_St_NE from "../../images/deanwood/streets/45th_St_NE.jpg";
import image_Lee_NE from "../../images/deanwood/streets/Lee_NE.jpg";
import image_Eastern_Ave_NE from "../../images/deanwood/streets/Eastern_Ave_NE.jpg";
import image_Nash_St_NE from "../../images/deanwood/streets/Nash_St_NE.jpg";
import image_49th_Place_NE from "../../images/deanwood/streets/49th_Place_NE.jpg";
import image_51st_St_NE from "../../images/deanwood/streets/51st_St_NE.jpg";
import image_34th_St_1 from "../../images/deanwood/streets/other/34th_St_1.jpg";
import image_34th_St_2 from "../../images/deanwood/streets/other/34th_St_2.jpg";

const deanwood_coordinates = [
    {coordinates: [38.9049993, -76.9347665], image: image_47th_Place_NE, name: "47th_Place_NE"},
    {coordinates: [38.9048142, -76.9351318], image: image_48th_Place_NE, name: "48th_Place_NE"},
    {coordinates: [38.9046599, -76.9295661], image: image_Lee_NE, name: "Lee_NE"},
    {coordinates: [38.9028956, -76.9401965], image: image_45th_St_NE, name: "45th_St_NE"},
    {coordinates: [38.9111588, -76.9352793], image: image_Eastern_Ave_NE, name: "Eastern_Ave_NE"},
    {coordinates: [38.8985162, -76.932845], image: image_49th_Place_NE, name: "49th_Place_NE"},
    {coordinates: [38.9030646, -76.9279217], image: image_51st_St_NE, name: "51st_St_NE"},
    {coordinates: [38.9018772, -76.9288772], image: image_Nash_St_NE, name: "Nash_St_NE"}

];

const northeast_coordinates = [
    {coordinates: [38.893501, -76.9573368], image: image_34th_St_1, name: "34th St"},
    {coordinates: [38.893915, -76.9592747], image: image_34th_St_2, name: "34th St"}
];


export const DeanwoodTransport = ({resources, deanwood_boundary, kenilworth_boundary}) => {

    return (
        <Container className="city" id="deanwood-transport">
            <Row>
                <Col lg={3} className="nav-col p-0 mr-2">
                    <h1>Transportation in Deanwood, D.C.</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"transportation"} resources={resources}/>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="column mt-2">
                    <h2>Introduction</h2>
                    <p>
                        Public policy pushed African Americans out of their homes and into Deanwood
                        in early-twentieth century, creating a segregated enclave in the
                        northeastern
                        part of Washington D.C. Citing "public health, safety, morals, and
                        welfare"<a className={"citation-pointer"} title={"Code of the" +
                    " District of Columbia"} href={"#source-1"}>[1]</a>, a 1929 law legalized
                        forcible eviction of (largely Black) residents from their alley building
                        homes: "to <b>eliminate communities in the inhabited alleys</b>...the
                        President is hereby authorized and empowered to acquire by purchase, gift,
                        condemnation...any land, building, structure...in or adjacent to any
                        inhabited alley in the District of Columbia."
                    </p>
                    <p>
                        This story is not unique to Deanwood. "Urban renewal systematically
                        destroyed many African American communities and businesses and...failed to
                        safeguard the rights and well-being of those forcibly relocated from those
                        homes and businesses" writes Christopher Silver.<a
                        className={"citation-pointer"}
                        title={"THE RACIAL ORIGINS OF ZONING IN AMERICAN CITIES"}
                        href={"#source-2"}>[2]</a>
                    </p>
                </Col>

                <Col lg={4}/>
                <Col lg={2} className="column mt-2">
                    <Image src={wymer_deanwood_info} height={"200px"} fluid={true}/>
                    <small>
                        Area 8 map and description, John Wymer. <a
                        href="https://www.wymersdc.com/map-and-area-description#area8">source</a>.
                    </small>
                </Col>
                <Col lg={6}>
                    <p className="mt-2">In the 1950s, <a
                        href="http://www.wymersdc.com/john-p-wymer">John Philip Wymer</a>, a
                        statistician working for the Bureau of Standards, set out to
                        photograph Washington D.C. In planning his work, Wymer charted out DC into
                        several areas. This drawing shows Wymer's "Area 8", which includes Deanwood
                        and Kenilworth. Wymer's description reads, in part: "This area is mainly a
                        Negro residential area. The only white neighborhood lies at the northern end
                        of Kenilworth Avenue above Meade Street. The portion of the area east of
                        Kenilworth is known as Deanwood and is the older section of the extensive
                        Negro district in the extreme eastern section of the city. Though many of
                        the houses in the area are attractive and modern, the district has <mark>the
                            usual characteristics of a Negro neighborhood</mark> in the outlying
                        section of Washington, such as a lack of adequate shopping
                        facilities and a <mark>poorly planned</mark> and a <mark>poorly
                            paved street system.</mark>"
                    </p>
                </Col>
                <Col lg={4}/>
                <Col lg={8}>
                    <p>In segregated Deanwood, residents had access to fewer governmental support
                        systems. The following images taken in 1963 by the District Department of
                        Transportation<a className={"citation-pointer"} title={"District" +
                        " Department" + "of Transportation"} href={"#source-3"}>[3]</a> show the
                        state of Deanwood's roads, some unpaved.</p>
                    <Streets places={deanwood_coordinates} position={[38.9049703, -76.9347685]}
                             zoom={14}/>
                </Col>

                <Col lg={4}/>
                <Col lg={8}>
                    <p>Near the Anacostia river, the roads told a different story.</p>
                    <Streets places={northeast_coordinates} position={[38.893501, -76.9573368]}
                             zoom={14}/>
                </Col>

                <Col lg={4}/>
                <Col lg={8} className="column mt-4">
                    <DeanwoodHighwayCard
                        img_source={interstate_highway}
                    />
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="column mb-4">
                    <DeanwoodI295Card deanwood_boundary={deanwood_boundary}
                                      kenilworth_boundary={kenilworth_boundary}/>
                </Col>


                <Col lg={4}/>
                <Col lg={8} className="justify-content-around mt-5">
                    <h2>Sources</h2>
                    <Citation identifier={"source-1"} title={"Code of the" +
                    " District of Columbia"} link={"https://heinonline.org/HOL" +
                    "/P?h=hein.sstatutes/cdcocol0002&i=247"}/>
                    <Citation identifier={"source-2"}
                              title={"Christopher Silver, The Racial Origin of Zoning in" +
                              " American Cities,” Manning Thomas, June and Marsha Ritzdorf eds. " +
                              "Urban Planning and the African American Community: In the Shadows. " +
                              "Thousand Oaks, CA: Sage Publications, 1997: 23-42."}
                              link={"https://eportfolios.macaulay.cuny.edu/" +
                              "goldwyn17/files/2017/01/silver-racialoriginsofzoning.pdf"}/>
                    <Citation identifier={"source-3"}
                              title={"District Department of Transportation, “Deanwood,”" +
                              "DDOT Historic Collections"}
                              link={"https://ddotlibrary.omeka.net/items/show/139"}/>
                    <Citation identifier={"source-4"}
                              title={"Dwight D. Eisenhower Presidential Library - " +
                              "An excerpt from President Eisenhower’s Message to Congress " +
                              "regarding highways, February 22, 1955"}/>
                </Col>
            </Row>
        </Container>
    );

};

DeanwoodTransport.propTypes = {
    resources: PropTypes.array,
    deanwood_boundary: PropTypes.object,
    kenilworth_boundary: PropTypes.object
};


export default DeanwoodTransport;
