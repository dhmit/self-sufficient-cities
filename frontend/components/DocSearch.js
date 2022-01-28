import React, {useState} from "react";
import {MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {Button} from "react-bootstrap";
import * as PropTypes from "prop-types";

export const DocSearch = ({documents}) => {
    const titles = [];
    for (let doc of documents) {
        titles.push(doc.publication + " " + doc.date);
    }

    let [dataSet, setDataSet] = useState(titles);
    let [filteredSet, setFilteredSet] = useState(titles);
    let [searchValue, setSearchValue] = useState("");
    let [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        console.log(modalOpen);
    };

    const searchForDoc = () => {
        setSearchValue(event.target.value);
        setFilteredSet(dataSet.filter(item => item.toLowerCase().match(searchValue.toLowerCase())));
    };

    const searchClick = () => {
        console.log("Hello");
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
                side-position="top-right"
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
                        hint="Search for document"
                        type="text"
                        containerClass="mt-0"
                    />

                    <MDBListGroup>
                      {
                        filteredSet.map(item => (
                          <MDBListGroupItem
                              key={item}>{item}
                          </MDBListGroupItem>
                        ))
                      }
                    </MDBListGroup>
                </MDBModalBody>

            </MDBModal>
        </div>

    );
};

DocSearch.propTypes = {
    documents: PropTypes.array
};
