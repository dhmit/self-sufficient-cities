import React, { useState } from 'react';
import * as PropTypes from "prop-types";
import ShowcaseItem from "./ShowcaseItem";

const DocumentShowcase = ({documents, timelineInterval}) => {
    const [intervalDocuments, setIntervalDocuments] = useState([]);

    return (
        <div id="document-showcase">
            <ul>
                {documents.map((document) =>
                    <ShowcaseItem 
                        key={document.toString()} 
                        value={document}
                        title={document.title}
                        date={document.date}
                        imageRef={document.imageRef}
                    />
                )}
            </ul>
        </div>
    );
};

DocumentShowcase.propTypes = {
    documents: PropTypes.array,
    timelineInterval: PropTypes.object,
};

export default DocumentShowcase;