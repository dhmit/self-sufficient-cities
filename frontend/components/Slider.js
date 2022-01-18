import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = {width: 800, margin: 50};
const marks = {};
const minY = 1910;
const maxY = 1920;

for (let i = minY; i < maxY + 1; i++) {
    const yearStr = String(i);
    if (i === 1910 || i === 1920) {
        marks[i] = {label: <strong>{yearStr}</strong>}
    }
    else {
        marks[i] = yearStr
    }
}

function log(value) {
  console.log(value);
}

export default class Slider extends React.component {
    render() {
        return(
            <div>
                <div style = {style}>
                    <p> Timeline Slider </p>
                    <Slider.Range min={minY} max={maxY} marks={marks} step={10} onChange={log} defaultValue={[1900,2000]} />
                </div>
=======
const style = { width: 400, margin: 50 };

const marks = {}
const minY = 1910
const maxY = 1920

for (let i = minY; i < maxY + 1; i++) {
    const str = String(i)
    if (i === minY || i === maxY) {
        marks[i] = <strong>{str}</strong>
    }
    marks[i] = str
}

function log(value) {
  console.log(value)
}


export default class Slider extends React.Component {
    render(){
        return(
            <div style = {style}>
                <p> Timeline Slider</p>
                <Slider.range min={minY} marks={marks} step={10} onChange={log} defaultValue = {[20, 40]} />
            </div>
        );
}

