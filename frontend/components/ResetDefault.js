import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {Interval, TimelineContext} from "../contexts/TimelineContext";

export const ResetDefault = () => {
    const state = useContext(TimelineContext);
    const defaultInterval = new Interval(1910, 1915);

    if (state.intervalSelected.start === 1910 && state.intervalSelected.end === 1915) {
        return null;
    }

    const onClick = () => {
        state.setIntervalSelected(defaultInterval);
    };
    return (
        <Button
            variant='secondary'
            size='med'
            onClick={onClick}
        >
            Reset to Default
        </Button>
    );
};
