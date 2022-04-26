import React from "react";
import housing from "./data/housing";
import BarChart from "./BarChart";

const getColor = () => `rgba(${(Math.random()/3 +.6)*255}, ${(Math.random()/3 +.6)*255}, 200, 0.7)`;

export default class CensusCharts extends React.Component {
    constructor(props) {
        super(props);


        let housingValue = [];
        let key = "value";
        let name = "Housing Value";
        for(let year in housing[key]) {
            let bars = {
                extra: [],
                labels: housing[key][year].map(each => each.name),
                datasets: [
                    {
                        label: name + " " + year,
                        data: housing[key][year].map(each => each.value),
                        backgroundColor: getColor()
                    }
                ]
            };
            housingValue.push(bars);
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
        key = "people";
        name = "Number of people per household";
        for(let year in housing[key]) {
            let bars = {
                extra: [],
                labels: housing[key][year].map(each => each.name),
                datasets: [
                    {
                        label: name + " " + year,
                        data: housing[key][year].map(each => each.value),
                        backgroundColor: getColor()
                    }
                ]
            };
            people.push(bars);
        }

        let rent = [];
        key = "rent";
        name = "Contract Rent";
        for(let year in housing[key]) {
            let bars = {
                extra: [],
                labels: housing[key][year].map(each => each.name),
                datasets: [
                    {
                        label: name + " " + year,
                        data: housing[key][year].map(each => each.value),
                        backgroundColor: getColor()
                    }
                ]
            };
            rent.push(bars);
        }

        this.state = {
            housingValue,
            average,
            people,
            rent
        };
    }

    render() {

        return (<>
            <h1>Census Data - Tract 78</h1>

            <div>
                <div>
                    <h2>Number of People per Household</h2>
                    {
                        this.state.people.map((each,i) =>
                            <BarChart data={each} key={i +"people"}/>)
                    }
                    <p>
                        This change from 1940 to 1960 shows that ...


                        Population increases in DC.

                        Number of acres for African American populations stays the same.

                        People crowd into Deanwood and go to the suburbs.

                        Alley houses were cleaned for urban sanitation and they were forced to move
                        to Deanwood.

                        African American populations could afford it but they arent allowed to buy
                        in the suburbs.

                        About 57,000 represented the net inmigration of nonwhites to the
                        District of Columbia during the decade 1950-60.

                        " still sufficient to give many nonwhite families the economic capacity to
                        afford housing in many areas of the District of Columbia."

                        Economic disadvantage is one factor contributing to
                        Washington's housing patterns. But it is not the major
                        factor responsible for these patterns.
                    </p>
                </div>

                <div>
                    <h2>Contract Rent</h2>
                    {
                        this.state.rent.map((each,i) =>
                            <BarChart data={each} key={i +"rent"}/>)
                    }
                    <p>
                        This change from 1940 to 1960 shows that ...

                    </p>
                </div>

                <div>
                    <h2>Housing Values</h2>
                    {
                        this.state.housingValue.map((each,i) =>
                            <BarChart data={each} key={i +"housing"}/>)
                    }
                    <h2>Average Housing Values</h2>
                    <BarChart data={this.state.average} />
                    <p>
                        This change from 1940 to 1960 shows that ...
                        A good number of African American people had the money to buy a nice
                        house in the suburbs but they could only live in Deanwood.
                    </p>
                </div>
            </div>
        </>);
    }
}

