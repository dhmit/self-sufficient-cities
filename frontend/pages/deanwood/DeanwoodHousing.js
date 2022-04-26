import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import MapHousing from "../../components/maps/MapHousing";
import Deanwood_Historical_image from "../../images/Deanwood_historical_image.jpg";
import CensusChartsV2 from "../../components/charts/CensusChartsV2";

export const DeanwoodHousing = ({resources, addresses}) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Deanwood Housing Changes Over Time</h1>
                    <p className={"intro-text"}>
                        Deanwood is “a historically stable, self-reliant, self-sufficient and
                        close-knit primarily African-American community” (Bissinger 2007). The city
                        has been described as “a place where store owners know their customers by
                        name, where residents spend their evenings sitting on porches and where
                        churchgoers fill the streets Sunday mornings on their way to one of the
                        community's more than 20 churches” (Washington Post, 1988).
                    </p>
                </Col>
                <Row xs={1} md={2} className="justify-content-around mt-5">
                    <Col md={4}>
                        <img src={Deanwood_Historical_image}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}/>
                    <Col><MapHousing addresses={addresses}/></Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}/>
                    <Col md={1}/>
                    <Col md={6}>
                        <br/>
                        <br/>
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
                        <CensusChartsV2></CensusChartsV2>
                    </Col>
                    <Col md={1}/>
                </Row>
            </Row>


        </Container>
    </>);

};

DeanwoodHousing.propTypes = {
    resources: PropTypes.array,
    addresses: PropTypes.array
};


export default DeanwoodHousing;
