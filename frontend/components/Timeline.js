import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import {TimelineSlider} from "./TimelineSlider";
import HEAR_CALL_OF_THE_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_8_1917 from "../images/washington_bee_dec_8_1917.png";
import WASHINGTON_BEE_8_14_1915 from "../images/washington_bee_aug_14_1915.png";
import WASHINGTON_BEE_4_26_1919 from "../images/washington_bee_april_26_1919.png";
import WASHINGTON_BEE_3_26_1921 from "../images/washington_bee_march_26_1921.png";
import {TimelineDropdown} from "./global/TimelineDropdown";
import {ShowAll} from "./ShowAll";
import {DocSearch} from "./DocSearch";
import {ResetDefault} from "./ResetDefault";
import * as PropTypes from "prop-types";
import DocumentModal from "./DocumentModal";


/**
 * Generates the five-year intervals that will be used for the timeline slider
 *
 * @returns {Array} list of the intervals starting at minYear and ending in maxYear
 */
const getTimelineIntervals = (minYear, maxYear, intervalLength) => {
    const intervals = [];
    for (let i = minYear; i < maxYear; i += intervalLength) {
        const newInterval = new Interval(i, i + intervalLength);
        intervals.push(newInterval);
    }
    return intervals;
};

export const Timeline = ({data}) => {
    const documents = data.documents;
    const maxYear = 1925;
    const minYear = 1910;
    const intervalLength = 5;
    const [intervalSelected, setIntervalSelected] = useState(
        new Interval(minYear, minYear + intervalLength)
    );
    const timelineIntervals = getTimelineIntervals(minYear, maxYear, intervalLength);
    const [documentModal, setDocumentModal] = useState({});
    // once backend is ready, we will make a request to the api to retrieve the documents & store
    // it as state

     documents[0]["imageRef"] = HEAR_CALL_OF_THE_GARDEN;
     documents[1]["imageRef"] = WASHINGTON_BEE_12_8_1917;
     documents[2]["imageRef"] = WASHINGTON_BEE_8_14_1915;
     documents[3]["imageRef"] = WASHINGTON_BEE_4_26_1919;
     documents[4]["imageRef"] = WASHINGTON_BEE_3_26_1921;

    const contextState = {
        documentModal,
        intervalSelected,
        maxYear,
        minYear,
        intervalLength,
        timelineIntervals,
        setDocumentModal,
        setIntervalSelected
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
                    <DocSearch documents={data.documents}/>
                    <>&nbsp;</> <>&nbsp;</>
                    <TimelineDropdown/>
                    <>&nbsp;</> <>&nbsp;</>
                    <ShowAll/>
                    <ResetDefault/>
                </div>
                <br></br>
                <DocumentShowcase documents={data.documents} />
            </TimelineContext.Provider>
        </React.Fragment>
    );
};

Timeline.propTypes = {
    data: PropTypes.object
};
