import React from "react";
import housing from "./data/housing";
import BarChart from "./BarChart";

const getColor = () => `rgba(${(Math.random()/3 +.6)*255}, ${(Math.random()/3 +.6)*255}, 200, 0.7)`;

export default class CensusCharts extends React.Component {
    constructor(props) {
        super(props);


        let data = [];
        for(let key in housing["value"]) {
            let bars = {
                extra: [],
                labels: housing["value"][key].map(each => each.name),
                datasets: [
                    {
                        label: "Housing Value " + key,
                        data: housing["value"][key].map(each => each.value),
                        backgroundColor: getColor()
                    }
                ]
            };
            data.push(bars);
        }

        let average = {
            extra: [],
            labels: housing["medianValue"].map(each => each.name),
            datasets: [
                {
                    label: "Average Housing Value",
                    data: housing["medianValue"].map(each => each.value),
                    backgroundColor: getColor()
                }
            ]
        };

        let people = [];
        let k = "people";
        let name = "Number of people per household";
        for(let key in housing[k]) {
            let bars = {
                extra: [],
                labels: housing[k][key].map(each => each.name),
                datasets: [
                    {
                        label: name + " " + key,
                        data: housing[k][key].map(each => each.value),
                        backgroundColor: getColor()
                    }
                ]
            };
            people.push(bars);
        }

        this.state = {
            data,
            average,
            people
        };
    }

    render() {

        return (<>
            <h1>Census Data - Tract 78</h1>
            {
                this.state.data.map((each,i) =>
                    <BarChart data={each} key={i + this.state.year}/>)
            }
            <BarChart data={this.state.average} />
            {
                this.state.people.map((each,i) =>
                    <BarChart data={each} key={i + this.state.year}/>)
            }
        </>);
    }
}

