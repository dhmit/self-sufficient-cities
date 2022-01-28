import React, {useEffect, useContext, useState} from "react";
import Slider from "rc-slider";
import {Interval, SORT_TYPES, TimelineContext} from "../contexts/TimelineContext";
import "rc-slider/assets/index.css";

export const TimelineSlider = () => {
    const state = useContext(TimelineContext);
    const isReverseSorting = state.sortType === SORT_TYPES.REVERSE_CHRONOLOGICAL;

    /**
     * Gets the marks of the slider
     * 
     * @returns {number: ReactNode} the translated slider marks from timelineIntervals
     */
    const getMarks = () => {
        const marks = {};
        for (const [i, interval] of state.timelineIntervals.entries()) {
            const precedingLabel = isReverseSorting ? interval.end : interval.start;
            const finalLabel = isReverseSorting ? interval.start : interval.end;
            if (i !== state.timelineIntervals.length - 1) {
                marks[precedingLabel] = <strong>{precedingLabel}</strong>;
            } else {
                marks[precedingLabel] = <strong>{precedingLabel}</strong>;
                marks[finalLabel] = <strong>{finalLabel}</strong>;
            }
        }
        return marks;
    };

    const marks = getMarks();
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
            reverse={isReverseSorting}
            onChange={handleSliderChange}
            value={sliderValue}
            pushable={true}
        />
    );
};
