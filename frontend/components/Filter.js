import React from "react";
import Select from "react-select";
import {Button, Form} from "react-bootstrap";
import DocumentShowcase from "./DocumentShowcase";
import ShowcaseItem from "./ShowcaseItem";
import FilterDisplayDocs from "./FilterDisplayDocs";

export default class Filter extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedChoice: [],
      searchValue: "",
      filteredDocs: {documents: []},
      searchDone: false
    };
    }
    handleInputChange = (letter) => {
        this.setState({searchValue: letter.target.value});
    }

    handleTagChange = (selectedChoice) => {
        this.setState({selectedChoice: selectedChoice});
    };

    displaySelected(selectedChoice) {
        return selectedChoice.map(choice => {
            return choice.value;
        });
    }

    handleSearch = () => {
        let searchQuery;
        let newSearchValue = "";

        for (let char of this.state.searchValue) {
            if (char !== " ") {
                newSearchValue += char;
            }
            else {
                newSearchValue += "%20";
            }
        };

        if (this.state.selectedChoice.length === 1) {
            searchQuery = "/api/documents/?" + this.displaySelected(this.state.selectedChoice) + "=" + newSearchValue;

        }

        console.log(searchQuery);

        fetch(searchQuery)
            .then(response => response.json())
            .then(data => this.setState({filteredDocs: data}))
            .then(() => console.log(this.state.filteredDocs));

        this.setState({searchDone: true});
    };

    handleClear = () => {
        this.setState({searchDone: false});
    };

    render() {
        const documents = this.state.filteredDocs.documents;
        if (documents.length !== 0) {
            console.log(documents[0].publication);
        };

        const tags = [
            { value: 'people', label: 'People'},
            { value: 'places', label: 'Places'},
            { value: 'dates', label: 'Dates'},
            { value: 'events', label: 'Events'},
        ];

        const layoutStyle = {
            display: "flex",
            align: "center"
        };

        return (
            <div>
                Select a tag:
                <div style = {layoutStyle}>
                    <div style={{width: '415px'}}>
                        <Select
                            options={tags}
                            isMulti
                            value={this.state.selectedChoice}
                            onChange={this.handleTagChange}
                        />
                    </div>
                    <>&nbsp;</> <>&nbsp;</>
                    <div style={{width: '500px'}}>
                        <Form>
                            <Form.Control
                                type="document"
                                placeholder={"Search for " + this.displaySelected(this.state.selectedChoice)}
                                value={this.state.searchValue}
                                onChange={this.handleInputChange}
                            />
                        </Form>
                    </div>
                    <>&nbsp;</> <>&nbsp;</>
                    <Button
                        onClick = {this.handleSearch}
                    >
                        Search
                    </Button>
                    <>&nbsp;</> <>&nbsp;</>
                    {this.state.searchDone === true
                        ? <Button
                            variant="danger"
                            onClick = {this.handleClear}
                        >
                            Reset
                        </Button> : null
                    }
                </div>
                <br>
                </br>
                {documents.length !== 0 && this.state.searchDone === true ? <FilterDisplayDocs documents={documents}/> : null}
                {this.state.searchDone === true && documents.length === 0
                ? <p className="empty-message"> No documents found </p> : null}
            </div>
        );
    }
}



