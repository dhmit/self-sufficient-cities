import React from "react";
import Select from "react-select";
import {Button, Form} from "react-bootstrap";

export default class Filter extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedChoice: [],
      searchValue: ""
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
            return " " + choice.value;
        });
    }

    handleSearch = () => {
        console.log("Search " + this.state.searchValue + " within" + this.displaySelected(this.state.selectedChoice));
    }

    render() {
        console.table(this.state.selectedChoice);

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
                                placeholder={"Search for" + this.displaySelected(this.state.selectedChoice)}
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
                </div>
            </div>
        );
    }
}



