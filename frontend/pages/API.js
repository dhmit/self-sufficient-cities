import React from "react";

export default class Map extends React.Component {

    render() {
        return <div id="API">
            <h1>API</h1>
            <ul>
                <li>
                    <a href={"/api/create_person"}><b>POST</b>: Create Person</a>
                </li>
                <li>
                    <a href={"/api/create_event"}><b>POST</b>: Create Event</a>
                </li>
                <li>
                    <a href={"/api/create_location"}><b>POST</b>: Create Location</a>
                </li>
                <li>
                    <a href={"/api/get_people"}><b>GET</b>: Get People</a>
                </li>
                <li>
                    <a href={"/api/get_events"}><b>GET</b>: Get Events</a>
                </li>
                <li>
                    <a href={"/api/get_people_from_event/2"}><b>GET</b>: Get People From Event</a>
                </li>
                <li>
                    <a href={"/api/get_locations_from_event/2"}>
                        <b>GET</b>: Get Locations From Event</a>
                </li>
                <li>
                    <a href={"/api/update_people_for_event/2"}><b>PUT</b>: Update People For
                        Event</a>
                </li>
                <li>
                    <a href={"/api/update_locations_for_event/2"}><b>PUT</b>: Update Locations For
                        Event</a>
                </li>
            </ul>
        </div>;
    }
}
