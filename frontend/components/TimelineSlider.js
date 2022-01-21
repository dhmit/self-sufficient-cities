import React, {useContext} from "react";
import Slider from 'rc-slider';
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import * as PropTypes from "prop-types";
import 'rc-slider/assets/index.css';

const marks = {};
const minY = 1910;
const maxY = 2000;

for (let i = minY; i < maxY + 1; i += 5) {
    const str = String(i);
    if (i === minY || i === maxY) {
        marks[i] = <strong>{str}</strong>;
    }
    else {
        marks[i] = str;
    }
}

let leftVal = 1910;
let rightVal = 1915;

function log(value) {
  leftVal = value[0];
  rightVal = value[1];
  console.log([leftVal, rightVal]);
}


export const TimelineSlider = ({leftEnd, rightEnd}) => {
        const state = useContext(TimelineContext);
        /*function change() {
            const interval = new Interval(leftVal, rightVal);
            state.setTimelineRange(interval);
        }*/
        return (
            <Slider.Range
                className="timeline-slider"
                min={minY} max={maxY} dots={true} marks={marks} step={1} onChange={log}
                value = {[state.intervalSelected.start, state.intervalSelected.end]} 
            />
        );
};

TimelineSlider.defaultProps = {
    leftEnd: 1910,
    rightEnd: 1915
};

TimelineSlider.propTypes = {
    leftEnd: PropTypes.number.isRequired,
    rightEnd: PropTypes.number.isRequired,
};

export {leftVal, rightVal};



