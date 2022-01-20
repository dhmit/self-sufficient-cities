import React, {useState, useEffect} from "react";
import * as PropTypes from "prop-types";
import ArticleCarousel from "./ArticleCarousel";
import DocumentDisplay from "./DocumentDisplay";
import {Modal} from "react-bootstrap";

/**
 * Main component for displaying document data in a fullscreen modal
 * @param id the id of the document to display
 * @param modalShow the state of the modal (true for show and false for hide)
 * @param toggleModal a function to close the modal
 */
const DocumentModal = ({id, modalShow, toggleHide}) => {
    const [document, setDocument] = useState(null);
    const [activeArticle, setActiveArticle] = useState(null);

    useEffect(() => {
        setDocument({articles: [{title: "Title 1", text: "Sample 1"}, {title: "Title 2", text: "Sample 2"}], title:"Test"});
        // load in document data from the backend
    }, []);


    return (
        <Modal show={modalShow} onHide={toggleHide} fullscreen={true}>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                {document === null
                    ? <div>Loading document...</div>
                    : <div className="row">
                        <div className="col-6">
                            <ArticleCarousel articles={document.articles}
                                setArticle={setActiveArticle}/>
                        </div>
                        <div className="col-6">
                            <DocumentDisplay document={document} activeArticle={activeArticle} />
                        </div>
                    </div>}
            </Modal.Body>
        </Modal>
    );
};

DocumentModal.propTypes = {
    id: PropTypes.number,
    modalShow: PropTypes.bool,
    toggleHide: PropTypes.func
};

export default DocumentModal;
