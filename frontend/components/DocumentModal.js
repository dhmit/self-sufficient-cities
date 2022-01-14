import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";
import { ArticleCarousel, DocumentDisplay } from ".";
import { Modal } from "react-bootstrap";

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
        // load in document data from the backend
    }, []);

    if (!document) {
        return <div>Loading document...</div>
    }
    return (
        <Modal show={modalShow} onHide={toggleHide}>
            <Modal.Body>
                <div className="row">
                    <div className="col">
                        <ArticleCarousel articles={document.articles} setArticle={setActiveArticle}/>
                    </div>
                    <div className="col">
                        <DocumentDisplay document={document} activeArticle={activeArticle} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

DocumentModal.propTypes = {
    id: PropTypes.number,
    modalShow: PropTypes.bool,
    toggleHide: PropTypes.func,
};

export default DocumentModal;
