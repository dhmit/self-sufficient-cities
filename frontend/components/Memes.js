import React from "react";
import {postRequest} from "../common";


export default class Map extends React.Component {
    state = {
        text: "",
        image: ""
    }

    handleChange = (evt) => {
        let value = evt.target.value;
        this.setState({text: value});
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        postRequest("/generate/", {text: this.state.text})
            .then((res) => {
                this.setState({image: res.data.image});
            });
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Enter your text here:&nbsp;
                    <input type="text" onChange={this.handleChange}/>
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
