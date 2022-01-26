import React from "react";
import * as PropTypes from "prop-types";
import {Badge} from "react-bootstrap";
// import {Card} from "react-bootstrap";
// import {TimelineContext} from "../contexts/TimelineContext";

const TimelinePills = ({document}) => {
    const entities = document.entities;
    return (
    <div className="pills">
        { entities.people &&
            <div>
            <p> People: </p>
                {entities.people.map((person, index) =>
                    <>
                    <Badge
                        key={`${person}_${index}`}
                        bg="success"
                        className="badge-size"
                    >
                        {person}
                    </Badge>{' '}
                    </>)
                }
            </div>
          }
          { entities.places &&
            <div>
            <p> Places: </p>
                {entities.places.map((place, index) =>
                    <>
                    <Badge
                        key={`${place}_${index}`}
                        bg="secondary"
                        className="badge-size"
                    >
                        {place}
                    </Badge>{' '}
                    </>)
                }
            </div>
          }
          { entities.events &&
            <div>
            <p> Events: </p>
                {entities.events.map((event, index) =>
                    <>
                    <Badge
                        key={`${event}_${index}`}
                        bg="danger"
                        className="badge-size"
                    >
                        {event}
                    </Badge>{' '}
                    </>)
                }
            </div>
          }
        </div>
    );
};

TimelinePills.propTypes = {
    document: PropTypes.object
};

export default TimelinePills;
