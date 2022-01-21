import React, {useContext} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import * as PropTypes from "prop-types";

/**
 * Represents an arrow on the timeline used to go back or forward 5-year intervals
 * @param isLeft if true, then when a user clicks it will go back. Otherwise, it goes forward.
 */
export function TimelineArrow({isLeft}) {
    const state = useContext(TimelineContext);

    /**
     * Returns the next 5-year interval in the timeline. Returns the interval if the end
     * year is less than or equal to the max year defined in the timeline context. Otherwise,
     * returns undefined.
     */
    const getNextInterval = () => {
        const newStartYear = state.intervalSelected.end;
        const newEndYear = newStartYear + 5;
        if (newEndYear <= state.maxYear) {
            return new Interval(newStartYear, newEndYear);
        }
        return undefined;
    };

    /**
     * Returns the previous 5-year interval in the timeline. Returns the interval if the start year
     * is greater than or equal to the min year defined in the timeline context. Otherwise,
     * returns undefined.
     */
    const getPreviousInterval = () => {
        const newEndYear = state.intervalSelected.start;
        const newStartYear = newEndYear - 5;
        if (newStartYear >= state.minYear) {
            return new Interval(newStartYear, newEndYear);
        }
        return undefined;
    };

    /**
     * Gets the text of the interval displayed in the bottom of the arrow icon. If the
     * interval doesn't exist then it returns an empty string.
     */
    const getIntervalText = () => {
        const interval = isLeft
            ? getPreviousInterval()
            : getNextInterval();
        return interval
            ? " " + interval.toString() + " "
            : "";
    };

    /**
     * Returns false
     * if the arrow points to left and the current interval's start year is the min
     * year possible in the timeline or if the arrow points to right and end year is
     * the max year possible in the timeline.
     */
    const showArrow = () => {
        if (isLeft && Number(state.intervalSelected.start) === Number(state.minYear)) {
            return false;
        }
        else if (!isLeft && Number(state.intervalSelected.end) === Number(state.maxYear)) {
            return false;
        }
        return true;
    };

    /** Event Handling **/

    /**
     * Handles when a user clicks the right arrow to render the next 10-year interval on the
     * timeline. Returns true if an interval exists. Otherwise, returns false.
     */
    const handleNextInterval = () => {
        const nextInterval = getNextInterval();
        if (nextInterval) {
            state.setIntervalSelected(nextInterval);
            return true;
        }
        return false;
    };

    /**
     * Handles when a user clicks the left arrow to render the previous interval on the timeline.
     * Returns true if an interval exists. Otherwise, returns false.
     */
    const handlePreviousInterval = () => {
        const newInterval = getPreviousInterval();
        if (newInterval) {
            state.setIntervalSelected(newInterval);
            return true;
        }
        return false;
    };

    // handles event where user clicks on arrow
    const handleOnClickArrow = () => {
        return isLeft
            ? handlePreviousInterval()
            : handleNextInterval();
    };

    return (
        <button onClick={handleOnClickArrow}
            className={`showcase-arrow
            ${isLeft
            ? "showcase-arrow-prev"
            : "showcase-arrow-next"}`}
            style={{
                visibility : showArrow()
                    ? "visible"
                    : "hidden"
            }}
        >
            <i className={`arrow-icon
            ${isLeft
            ? "bi-chevron-compact-left"
            : "bi-chevron-compact-right"}`}
            />
            <p
                className="arrow-date"
            >
                { getIntervalText() }
            </p>
        </button>
    );
};

TimelineArrow.propTypes = {
    isLeft: PropTypes.bool.isRequired
};
