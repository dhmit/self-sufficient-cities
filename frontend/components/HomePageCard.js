import React from "react";
import * as PropTypes from "prop-types";
import {Card, Col} from "react-bootstrap";

import CityTag from "./CityTag";

const HomePageCard = ({img_source, title, text, resources}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant='top' src={img_source} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {resources.map(resource => {
                        return <CityTag resource={resource} key={resource}/>;
                    })}
                </Card.Footer>
            </Card>
        </Col>
    );
};

HomePageCard.propTypes = {
    img_source: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    resources: PropTypes.array
};

export default HomePageCard;
