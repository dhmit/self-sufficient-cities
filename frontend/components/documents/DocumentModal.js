import React, {useContext, useState} from "react";
import * as PropTypes from "prop-types";
import ArticleCarousel from "../timeline/ArticleCarousel";
import DocumentDisplay from "./DocumentDisplay";
import {Modal} from "react-bootstrap";
import {TimelineContext} from "../../contexts/TimelineContext";

/**
 * Main component for displaying document data in a fullscreen modal
 * @param document the document to display
 */
const DocumentModal = ({document}) => {
    const state = useContext(TimelineContext);
    const [activeArticle, setActiveArticle] = useState(null);
    const onHide = () => {
        state.setDocumentModal({});
    };

    return (
        <Modal show={true} onHide={onHide} fullscreen={true}>
            <Modal.Header className="text-center" closeButton>
                <Modal.Title className="w-100">
                    <h1>{document ? document.publication : ""}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {document === null
                    ? <div>Loading document...</div>
                    : <div className="row h-100">
                        <div className="col-6 col-height article-carousel">
                            <ArticleCarousel articles={document.articles}
                                setArticle={setActiveArticle}/>
                        </div>
                        <div className="col-6 text-center col-height">
                            <DocumentDisplay document={document} activeArticle={activeArticle} />
                        </div>
                    </div>}
            </Modal.Body>
        </Modal>
    );
};

DocumentModal.propTypes = {
    document: PropTypes.object
};

export default DocumentModal;
