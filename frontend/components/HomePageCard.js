import React from "react";
import * as PropTypes from "prop-types";
import {Card, Col} from "react-bootstrap";

const HomePageCard = ({img_source, title, text}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant='top' src={img_source} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

HomePageCard.propTypes = {
    img_source: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default HomePageCard;
