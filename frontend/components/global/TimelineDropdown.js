import React, {useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

const SORT_TYPES = {
    CHRONOLOGICAL: "Chronological",
    REVERSE_CHRONOLOGICAL: "Reverse Chronological"
};

export function TimelineDropdown() {
    const [sortType, setSortType] = useState(SORT_TYPES.CHRONOLOGICAL);

    function sortChronologically() {
        setSortType(SORT_TYPES.CHRONOLOGICAL);
    }

    function sortReverse() {
        setSortType(SORT_TYPES.REVERSE_CHRONOLOGICAL);
    }

    return (
        <DropdownButton title={"Sort: " + sortType} variant="secondary" size="sm">
            <Dropdown.Item
                onSelect={sortChronologically}>{SORT_TYPES.CHRONOLOGICAL}
            </Dropdown.Item>
            <Dropdown.Item
                onSelect={sortReverse}>{SORT_TYPES.REVERSE_CHRONOLOGICAL}
            </Dropdown.Item>
        </DropdownButton>
    );
}
