import React from "react";
import {postRequest} from "../common";


export default class Map extends React.Component {
    state = {
        text: "",
        image: ""
    }

    changeInputText = (evt) => {
        let value = evt.target.value;
        this.setState({text: value});
    };

    submitForm = (evt) => {
        evt.preventDefault();
        // Call "/generate/" URL here.
        // What else do we want to send along, and what does postRequest expect?
        postRequest("/generate/", {text: this.state.text})
            .then((res) => {
                this.setState({image: res.data.image});
            });
    };

    render() {
        return <div>
            <form onSubmit={this.submitForm}>
                <label>Enter your text here:&nbsp;
                    <input type="text" onChange={this.changeInputText}/>
                </label>&nbsp;
                <input type="submit" value={"Submit"}/>
            </form>
            <br/>
            {this.state.image
                ? <img src={`data:image/png;base64,${this.state.image}`}/>
                : <p>No meme</p>
            }
        </div>;
    }
}
