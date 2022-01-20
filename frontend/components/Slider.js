import React, {useContext} from "react";
import Slider from 'rc-slider';
import {Interval, TimelineContext} from "../contexts/TimelineContext";
import * as PropTypes from "prop-types";
import 'rc-slider/assets/index.css';

const style = {width: 1375, margin: 0};
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



const TimeSlider = ({leftEnd, rightEnd}) => {
        const state = useContext(TimelineContext);
        /*function change() {
            const interval = new Interval(leftVal, rightVal);
            state.setTimelineRange(interval);
        }*/
        return (
            <div id = "slider">
                <div style={style}>
                    <Slider.Range min={minY} max={maxY} dots={true} marks={marks} step={1} onChange={log}
                                  value = {[state.intervalSelected.start, state.intervalSelected.end]} />
                <div id = "line-break">
                    <br/>
                </div>
                </div>
            </div>
        );
};

TimeSlider.defaultProps = {
    leftEnd: 1910,
    rightEnd: 1915
};

TimeSlider.propTypes = {
    leftEnd: PropTypes.number.isRequired,
    rightEnd: PropTypes.number.isRequired,
};

export default TimeSlider;
export {leftVal, rightVal};



