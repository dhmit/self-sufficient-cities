import React, {useEffect, useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import {TimelineSlider} from "./TimelineSlider";
import HEAR_CALL_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_3_1910 from "../images/washington_bee_dec_3_1910.png";
import WASHINGTON_BEE_11_15_1913 from "../images/washington_bee_nov_15_1913.png";


export function Timeline() {
    const maxYear = 2020; // todo ang: make 2022
    const minYear = 1910;
    const [intervalSelected, setIntervalSelected] = useState(new Interval(minYear, minYear + 5));
    const [timelineRange, setTimelineRange] = useState(new Interval(minYear, maxYear));
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

    useEffect(() => {
        // WHEN BACKEND READY: getDocuments();
    }, []);

    const contextState = {
        intervalSelected,
        maxYear,
        minYear,
        timelineRange,
        setIntervalSelected,
        setTimelineRange,
    };

    /**
     * GET request to retrieve documents for timeline
     */
     const getDocuments = async () => {
        try {
            const response = await fetch('/api/documents');
            const data = await response.json();
            setDocuments(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
            <TimelineContext.Provider value={contextState}>
                <TimelineSlider/>
                <DocumentShowcase documents={documents} />
            </TimelineContext.Provider>
        </React.Fragment>
        );
}

