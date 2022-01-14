import React, {useState} from "react";
import * as PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";

/**
 * Displays the articles in the document in carousel-style.
 *
 * @param articles list of articles being displayed
 * @param setArticle the current article being shown
 */
const ArticleCarousel = ({articles, setArticle}) => {

    return(
        <Carousel>
        </Carousel>
    );
};

ArticleCarousel.propTypes = {
    id: PropTypes.number,
};

export default ArticleCarousel;
