import React from "react";
import {Card, Container, Row, Col, Image, Stack} from "react-bootstrap";
import * as PropTypes from "prop-types";
import big_bois from "../../images/big_bois.png";


export const DeanwoodResident = (_) => {
    const wardData = [
        {
            label: "Life expectancy",
            ward3: "86.1 years",
            ward7: "72.8 years"
        },
        {
            label: "Infant mortality",
            subLabel: "deaths per thousand live births",
            ward3: "1.3",
            ward7: "9.6"
        },
        {
            label: "Disability rate",
            subLabel: "due to health limitations",
            ward3: "17.3%",
            ward7: "26.3%"
        }
    ];

    return (<>
        <Container fluid className="p-4">
            <h2>A side-by-side comparison</h2>

            <p>
                Let's look at some key numbers that show the great disparity in the health of those
                in Ward 3 and Ward 7 of the District of Columbia.
            </p>

            <Row>
                <Col>
                    <h3 align="center">Ward 3</h3>
                </Col>
                <Col>
                    <h3 align="left">Ward 7</h3>
                </Col>
            </Row>

            <Container fluid>
                <Image style={{position: "absolute"}} src={big_bois} width="40%" className="m-4"/>

                <Stack gap={3}>
                    {wardData.map((datum, idx) =>
                        <Row key={idx}>
                            <Col>
                                <Card style={{width: "60%"}} className="m-0 p-0">
                                    <Card.Body className="p-1">
                                        <p>{datum.label}: {datum.ward3}</p>
                                        <p style={{fontSize: "9px"}}>{datum.subLabel}</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card style={{width: "60%", alignItems: "right"}} className="m-0 p-0">
                                    <Card.Body className="m-0 p-0 b-0">
                                        <p>{datum.label}: {datum.ward7}</p>
                                        <p style={{fontSize: "9px"}}>{datum.subLabel}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </Stack>
            </Container>

        </Container>
    </>);

};

DeanwoodResident.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodResident;
