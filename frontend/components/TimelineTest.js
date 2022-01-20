import React, {useState} from "react";
import DocumentModal from "./DocumentModal.js";

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
