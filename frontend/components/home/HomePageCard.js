import React from "react";
import * as PropTypes from "prop-types";
import {Col, Image} from "react-bootstrap";

import CityTag from "./CityTag";

const HomePageCard = ({img_source, title, text, resources, extra_class}) => {

    return (
        <Col>
            <div className={`city-card pb-4 ${extra_class}`}>
                <h3>{title}</h3>
                <Image src={img_source} fluid/>
                <p>{text}</p>
                <div className="city-tags city-links">
                    {resources.map(resource => {
                        return <CityTag resource={resource} key={resource}/>;
                    })}
                </div>
            </div>
        </Col>
    );
};

HomePageCard.propTypes = {
    img_source: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    resources: PropTypes.array,
    extra_class: PropTypes.string
};

export default HomePageCard;
