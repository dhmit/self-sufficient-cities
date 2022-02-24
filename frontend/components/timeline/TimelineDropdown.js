import React, {useContext} from "react";
import {Interval, SORT_TYPES, TimelineContext} from "../../contexts/TimelineContext";
import {Dropdown, DropdownButton} from "react-bootstrap";

export function TimelineDropdown() {
    const state = useContext(TimelineContext);

    function sortChronologically() {
        state.setSortType(SORT_TYPES.CHRONOLOGICAL);
        // Update timeline to sort chronologically
        const newIntervalSelected = new Interval(
            state.minYear, state.minYear + state.intervalLength
        );
        state.setTimelineIntervals(state.timelineIntervals.reverse());
        state.setIntervalSelected(newIntervalSelected);

    }

    function sortReverse() {
        state.setSortType(SORT_TYPES.REVERSE_CHRONOLOGICAL);
        // Update timeline to sort reverse chronologically
        const newIntervalSelected = new Interval(
            state.maxYear - state.intervalLength, state.maxYear
        );
        state.setTimelineIntervals(state.timelineIntervals.reverse());
        state.setIntervalSelected(newIntervalSelected);
    }

    return (
        <DropdownButton title={"Sort: " + state.sortType} variant="secondary" size="med">
            <Dropdown.Item
                onClick={sortChronologically}>{SORT_TYPES.CHRONOLOGICAL}
            </Dropdown.Item>
            <Dropdown.Item
                onClick={sortReverse}>{SORT_TYPES.REVERSE_CHRONOLOGICAL}
            </Dropdown.Item>
        </DropdownButton>
    );
}
