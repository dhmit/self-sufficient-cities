import React from "react";
import * as PropTypes from "prop-types";
import {Badge} from "react-bootstrap";

const TimelinePills = ({document}) => {
    const getEntities = (entities) => {
        return entities.places.concat(entities.people).concat(entities.events);
    };
    let documentEntities = document.articles
        .reduce((allEntities, article) => allEntities.concat(getEntities(article.entities)), []);
    // randomize the entities and get the first 5
    documentEntities = documentEntities.sort(() => Math.random() - 0.5).slice(0,5);
    return (
        <>
            { documentEntities && documentEntities.map((label, index) =>
                <div key={`${label}_${index}`}>
                    <Badge pill className="bg-secondary text-light">
                        {label}
                    </Badge>{" "}
                </div>)
            }
        </>
    );
};

TimelinePills.propTypes = {
    document: PropTypes.object
};

export default TimelinePills;
