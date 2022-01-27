import React, {useContext} from "react";
import {TimelineContext} from "../contexts/TimelineContext";
import * as PropTypes from "prop-types";

/**
 * Represents an arrow on the timeline used to go back or forward 5-year intervals
 * @param isLeft if true, then when a user clicks it will go back. Otherwise, it goes forward.
 */
export function TimelineArrow({isLeft}) {
    const state = useContext(TimelineContext);

    const getContainingInterval = (selectedYear, isPrev) => {
        // includes index of array in the case where left and right arrow overlap
        // and left arrow takes precedence
        const containingInterval = {};
        for (const [i, interval] of state.timelineIntervals.entries()) {
            const isAfterStart = selectedYear >= interval.start;
            const isBeforeEnd = selectedYear <= interval.end;
            if (isAfterStart && isBeforeEnd) {
                containingInterval["interval"] = interval;
                containingInterval["index"] = i;
                if (isPrev) {
                    break;
                }
            }
        }
        return containingInterval;
    };

    /**
     * Returns the next 5-year interval in the timeline. Returns the interval if the end
     * year is less than or equal to the max year defined in the timeline context. Otherwise,
     * returns undefined.
     */
    const getNextInterval = () => {
        if (state.intervalSelected.end < state.maxYear) {
            const {interval, index} = getContainingInterval(state.intervalSelected.end, false);
            // General case: If the containing interval overlaps for
            // both the left and right arrows, then left gets precedence
            if (index !== state.timelineIntervals.length -1) {
                const prevInterval = getPreviousInterval();
                if (prevInterval !== undefined && interval.start === prevInterval.start) {
                    return state.timelineIntervals[index+1];
                }
            }
            return interval;
        }
        return undefined;
    };

    /**
     * Returns the previous 5-year interval in the timeline. Returns the interval if the start year
     * is greater than or equal to the min year defined in the timeline context. Otherwise,
     * returns undefined.
     */
    const getPreviousInterval = () => {
        if (state.intervalSelected.start > state.minYear) {
            const {interval, index} = getContainingInterval(state.intervalSelected.start, true);
            // Special case: If the containing interval overlaps on the 
            // the last interval, then the right arrow is given precedence
            if (index === state.timelineIntervals.length - 1) {
                const nextInterval = getNextInterval();
                if (nextInterval !== undefined && interval.start === nextInterval.start) {
                    return state.timelineIntervals[index-1];
                }
            }
            return interval;
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
            className={isLeft
                ? "showcase-arrow-prev"
                : "showcase-arrow-next"}
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
