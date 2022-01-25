import React from "react";
import * as PropTypes from "prop-types";
import {Card} from "react-bootstrap";

const ShowcaseItem = ({title, date, imageRef}) => {

    return (
        <Card className="showcase-item">
            <Card.Body>
                <Card.Title> { title }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> { date } </Card.Subtitle>
                <Card.Img src={imageRef} alt={`Image of ${title}`}/>
            </Card.Body>
        </Card>
    );
};

ShowcaseItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    imageRef: PropTypes.string
};

export default ShowcaseItem;
