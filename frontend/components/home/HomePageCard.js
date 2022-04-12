import React from "react";
import * as PropTypes from "prop-types";
import {Col, Image} from "react-bootstrap";

import CityTag from "./CityTag";

const HomePageCard = ({img_source, title, text, resources}) => {

    const sorted_tags = [...resources];
    sorted_tags.sort();
    return (
        <Col>
            <div className='city-card'>
                <h3>{title}</h3>
                <Image src={img_source} fluid/>
                <p>{text}</p>
                <div className='city-tags'>
                    {sorted_tags.map(resource => {
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
    resources: PropTypes.array
};

export default HomePageCard;
