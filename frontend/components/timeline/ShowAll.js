import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {Interval, TimelineContext} from "../../contexts/TimelineContext";

export const ShowAll = () => {
    const state = useContext(TimelineContext);

    if (state.intervalSelected.start === state.minYear &&
        state.intervalSelected.end === state.maxYear) {
        return null;
    }

    const onClick = () => {
        state.setIntervalSelected(new Interval(state.minYear, state.maxYear));
    };
    return (
        <Button
            variant='secondary'
            size='med'
            onClick={onClick}
        >
            Show All Documents
        </Button>
    );
};
