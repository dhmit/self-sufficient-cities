import React from "react";
import {Popover, OverlayTrigger, Button} from "react-bootstrap";

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Key</Popover.Header>
        <Popover.Body>
            <span>
            City = blah
            </span>
            <span>
            Store = blah
            </span>
            <span>
            Farm = blah
            </span>
        </Popover.Body>
    </Popover>
);
  
const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Key</Button>
    </OverlayTrigger>
);


const MapKey = () => {
    return(
        <Example />
    );
};

export default MapKey;