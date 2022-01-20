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
        setDocument({articles: [{title: "Title 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae maximus mi. Praesent vehicula, dui et dapibus cursus, dolor elit consequat nibh, eget fringilla nisi lacus id arcu. Curabitur mattis facilisis nulla, sit amet tincidunt nulla egestas sit amet. Suspendisse accumsan, massa non rutrum egestas, nunc quam elementum arcu, et convallis quam odio non lorem. Proin sed elit arcu. Phasellus aliquam laoreet tortor, ac vehicula risus iaculis non. Nullam dui dui, tempus sit amet pharetra non, tempus ut ipsum. Duis ut hendrerit tortor. Pellentesque pharetra, justo et iaculis ultricies, neque quam bibendum urna, eu pretium ligula dui vitae nisl. Nam sodales augue lectus, a scelerisque enim elementum vehicula. Sed semper libero lorem, eleifend finibus elit vehicula eu. Vivamus in turpis mollis, faucibus nunc non, porta ex. Suspendisse ac sapien id tortor facilisis tempus non vitae purus. Nulla hendrerit pharetra sem. Morbi vitae ex sit amet eros pellentesque mollis.\n" +
                    "\n" +
                    "Maecenas nisi lectus, tempor et dignissim ornare, viverra vitae urna. Pellentesque semper interdum nulla non tempus. Quisque in ante nisi. Morbi non convallis metus. Donec scelerisque lectus nisi, et eleifend mauris mattis id. Donec tempor massa non augue volutpat facilisis. Fusce lectus lacus, imperdiet sit amet ex sodales, interdum laoreet dolor. Nullam aliquam auctor velit eu mollis. Nulla sagittis consectetur nisl, ac mattis elit interdum et. Integer laoreet sollicitudin odio, id eleifend mi ornare sollicitudin. Nam id augue turpis. Vestibulum a erat id elit volutpat eleifend quis ac leo. Morbi malesuada quam eros, ac tempor odio volutpat in. Donec viverra arcu ipsum, sit amet elementum quam maximus et.\n" +
                    "\n" +
                    "Donec cursus sagittis felis quis commodo. Curabitur rutrum est at consequat tincidunt. Mauris placerat sit amet nibh non mollis. Cras rhoncus congue ipsum non egestas. Ut sagittis ligula id commodo efficitur. In in odio in sem aliquet ultricies. Fusce eleifend diam sit amet ex fringilla semper.\n" +
                    "\n" +
                    "Nam aliquam ut justo id commodo. Praesent sit amet magna condimentum, dictum dui in, congue enim. Pellentesque suscipit pretium congue. Mauris sed commodo sem, feugiat sollicitudin nunc. Nunc est elit, fermentum id vehicula eu, tempus eget nisl. Duis ac iaculis augue. Curabitur sit amet feugiat urna, et euismod magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies ac libero at fermentum. Aliquam eget nunc et nunc pharetra malesuada at blandit sem. Aenean scelerisque nibh sed ultricies fringilla. In scelerisque euismod purus, et ornare risus rhoncus a. Mauris hendrerit eleifend aliquet.\n" +
                    "\n" +
                    "Quisque malesuada nulla a justo accumsan iaculis. Nulla non erat at lacus aliquam euismod vel eget diam. Etiam volutpat erat in lacus pellentesque, vel condimentum lorem bibendum. Aliquam erat volutpat. Pellentesque tempor ornare libero ut vulputate. Fusce viverra, dolor a porta cursus, eros urna cursus massa, in congue elit ante eu lacus. Nullam nec pharetra risus. Etiam posuere diam rutrum, pellentesque erat id, tempor magna. Integer quis elit eget dui eleifend consequat. Vivamus ac quam eu neque rhoncus varius. Pellentesque faucibus nulla eleifend, mattis sapien sed, rutrum quam. Duis augue augue, finibus vel blandit a, dapibus nec diam. Maecenas tristique viverra ligula, suscipit porttitor ante dictum elementum. Nunc sed nibh pharetra, vulputate dolor fringilla, vehicula massa. Phasellus a vulputate metus.\n" +
                    "\n" +
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt blandit ante, nec porta nunc aliquam condimentum. In iaculis arcu a elit vestibulum elementum vestibulum in quam. Donec iaculis condimentum molestie. Donec at lacus feugiat orci rhoncus cursus. Sed efficitur pharetra magna ut tempus. Morbi imperdiet orci arcu, non vehicula turpis scelerisque a. Aenean in risus lobortis, semper mi nec, laoreet ipsum. Quisque fermentum neque at neque pulvinar semper. Quisque et ultricies metus. Nulla fermentum augue in tempus congue.\n" +
                    "\n"}, {title: "Title 2", text: "Sample 2"}], title:"Test"});
        // load in document data from the backend
    }, []);


    return (
        <Modal show={modalShow} onHide={toggleHide} fullscreen={true}>
            <Modal.Header className="text-center" closeButton>
                <Modal.Title className="w-100">{document ? document.title : ""}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {document === null
                    ? <div>Loading document...</div>
                    : <div className="row h-100">
                        <div className="col-6" style={{height: "inherit"}}>
                            <ArticleCarousel articles={document.articles}
                                setArticle={setActiveArticle}/>
                        </div>
                        <div className="col-6" style={{height: "inherit"}}>
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
