import React, {useState, useEffect} from "react";
import * as PropTypes from "prop-types";
import ArticleCarousel from "./ArticleCarousel";
import DocumentDisplay from "./DocumentDisplay";
import {Modal} from "react-bootstrap";
import STYLES from "./DocumentModal.module.scss";

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
        setDocument({articles: [{title: "Article Title 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae maximus mi. Praesent vehicula, dui et dapibus cursus, dolor elit consequat nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis nulla, sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, massa non rutrum egestas, nunc quam elementum arcu, et convallis quam odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet pharetra non, tempus ut ipsum. Duis ut hendrerit tortor. Pellentesque pharetra, justo et iaculis ultricies, neque quam bibendum urna, eu pretium ligula dui vitae nisl. Nam sodales augue lectus, a scelerisque enim elementum vehicula. Sed semper libero lorem, eleifend finibus elit vehicula eu. Vivamus in turpis mollis, faucibus nunc non, porta ex. Suspendisse ac sapien id tortor facilisis tempus non vitae purus. Nulla hendrerit pharetra sem. Morbi vitae ex sit amet eros pellentesque mollis.\n" +
                    "\n" +
                    "Maecenas nisi lectus, tempor et dignissim ornare, viverra vitae urna. Pellentesque semper interdum nulla non tempus. Quisque in ante nisi. Morbi non convallis metus. Donec scelerisque lectus nisi, et eleifend mauris mattis id. Donec tempor massa non augue volutpat facilisis. Fusce lectus lacus, imperdiet sit amet ex sodales, interdum laoreet dolor. Nullam aliquam auctor velit eu mollis. Nulla sagittis consectetur nisl, ac mattis elit interdum et. Integer laoreet sollicitudin odio, id eleifend mi ornare sollicitudin. Nam id augue turpis. Vestibulum a erat id elit volutpat eleifend quis ac leo. Morbi malesuada quam eros, ac tempor odio volutpat in. Donec viverra arcu ipsum, sit amet elementum quam maximus et.\n" +
                    "\n" +
                    "Donec cursus sagittis felis quis commodo. Curabitur rutrum est at consequat tincidunt. Mauris placerat sit amet nibh non mollis. Cras rhoncus congue ipsum non egestas. Ut sagittis ligula id commodo efficitur. In in odio in sem aliquet ultricies. Fusce eleifend diam sit amet ex fringilla semper.\n" +
                    "\n"}, {title: "Article Title 2", text: "Sample 2"}], title:"Document Title"});
        //TODO: load in document data from the backend using document id or get document data
        // from main timeline
    }, []);


    return (
        <Modal show={modalShow} onHide={toggleHide} fullscreen={true}>
            <Modal.Header className="text-center" closeButton>
                <Modal.Title className="w-100"><h1>{document ? document.title : ""}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {document === null
                    ? <div>Loading document...</div>
                    : <div className="row h-100">
                        <div className={`col-6 ${STYLES.colHeight}`}>
                            <ArticleCarousel articles={document.articles}
                                setArticle={setActiveArticle}/>
                        </div>
                        <div className={`col-6 text-center ${STYLES.colHeight}`}>
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
