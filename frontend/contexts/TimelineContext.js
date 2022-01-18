import React from "react";

// object that represents an interval in the timeline with a start year `start` and end year `end`
export class Interval {
  constructor(startYear, endYear) {
    this.start = startYear;
    this.end = endYear;
  }
}

export const TimelineContext = React.createContext({
    'interval': new Interval(0, 0),
    'setInterval': () => {},
});
