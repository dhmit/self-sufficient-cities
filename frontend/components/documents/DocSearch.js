import React, {useContext, useState} from "react";
import {MDBModal, MDBModalHeader, MDBModalBody, MDBInput} from "mdbreact";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {TimelineContext} from "../../contexts/TimelineContext";

export const DocSearch = ({documents}) => {
    const state = useContext(TimelineContext);

    const titles = [];
    const titles_to_docs = {};

    for (let doc of documents) {
        titles.push(doc.publication + ", " + doc.date);
    }

    for (let doc of documents) {
        titles_to_docs[doc.publication + ", " + doc.date] = doc;
    }

    let [dataSet] = useState(titles);
    let [filteredSet, setFilteredSet] = useState(titles);
    let [searchValue, setSearchValue] = useState("");
    let [modalOpen, setModalOpen] = useState(false);


    const toggleModal = () => {
        setModalOpen(!modalOpen);
        console.log(documents);
    };

    const searchForDoc = () => {
        setSearchValue(event.target.value);
        setFilteredSet(dataSet.filter(item => item.toLowerCase().match(searchValue.toLowerCase())));
    };


    const searchClick = (item) => {
        return function () {
            state.setDocumentModal(titles_to_docs[item]);
        };
    };

    return (
        <div>
            <Button
                variant='secondary'
                size='med'
                onClick={toggleModal}
            >
            Search Documents
            </Button>

            <MDBModal
                isOpen={modalOpen}
                toggle={toggleModal}
                backdrop={false}
                size="lg"
            >
                <MDBModalHeader
                    toggle={toggleModal}
                >
                    Search for Documents
                </MDBModalHeader>

                <MDBModalBody>
                    <MDBInput
                        value={searchValue}
                        onChange={searchForDoc}
                        hint="Search"
                        type="text"
                        containerClass="mt-0"
                    />

                    <ListGroup>
                        {
                            filteredSet.map(item => (
                                <ListGroupItem
                                    action onClick={searchClick(item)}
                                    key={item}
                                >
                                    {item}
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </MDBModalBody>

            </MDBModal>
        </div>

    );
};

DocSearch.propTypes = {
    documents: PropTypes.array
};
