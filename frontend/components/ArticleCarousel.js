import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {Carousel} from "react-bootstrap";
import TEST_BACKGROUND from "../images/test.jpg";


/**
 * Displays the articles in the document in carousel-style.
 *
 * @param articles list of articles being displayed
 * @param setArticle the current article being shown
 */
const ArticleCarousel = ({articles, setArticle}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {
                articles.map((article, i) => (
                    <Carousel.Item key={i}>
                        <img src={TEST_BACKGROUND}/>
                        <Carousel.Caption>
                            <h1>{article.title}</h1>
                            <p>{article.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

ArticleCarousel.propTypes = {
    articles: PropTypes.array,
    setArticle: PropTypes.func
};

export default ArticleCarousel;
