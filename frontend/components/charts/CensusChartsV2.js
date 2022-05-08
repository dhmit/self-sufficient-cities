import React from "react";
import housing from "./data/housing";
import BarChart from "./BarChart";

const getColor = () => `rgba(${(Math.random() / 3 + .6) * 255}, ${(Math.random() / 3 + .6) * 255}, 200, 0.7)`;

export default class CensusCharts extends React.Component {
    constructor(props) {
        super(props);


        let housingValue = [];
        let key = "value";
        let name = "Housing Value";
        for (let year in housing[key]) {
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
        for (let year in housing[key]) {
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
        for (let year in housing[key]) {
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

        return (<div className="housing-charts">
            <h1>Census data for tract 78 (includes Deanwood)</h1>
            <div>
                <h2>Number of People per Household</h2>
                {
                    this.state.people.map((each, i) =>
                        <BarChart data={each} key={i + "people"}/>)
                }
                <a className={"citation-pointer"} title={"U.S. Census Data"} href={"#source-8"}>
                    U.S. Census Data [8]
                </a>
                <p>
                    Starting in the early 20th century the Great Migration saw six million
                    African Americans move into northern and western cities. One such popular
                    destination was Washington DC. During this time the population of DC
                    increased and especially the African American population. About 57,000
                    Black people moved into the District of Columbia between 1950-1960. Many
                    African Americans lived in alley houses which were small dwellings that
                    were made in the back alleys of DC. In the 1930s, alley houses in
                    neighborhoods that became predominantly white were cleaned for “urban
                    sanitation.” One suspicion is that the goal of this process was to remove
                    African Americans from previously integrated neighborhoods. As African
                    American residents were forced to move, one of their only options was to
                    relocate to Deanwood.
                    <br/>
                    <br/>
                    The number of acres of land that African Americans lived on in DC stayed
                    the same while the population of African Americans increased. We see above
                    that Tract 78 saw the median number of people in a household rise from 3
                    to between 5 and 7 in 1950, but then shifted back to 2 people in 1960.
                    However, in 1960 density rose again, and there are significantly more
                    than 5+ people per household, more than ever before.
                </p>
            </div>

            <div>
                <h2>Contract Rent</h2>
                {
                    this.state.rent.map((each, i) =>
                        <BarChart data={each} key={i + "rent"}/>)
                }
                <a className={"citation-pointer"} title={"U.S. Census Data"} href={"#source-8"}>
                    U.S. Census Data [8]
                </a>
                <p>
                    As the population of African Americans increased while the available acres
                    and housing stayed the same, prices went up. Tract 78 faced a higher
                    demand for housing with the same amount of supply increasing rent costs.
                    In 1940 the median rent was $30-$39. 1950 saw a bimodal distribution
                    where the rents of $40-49 and $60-74 were the most popular rents. This
                    could suggest two different lifestyles in Deanwood during this time period
                    where one side of Deanwood responded quickly to population growth by
                    increasing rent while the other side of Deanwood remained relatively
                    similar to the previous decade in terms of rent. In the 1960s the median
                    rent was $70-79 dollars. This was much higher than in previous decades,
                    possibly from the greater density of people in households which at the
                    time the majority of households had 4+ people.

                </p>
            </div>

            <div>
                <h2>Housing Values</h2>
                {
                    this.state.housingValue.map((each, i) =>
                        <BarChart data={each} key={i + "housing"}/>)
                }
                <a className={"citation-pointer"} title={"U.S. Census Data"} href={"#source-8"}>
                    U.S. Census Data [8]
                </a>
                <h2>Average Housing Values</h2>
                <BarChart data={this.state.average}/>
                <a className={"citation-pointer"} title={"U.S. Census Data"} href={"#source-8"}>
                    U.S. Census Data [8]
                </a>
                <p>
                    Median Housing Value in 1940 was $4k-5k. Median Housing Value in 1950 was
                    $10k-15k. Median Housing Value in 1960 was $10k-12.5k. The median household
                    value stayed about the same but there were a lot more houses above the
                    median.
                    <br/>
                    <br/>
                    In 1960, a study of “Negro Housing in DC” found that African American
                    populations could afford to buy houses with their incomes, but they
                    weren’t allowed to buy in the suburbs, which had most of the new housing
                    but were only White buyers could get loans. Meanwhile, the crowding
                    problem only got worse. This reinforces the fact that economic
                    disadvantage is one factor contributing to Washington's housing patterns,
                    but it is not the major factor responsible for these patterns.
                    <br/>
                    <br/>
                    Through careful analysis of the context of DC during these time periods,
                    we see that the movement of African American populations to DC most likely
                    caused the government of DC to relocate African Americans from the city of
                    DC into Deanwood which was racially motivated. This overpopulated Deanwood
                    with both rich and poor African Americans in low-quality housing. This
                    overpopulation led to a decreased supply of housing which led to a
                    decreased quality of life, increased rent prices, and increased housing
                    prices that negatively impacted the entire Deanwood population and African
                    American population of DC for decades to come.
                </p>
            </div>
        </div>);
    }
}
