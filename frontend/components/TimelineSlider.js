import React, {useContext} from "react";
import Slider from "rc-slider";
import {TimelineContext} from "../contexts/TimelineContext";
import "rc-slider/assets/index.css";

/**
 * Gets the marks of the slider separated by 5 year intervals.
 * @param minYear the minimum year of the timeline
 * @param maxYear the maximum year of the timeline
 * @returns {{}} the marks starting at minYear and ending in maxYear
 */
function getMarks(minYear, maxYear) {
    const marks = {};
    for (let i = minYear; i < maxYear + 1; i += 5) {
        if (i === minYear || i === maxYear) {
            marks[i] = <strong>{i}</strong>;
        }
        else {
            marks[i] = i;
        }
    }
    return marks;
}

function log(value) {
    const leftVal = value[0];
    const rightVal = value[1];
    console.log([leftVal, rightVal]);
}

export const TimelineSlider = () => {
    const state = useContext(TimelineContext);
    const marks = getMarks(state.minYear, state.maxYear);
    /*function change() {
        const interval = new Interval(leftVal, rightVal);
        state.setTimelineRange(interval);
    }*/
    return (
        <Slider.Range
            className="timeline-slider"
            min={state.minYear}
            max={state.maxYear}
            dots={true}
            marks={marks}
            step={1}
            onChange={log}
            value = {[state.intervalSelected.start, state.intervalSelected.end]}
        />
    );
};
