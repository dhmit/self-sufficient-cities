import React from "react";
import * as PropTypes from "prop-types";
import {Badge} from "react-bootstrap";
// import {Card} from "react-bootstrap";
// import {TimelineContext} from "../contexts/TimelineContext";

const TimelinePills = ({document}) => {
    const documentEntities = document.entities;
    const pillLabels = documentEntities.people
        .concat(documentEntities.places.concat(documentEntities.events));
    return (
        <div className="pills">
            { pillLabels && pillLabels.map((label, index) =>
                <>
                    <Badge
                        key={`${label}_${index}`}
                        bg="success"
                        className="badge-size"
                    >
                        {label}
                    </Badge>{" "}
                </>)
            }
        </div>
    );
};

TimelinePills.propTypes = {
    document: PropTypes.object
};

export default TimelinePills;
