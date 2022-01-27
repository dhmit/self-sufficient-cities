import React, {useEffect, useContext, useState} from "react";
import Slider from "rc-slider";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import "rc-slider/assets/index.css";

/**
 * Gets the marks of the slider
 * 
 * @param timelineIntervals the minimum year of the timeline 
 * @returns {number: ReactNode} the translated slider marks from timelineIntervals
 */
function getMarks(timelineIntervals) {
    const marks = {};
    timelineIntervals.forEach((interval, i) => {
        if (i !== timelineIntervals.length - 1) {
            marks[interval.start] = <strong>{interval.start}</strong>;
        } else {
            marks[interval.start] = <strong>{interval.start}</strong>;
            marks[interval.end] = <strong>{interval.end}</strong>;
        }
    });
    return marks;
}

export const TimelineSlider = () => {
    const state = useContext(TimelineContext);
    const marks = getMarks(state.timelineIntervals);
    const [sliderValue, setSliderValue] = useState([]);

    useEffect(() => {
        updateSliderValues();
    }, [state.intervalSelected.start, state.intervalSelected.end]);

    const handleSliderChange = (selectedYears) => {
        setSliderValue(selectedYears);
        // Update interval selected context
        const newStartYear = selectedYears[0];
        const newEndYear = selectedYears[1];
        const newIntervalSelected = new Interval(newStartYear, newEndYear);
        state.setIntervalSelected(newIntervalSelected);
    };

    const updateSliderValues = () => {
        setSliderValue([state.intervalSelected.start, state.intervalSelected.end]);
    };

    return (
        <Slider.Range
            className="timeline-slider"
            min={state.minYear}
            max={state.maxYear}
            dots={true}
            marks={marks}
            step={1}
            onChange={handleSliderChange}
            value={sliderValue}
            pushable={true}
        />
    );
};
