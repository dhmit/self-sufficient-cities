import React, { useContext, useState } from 'react';
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import * as PropTypes from "prop-types";

/**
 * Represents an arrow on the timeline used to go back or forward 10-year intervals
 * @param isLeft if true, then when a user clicks it will go back. Otherwise, it goes forward.
 */
export function TimelineArrow({isLeft}) {
    const state = useContext(TimelineContext);
    // controls the status when a user hovers over an arrow
    const [onMouseOver, setOnMouseOver] = useState(false);

    /**
     * Returns the next 10-year interval in the timeline. Returns the interval if the end
     * year is less than or equal to the max year defined in the timeline context. Otherwise,
     * returns undefined.
     */
    const getNextInterval = () => {
        const newStartYear = state.timelineRange.end;
        const newEndYear = newStartYear + 10;
        if (newEndYear <= state.maxYear) {
            return new Interval(newStartYear, newEndYear);
        }
        return undefined;
    };

    /**
     * Handles when a user clicks the right arrow to render the next 10-year interval on the
     * timeline. Returns true if an interval exists. Otherwise, returns false.
     */
    const handleNextInterval = () => {
        const nextInterval = getNextInterval();
        if (nextInterval) {
            state.setTimelineRange(nextInterval);
            return true;
        }
        return false;
    };

    /**
     * Returns the previous 10-year interval in the timeline. Returns the interval if the start year
     * is greater than or equal to the min year defined in the timeline context. Otherwise,
     * returns undefined.
     */
    const getPreviousInterval = () => {
        const newEndYear = state.timelineRange.start;
        const newStartYear = newEndYear - 10;
        if (newStartYear >= state.minYear) {
            return new Interval(newStartYear, newEndYear);
        }
        return undefined;
    };

    /**
     * Handles when a user clicks the left arrow to render the previous interval on the timeline.
     * Returns true if an interval exists. Otherwise, returns false.
     */
    const handlePreviousInterval = () => {
        const newInterval = getPreviousInterval();
        if (newInterval) {
            state.setTimelineRange(newInterval);
            return true;
        }
        return false;
    };

    const handleArrowMouseOver = () => {
        setOnMouseOver(true);
    };

    const handleArrowMouseOut = () => {
        setOnMouseOver(false);
    };

    return (
        <>
            {isLeft ? <button onMouseOver={handleArrowMouseOver}
                    onMouseOut={handleArrowMouseOut}
                    onClick={handlePreviousInterval}
                    className="arrow"
            >
                <i
                    className="bi-chevron-compact-left arrow-icon"
                    style={{
                        paddingRight: onMouseOver ? '10px' : '0px',
                    }}
                />
                <p
                    className="arrow-date"
                    style={{
                    color: onMouseOver ? 'black' : 'lightgray',
                }}>
                    {" " + (getPreviousInterval()
                    ? getPreviousInterval().toString()
                    : "don't display, todo") + " "}
                </p>
            </button>
            :
            <button onMouseOver={handleArrowMouseOver}
                    onMouseOut={handleArrowMouseOut}
                    onClick={handleNextInterval}
                    className="arrow"
            >
                <i
                    className="bi-chevron-compact-right arrow-icon"
                    style={{
                        paddingLeft: onMouseOver ? '10px' : '0px',
                    }}
                />
                <p
                    className="arrow-date"
                    style={{
                    color: onMouseOver ? 'black' : 'lightgray',
                }}>
                    {" " + (getNextInterval()
                    ? getNextInterval().toString()
                    : "don't display, todo") + " "}
                </p>
            </button>
        }
        </>
    );
};

TimelineArrow.propTypes = {
    isLeft: PropTypes.bool.isRequired,
};
