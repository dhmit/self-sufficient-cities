import React, { useContext, useState } from 'react';
import ShowcaseItem from "./ShowcaseItem";
// import {Interval, TimelineContext} from "../contexts/TimelineContext";
import HEAR_CALL_GARDEN from "../images/hear_call_of_the_garden.png";
import WASHINGTON_BEE_12_3_1910 from "../images/washington_bee_dec_3_1910.png";
import WASHINGTON_BEE_11_15_1913 from "../images/washington_bee_nov_15_1913.png";
import {TimelineArrow} from "./TimelineArrow";

const DocumentShowcase = () => {
    // const state = useContext(TimelineContext);
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

    const [intervalDocuments, setIntervalDocuments] = useState([]);

    return (
        <div id="showcase">
            <TimelineArrow isLeft={true}/>
            <div id="document-showcase">
                {documents.map((document, index) =>
                    <ShowcaseItem
                        key={`${document.toString()}_${index}`}
                        value={document}
                        title={document.title}
                        date={document.date}
                        imageRef={document.imageRef}
                    />
                )}
            </div>
            <TimelineArrow isLeft={false}/>
        </div>
    );
};

export default DocumentShowcase;
