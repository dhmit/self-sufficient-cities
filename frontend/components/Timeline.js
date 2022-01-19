import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import Slider from "./Slider";


export function Timeline() {
    const [intervalSelected, setIntervalSelected] = useState(new Interval(1910, 1920));
    const [timelineRange, setTimelineRange] = useState(new Interval(1910, 1920));
    const contextState = {
        intervalSelected,
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
