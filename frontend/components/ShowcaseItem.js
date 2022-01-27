import React, {useContext} from "react";
import * as PropTypes from "prop-types";
import {Card} from "react-bootstrap";
import {TimelineContext} from "../contexts/TimelineContext";
import TimelinePills from "./TimelinePills";

const ShowcaseItem = ({document}) => {
    const state = useContext(TimelineContext);
    const handleOnClick = () => {
        state.setDocumentModal(document);
    };

    return (
        <Card className="showcase-item" onClick={handleOnClick}>
            <Card.Body>
                <Card.Title> { document.title }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> { document.date } </Card.Subtitle>
                <Card.Img src={document.imageRef} alt={`Image of ${document.title}`}/>
            </Card.Body>
            <TimelinePills document={document}/>
        </Card>
    );
};

ShowcaseItem.propTypes = {
    document: PropTypes.object
};

export default ShowcaseItem;
