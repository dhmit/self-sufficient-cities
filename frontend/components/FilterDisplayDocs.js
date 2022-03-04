import React, {useEffect, useContext, useState} from "react";
import ShowcaseItem from "./ShowcaseItem";
import * as PropTypes from "prop-types";

const FilterDisplayDocs = ({documents}) => {
    return (
        <div id="showcase">
            <div id="document-showcase">
                {documents.map((document, index) =>
                        <ShowcaseItem
                            key={`${document.toString()}_${index}`}
                            value={document}
                            document={document}
                        />)
                }
            </div>
        </div>
    );
};

FilterDisplayDocs.propTypes = {
    documents: PropTypes.array
};

export default FilterDisplayDocs;
