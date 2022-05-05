import React from "react";
import * as PropTypes from "prop-types";

export const Legend = ({options}) => {
    // Legend expects options to look like this:
    // options = [
    //  [<fill color of square>, <label>]
    //  [<fill color of square>, <label>]
    // ]

    return (
        <div className="legend-container">
            <h1>Legend</h1>
            {options.map((option, idx) => {
                return <div key={idx} className={"marker-set"}>
                    <div key={`${idx}-marker`} className={"legend-marker"}
                        style={{backgroundColor: option[0]}}/>
                    <span key={`${idx}-label`} className={"marker-label"}>{option[1]}</span>
                </div>;
            })}
        </div>
    );
};

Legend.propTypes = {
    options: PropTypes.array
};

export default Legend;
