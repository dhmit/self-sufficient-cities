import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import Slider from "./Slider";


export function Timeline() {
    const [interval, setInterval] = useState(new Interval(0, 0));
    const contextState = {
        interval,
        setInterval,
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
