import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import MapHousing from "../../components/maps/MapHousing";
import Deanwood_Historical_image from "../../images/Deanwood_historical_image.jpg";
import CensusChartsV2 from "../../components/charts/CensusChartsV2";

export const DeanwoodHousing = ({resources, addresses}) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Row>
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
                <Row className="mt-5 mb-4">
                    <Col md={4}/>
                    <Col md={8} lg={8}>
                        <Image src={Deanwood_Historical_image} fluid={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}/>
                    <Col><MapHousing addresses={addresses}/></Col>
                </Row>
                <Row className="mt-5">
                    <Col md={4}/>
                    <Col md={1}/>
                    <Col md={6}>
                        <br/>
                        <br/>
                        <p>
                            Typically, it was very difficult for African Americans to obtain home
                            loans since predominantly black districts were generally redlined.
                            Families living in the “red zone” did not qualify for government-backed
                            loans, and, thus, were unable to receive aid to purchase a home.
                            However, Deanwood provided homeownership opportunities for
                            African-Americans in Washington, where homes were sold and paid in
                            monthly installments. Many of the homes stayed in the family of the
                            original owners’ for several generations. This can be inferred through
                            the repeated $10 dollar transfers found in the Washington Record of
                            Deeds, signifying that homes’ ownership was passed down from parents to
                            their children. By keeping the home in the family, people saved on fees
                            normally associated with purchasing and selling homes such as realtor
                            fees. Although some still remain in the original families, with a recent
                            wave of gentrification in the neighborhood, more families have been
                            forced to sell their homes at lower prices than comparable communities.
                            Consequently, these families lose one of their biggest assets—their
                            home.
                        </p>
                        <CensusChartsV2></CensusChartsV2>
                        <pre>{JSON.stringify(resources)}</pre>
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
