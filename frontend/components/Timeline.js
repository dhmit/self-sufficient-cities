import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import Slider from "./Slider";


export function Timeline() {
    const [intervalSelected, setIntervalSelected] = useState(new Interval(1910, 1920));
    const [timelineRange, setTimelineRange] = useState(new Interval(1910, 1920));
    const minYear = '1910';
    const maxYear = '2022';
    const contextState = {
        intervalSelected,
        maxYear,
        minYear,
        timelineRange,
        setIntervalSelected,
        setTimelineRange,
    };

    return (
        <React.Fragment>
            <TimelineContext.Provider value={contextState}>
                <p> This is our timeline! </p>
                <Slider/>
                <DocumentShowcase/>
            </TimelineContext.Provider>
        </React.Fragment>
        );
}

