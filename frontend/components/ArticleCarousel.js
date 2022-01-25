import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {Carousel} from "react-bootstrap";

/**
 * Displays the articles in the document in carousel-style.
 *
 * @param articles list of articles being displayed
 * @param setArticle the current article being shown (for future add-on that has the document
 * image zoom in to displayed article)
 */
const ArticleCarousel = ({articles, setArticle}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        setArticle(selectedIndex);
    };

    return(
        <Carousel variant="dark" activeIndex={index}
            onSelect={handleSelect} interval={null}>
            {
                articles.map((article, i) => (
                    <Carousel.Item key={i}>
                        <h3 className="text-center">{article.title}</h3>
                        <p className="overflow-scroll article-height p-2">{article.text}</p>
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
