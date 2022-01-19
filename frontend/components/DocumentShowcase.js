import React, { useContext, useState } from 'react';
import * as PropTypes from "prop-types";
import ShowcaseItem from "./ShowcaseItem";
import { TimelineContext } from "../contexts/TimelineContext";

const DocumentShowcase = () => {
    const state = useContext(TimelineContext);
    const [documents, setDocuments] = useState([
        {
            title: "HEAR CALL OF THE GARDEN",
            date: "March 6, 1914",
            imageRef: "../images/hear_call_of_the_garden.png",
        },
        {
            title: "Washington Bee",
            date: "March 6, 1914",
            imageRef: "../images/hear_call_of_the_garden.png",
        },
        {
            title: "Washington Bee",
            date: "March 6, 1914",
            imageRef: "../images/hear_call_of_the_garden.png",
        },
    ]);

    const [intervalDocuments, setIntervalDocuments] = useState([]);

    return (
        <div id="document-showcase">
            {documents.map((document) =>
                <ShowcaseItem
                    key={document.toString()}
                    value={document}
                    title={document.title}
                    date={document.date}
                    imageRef={document.imageRef}
                />
            )}
        </div>
    );
};

export default DocumentShowcase;
