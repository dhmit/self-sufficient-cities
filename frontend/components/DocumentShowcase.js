import React, {useEffect, useContext, useState} from "react";
import ShowcaseItem from "./ShowcaseItem";
import {TimelineArrow} from "./TimelineArrow";
import {TimelineContext} from "../contexts/TimelineContext";
import * as PropTypes from "prop-types";

const DocumentShowcase = ({documents}) => {
    const context = useContext(TimelineContext);
    const [intervalDocuments, setIntervalDocuments] = useState([]);

    useEffect(() => {
        filterDocumentsByInterval();
    }, [context.intervalSelected.start, context.intervalSelected.end]);

    /**
     * Filters the documents to only show the documents within the years in the selected timeineline
     * interval with the starting year being inclusive and the ending year being exclusive
     * (e.g. 1910-1915 interval would show documents from Jan. 1, 1910 to Dec. 31, 1914)
     */
    const filterDocumentsByInterval = () => {
        const timelineStartDate = new Date(context.intervalSelected.start, 0);
        const timelineEndDate = new Date(context.intervalSelected.end, 0);
        const filteredDocs = documents.filter(doc => {
            const docDate = new Date(doc.date);
            return docDate >= timelineStartDate && docDate < timelineEndDate;
        });
        setIntervalDocuments(filteredDocs);
    };

    return (
        <div id="showcase">
            <TimelineArrow isLeft={true}/>
            <div id="document-showcase">
                {intervalDocuments.length > 0
                    ? intervalDocuments.map((document, index) =>
                        <ShowcaseItem
                            key={`${document.toString()}_${index}`}
                            value={document}
                            document={document}
                        />)
                    : <p className="empty-message">No documents to display for this interval</p>
                }
            </div>
            <TimelineArrow isLeft={false}/>
        </div>
    );
};

DocumentShowcase.propTypes = {
    documents: PropTypes.array
};

export default DocumentShowcase;
