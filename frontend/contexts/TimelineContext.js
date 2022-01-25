import React from "react";

// object that represents an interval in the timeline with a start year `start` and end year `end`
export class Interval {
    constructor(startYear, endYear) {
        this.start = startYear;
        this.end = endYear;
    };
    toString() {
        return `${this.start} - ${this.end}`;
    }
};

export const TimelineContext = React.createContext({
    // represents the min and max year the timeline can be
    "minYear": 1910,
    "maxYear": 1925,
    // interval that the user selected from the timeline range
    "intervalSelected": new Interval(1910, 1920),
    "setIntervalSelected": () => {},
    // interval representing the range of years that the timeline shows
    "timelineRange": new Interval(1910, 1920),
    "setTimelineRange": () => {}
});
