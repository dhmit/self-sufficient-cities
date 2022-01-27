import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import {TimelineSlider} from "./TimelineSlider";
import HEAR_CALL_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_3_1910 from "../images/washington_bee_dec_3_1910.png";
import WASHINGTON_BEE_11_15_1913 from "../images/washington_bee_nov_15_1913.png";
import {TimelineDropdown} from "./global/TimelineDropdown";
import {DocSearch} from "./DocSearch";
import {ResetDefault} from "./ResetDefault";
import DocumentModal from "./DocumentModal";



export function Timeline() {
    const maxYear = 1925;
    const minYear = 1910;
    const [intervalSelected, setIntervalSelected] = useState(new Interval(minYear, minYear + 5));
    const [timelineRange, setTimelineRange] = useState(new Interval(minYear, maxYear));
    const [documentModal, setDocumentModal] = useState({});
    // once backend is ready, we will make a request to the api to retrieve the documents & store
    // it as state
    const documents = [
        {
            title: "Washington Bee",
            date: "December 3, 1910",
            articles: [
                {title: "Washington Bee Article 1", text: "Lorem ipsum dolor sit amet"},
                {title: "Washington Bee Article 2", text: "Sample 2"}
            ],
            entities: {
                "places": [
                    "near Deanwood, D. C.",
                    "1014 W St. N.W."
                ],
                "people": [
                    "Clarence M. DeVeile"
                ],
                "dates": [
                    "December 8, 1917"
                ],
                "events": []
            },
            imageRef: WASHINGTON_BEE_12_3_1910
        },
        {
            title: "Washington Bee",
            date: "November 15, 1913",
            articles: [
                {title: "Washington Bee Article 1", text: "Lorem ipsum dolor sit amet"},
                {title: "Washington Bee Article 2", text: "Sample 2"}
            ],
            entities: {
                "places": [
                    "Ellicott City",
                    "The Howard Co. Colored People Independent League",
                    "Altholton M. E. Church",
                    "1711 Lorman St., Baltimore, Md."
                ],
                "people": [
                    "Mr. Stephen Watkins",
                    "Mr. James Carter",
                    "Rev. Wm. N. Holt"
                ],
                "dates": [
                    "August 14, 1915",
                    "September 2nd, 1915"
                ],
                "events": [
                    "First Great Annual State Bazaar and Carnival"
                ]
            },
            imageRef: WASHINGTON_BEE_11_15_1913
        },
        {
            title: "HEAR CALL OF THE GARDEN",
            date: "March 6, 1914",
            articles: [
                {title: "Hear Call of the Garden Article 1", text: "Lorem ipsum dolor sit amet"},
                {title: "Hear Call of the Garden Article 2", text: "Sample 2"}
            ],
            entities: {
                "places": [
                    "near Deanwood, D. C.",
                    "1014 W St. N.W."
                ],
                "people": [
                    "CLARENCE M. DeVEILE"
                ],
                "dates": [
                    "December 8, 1917"
                ],
                "events": []
            },
            imageRef: HEAR_CALL_GARDEN
        }
    ];

    const contextState = {
        documentModal,
        intervalSelected,
        maxYear,
        minYear,
        timelineRange,
        setDocumentModal,
        setIntervalSelected,
        setTimelineRange
    };

    const layoutStyle = {
        display: "flex"
    };

    return (
        <React.Fragment>
            <TimelineContext.Provider value={contextState}>
                {Object.keys(documentModal).length > 0 && <DocumentModal document={documentModal}/>}
                <TimelineSlider/>
                <div style = {layoutStyle}>
                    <DocSearch documents={documents}/>
                    <>&nbsp;</> <>&nbsp;</>
                    <TimelineDropdown/>
                    <>&nbsp;</> <>&nbsp;</>
                    <ResetDefault/>
                </div>
                <br></br>
                <DocumentShowcase documents={documents} />
            </TimelineContext.Provider>
        </React.Fragment>
    );
};
