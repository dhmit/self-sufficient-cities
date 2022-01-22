import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import {TimelineSlider} from "./TimelineSlider";
import HEAR_CALL_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_3_1910 from "../images/washington_bee_dec_3_1910.png";
import WASHINGTON_BEE_11_15_1913 from "../images/washington_bee_nov_15_1913.png";
import {TimelineDropdown} from "./global/TimelineDropdown";


export function Timeline() {
    // will change to make it 2022
    const maxYear = 2020;
    const minYear = 1910;
    const [intervalSelected, setIntervalSelected] = useState(new Interval(minYear, minYear + 5));
    const [timelineRange, setTimelineRange] = useState(new Interval(minYear, maxYear));
    // once backend is ready, we will make a request to the api to retrieve the documents & store
    // it as state
    const documents = [
        {
            title: "Washington Bee",
            date: "December 3, 1910",
            imageRef: WASHINGTON_BEE_12_3_1910
        },
        {
            title: "Washington Bee",
            date: "November 15, 1913",
            imageRef: WASHINGTON_BEE_11_15_1913
        },
        {
            title: "HEAR CALL OF THE GARDEN",
            date: "March 6, 1914",
            imageRef: HEAR_CALL_GARDEN
        }
    ];

    const contextState = {
        intervalSelected,
        maxYear,
        minYear,
        timelineRange,
        setIntervalSelected,
        setTimelineRange
    };

    return (
        <React.Fragment>
            <TimelineContext.Provider value={contextState}>
                <TimelineSlider/>
                <TimelineDropdown/>
                <DocumentShowcase documents={documents} />
            </TimelineContext.Provider>
        </React.Fragment>
    );
}
