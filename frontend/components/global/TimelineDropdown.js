import React, {useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

const SORT_TYPES = {
    CHRONOLOGICALLY: "Chronologically",
    MOST_RECENT: "Most Recent"
};

export function TimelineDropdown() {
    const [sortType, setSortType] = useState(SORT_TYPES.CHRONOLOGICALLY);

    function sortChronologically() {
        setSortType(SORT_TYPES.CHRONOLOGICALLY);
    }

    function sortMostRecent() {
        setSortType(SORT_TYPES.MOST_RECENT);
    }

    return (
        <DropdownButton title={"Sort: " + sortType} variant="secondary" size="sm">
            <Dropdown.Item
                onSelect={sortChronologically}>{SORT_TYPES.CHRONOLOGICALLY}
            </Dropdown.Item>
            <Dropdown.Item
                onSelect={sortMostRecent}>{SORT_TYPES.MOST_RECENT}
            </Dropdown.Item>
        </DropdownButton>
    );
}