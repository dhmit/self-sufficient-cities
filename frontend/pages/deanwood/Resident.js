import React from "react";
import {Container, Row, Col, Card, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import deanwood_image from "../../images/deanwood.jpg";
import big_bois from "../../images/big_bois.png";
const image_source = "https://commons.wikimedia.org/wiki/File:Deanwood_Washington_DC.jpg";

export const DeanwoodResident = (_) => {

    return (<>
        <Container className="city" id="deanwood-overview">
            <Container className="m-4">
                <Card>
                    <Card.Img src={deanwood_image}></Card.Img>
                    <Card.ImgOverlay>
                        Licenced under CC BY 3.0. <a href={image_source}>Source.</a>
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>A history of disparity</Card.Title>
                        <Card.Text>
                            Deanwood lies in Ward 7 of the District of Columbia, home to over
                            80 thousand (mostly Black) inhabitants. A couple of miles across the
                            Anacostia lies Ward 3, with about the same number of (mostly White)
                            inhabitants. However, the small distance between the two wards belies
                            a world of difference. The disparity between Ward 3 and Ward 7 is not
                            just demographic or economic: as shown here, it extends to people's
                            health. Those who, by accident of birth, lie in the wrong side of the
                            divide can expect to lead lives that are ten years shorter and have
                            higher rates of chronic diseases such as diabetes.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="m-4">
                <Row>
                    <Col>
                        <h2>Ward 3</h2>

                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Life expectancy: 86.1</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Infant mortality: 0.13%</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Disability rate: 17.3%</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Image src={big_bois} width={500}></Image>
                    </Col>

                    <Col>
                        <h2>Ward 7</h2>

                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Life expectancy: 72.8</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Infant mortality: 0.91%</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Disability rate: 26.3%</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Container>
    </>);

};

DeanwoodResident.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodResident;
