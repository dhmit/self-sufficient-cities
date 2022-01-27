import React, {useState} from "react";
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import DocumentShowcase from "./DocumentShowcase";
import {TimelineSlider} from "./TimelineSlider";
import HEAR_CALL_OF_THE_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_8_1917 from "../images/washington_bee_dec_8_1917.png";
import WASHINGTON_BEE_8_14_1915 from "../images/washington_bee_aug_14_1915.png";
import WASHINGTON_BEE_4_26_1919 from "../images/washington_bee_aug_14_1915.png";
import WASHINGTON_BEE_3_26_1921 from "../images/washington_bee_march_26_1921.png";
import {TimelineDropdown} from "./global/TimelineDropdown";
// import {DocSearch} from "./DocSearch";
import {ResetDefault} from "./ResetDefault";
import * as PropTypes from "prop-types";
import DocumentModal from "./DocumentModal";

export function Timeline({data}) {
    const documents = data.documents;
    const maxYear = 1925;
    const minYear = 1910;
    const [intervalSelected, setIntervalSelected] = useState(new Interval(minYear, minYear + 5));
    const [timelineRange, setTimelineRange] = useState(new Interval(minYear, maxYear));
    const [documentModal, setDocumentModal] = useState({});

    // todo: change to get image from backend
    documents[0]["imageRef"] = HEAR_CALL_OF_THE_GARDEN;
    documents[0]["imageRef"] = WASHINGTON_BEE_12_8_1917;
    documents[1]["imageRef"] = WASHINGTON_BEE_8_14_1915;
    documents[2]["imageRef"] = WASHINGTON_BEE_4_26_1919;
    documents[3]["imageRef"] = WASHINGTON_BEE_3_26_1921;

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
        display: "flex",
        align: "center"
    };

    return (
        <React.Fragment>
            <TimelineContext.Provider value={contextState}>
                {Object.keys(documentModal).length > 0 && <DocumentModal document={documentModal}/>}
                <TimelineSlider/>
                <div style = {layoutStyle}>
                    {/*<DocSearch/>*/}
                    <>&nbsp;</> <>&nbsp;</>
                    <TimelineDropdown/>
                    <>&nbsp;</> <>&nbsp;</>
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
