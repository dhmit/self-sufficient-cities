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
        // sample document
        setDocument({articles: [{title: "Article Title 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae maximus" +
                "Praesent vehicula, dui et dapibus cursus, dolor elit consequat" +
                " nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis" +
                ", sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, " +
                "massa non rutrum egestas, nunc quam elementum arcu, et convallis quam " +
                "odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, " +
                "ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae "+
                "Praesent vehicula, dui et dapibus cursus, dolor elit consequat" +
                " nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis" +
                ", sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, " +
                "massa non rutrum egestas, nunc quam elementum arcu, et convallis quam " +
                "odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, " +
                "ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet" +
                "Praesent vehicula, dui et dapibus cursus, dolor elit consequat" +
                " nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis" +
                ", sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, " +
                "massa non rutrum egestas, nunc quam elementum arcu, et convallis quam " +
                "odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, " +
                "ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae "+
                "Praesent vehicula, dui et dapibus cursus, dolor elit consequat" +
                " nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis" +
                ", sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, " +
                "massa non rutrum egestas, nunc quam elementum arcu, et convallis quam " +
                "odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, " +
                "ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet" +
                "Praesent vehicula, dui et dapibus cursus, dolor elit consequat" +
                " nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis" +
                ", sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, " +
                "massa non rutrum egestas, nunc quam elementum arcu, et convallis quam " +
                "odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, " +
                "ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae "+
                "Praesent vehicula, dui et dapibus cursus, dolor elit consequat" +
                " nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis" +
                ", sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, " +
                "massa non rutrum egestas, nunc quam elementum arcu, et convallis quam " +
                "odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, " +
                "ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet"},
        {title: "Article Title 2", text: "Sample 2"}], title:"Document Title", id:id});
        //TODO: load in document data from the backend using document id or get document data
        // from main timeline
    }, []);


    return (
        <Modal show={modalShow} onHide={toggleHide} fullscreen={true}>
            <Modal.Header className="text-center" closeButton>
                <Modal.Title className="w-100">
                    <h1>{document ? document.title : ""}</h1>
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
    id: PropTypes.number,
    modalShow: PropTypes.bool,
    toggleHide: PropTypes.func
};

export default DocumentModal;
