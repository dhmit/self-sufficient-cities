import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import MapDeanwood from "../../components/maps/MapDeanwood";
import FoodMap from "../../components/maps/GroceryMapSlider";
import DeanwoodOverview from "./DeanwoodOverview";

export const DeanwoodFood = ({resources}) => {
    return (
        <>
        <Container className="city" id="deanwood-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Food in Deanwood, D.C.</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
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
                    <Col md={1}/>
                    <Col md={4}/>
                    <Col md={4}>
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
