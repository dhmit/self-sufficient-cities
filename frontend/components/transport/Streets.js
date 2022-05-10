import React, {useState} from "react";
import MapMarkers from "../maps/MapMarkers";
import PropTypes from "prop-types";
import {Col, Image} from "react-bootstrap";

export const Streets = ({position, places}) => {
    const coordinates = places.map(p => {
        return p.coordinates;
    });

    const fixTitle = (name) => {
        return name.replaceAll("_", " ").toUpperCase();
    };
    const [image, setImage] = useState(places[0].image);
    const [title, setTitle] = useState(fixTitle(places[0].name));
    const [selected, setSelected] = useState(coordinates[0]);
    const selectMarker = (obj) => {
        let place = places.find(p => {
            if (p.coordinates[0] === obj.latlng.lat && p.coordinates[1] === obj.latlng.lng) {
                return p;
            }
        });
        setSelected(place.coordinates);
        setImage(place.image);
        setTitle(fixTitle(place.name));
    };


    return (<>
        <div className="carousel">
            <div className="p-lg-3 p-sm-2 container">
                <div className="p-0 row">
                    <Col lg={6} md={4} sm={3} className="p-0">
                        <h5 className="tab-header">
                            {title}
                        </h5>
                        <MapMarkers position={position}
                                    selectMarker={selectMarker}
                                    zoom={14}
                                    markers={coordinates}
                                    selected={selected}/>
                    </Col>
                    <Col lg={6} md={8} sm={9} className="pl-2 mt-lg-4 mt-sm-5">
                        <Image src={image} fluid={true}/>
                    </Col>
                </div>
            </div>
        </div>
    </>);
};

Streets.propTypes = {
    position: PropTypes.array,
    places: PropTypes.object
};


export default Streets;
