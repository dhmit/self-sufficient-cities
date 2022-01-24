import React, {useEffect, useContext, useState} from "react";
import Slider from "rc-slider";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
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

export const TimelineSlider = () => {
    const state = useContext(TimelineContext);
    const marks = getMarks(state.minYear, state.maxYear);
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
