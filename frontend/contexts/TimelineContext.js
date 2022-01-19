import React from "react";

// object that represents an interval in the timeline with a start year `start` and end year `end`
export class Interval {
  constructor(startYear, endYear) {
    this.start = startYear;
    this.end = endYear;
  }
}

export const TimelineContext = React.createContext({
    // interval that the user selected from the timeline range
    'intervalSelected': new Interval(0, 0),
    'setIntervalSelected': () => {},
    // interval representing the range of years that the timeline shows
    'timelineRange': new Interval(0, 0),
    'setTimelineRange': new Interval(0, 0),
});
