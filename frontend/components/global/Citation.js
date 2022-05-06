import React from "react";
import * as PropTypes from "prop-types";


const Citation = ({identifier, title, accessed, link}) => {
    return (
        <div id={identifier} className={"citation"}>
            <p className={"citation-title"}>
                <span className={"citation-num"}>
                    {identifier.split("source-")[1]}.&nbsp;
                </span>
                {title}
            </p>
            {accessed && <p className={"citation-accessed"}>{accessed}&nbsp;
                <a className={"citation-link"} href={link}>{link}</a>
            </p>}
            {!accessed && link && <p><a className={"citation-link"} href={link}>{link}</a></p>}
        </div>
    );
};

Citation.propTypes = {
    identifier: PropTypes.string,
    title: PropTypes.string,
    accessed: PropTypes.string,
    link: PropTypes.string
};


export default Citation;


