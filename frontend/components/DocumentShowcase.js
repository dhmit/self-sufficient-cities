import React, { useContext, useState } from 'react';
import ShowcaseItem from "./ShowcaseItem";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import HEAR_CALL_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_3_1910 from "../images/washington_bee_dec_3_1910.png";
import WASHINGTON_BEE_11_15_1913 from "../images/washington_bee_nov_15_1913.png";

const DocumentShowcase = () => {
    const state = useContext(TimelineContext);
    const [documents, setDocuments] = useState([
        {
            title: "Washington Bee",
            date: "December 3, 1910",
            imageRef: WASHINGTON_BEE_12_3_1910,
        },
        {
            title: "Washington Bee",
            date: "November 15, 1913",
            imageRef: WASHINGTON_BEE_11_15_1913,
        },
        {
            title: "HEAR CALL OF THE GARDEN",
            date: "March 6, 1914",
            imageRef: HEAR_CALL_GARDEN,
        },
    ]);

    const [intervalDocuments, setIntervalDocuments] = useState([]);

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

    return (
        <>
        <button onClick={handlePreviousInterval}> {
            getPreviousInterval()
                ? getPreviousInterval().toString()
                : "don't display, todo"
        } </button>
        <div id="document-showcase">
            {documents.map((document, index) =>
                <ShowcaseItem
                    key={`${document.toString()}_${index}`}
                    value={document}
                    title={document.title}
                    date={document.date}
                    imageRef={document.imageRef}
                />
            )}
        </div>
            <button onClick={handleNextInterval}> {
                getNextInterval()
                    ? getNextInterval().toString()
                    : "don't display, todo"
            }
            </button>
        </>
    );
};

export default DocumentShowcase;
