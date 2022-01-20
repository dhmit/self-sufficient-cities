import React, {useState} from "react";
import DocumentModal from "./DocumentModal.js";

/**
 * Sample Timeline Test page to display/show how to use DocumentModal
 */
const TimelineTest = () => {
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <button className="btn btn-primary" onClick={() => setModalShow(true)}>
                Show Modal
            </button>
            <DocumentModal id={2} modalShow={modalShow} toggleHide={() => setModalShow(false)}/>
        </div>
    );
};

export default TimelineTest;
