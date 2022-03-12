import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const getColor = () => `rgba(${(Math.random()/3 +.6)*255}, ${(Math.random()/3 +.6)*255}, 200, 0.7)`;

export default class CensusCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    extra: [
                        "Median number of persons\t3.6"
                    ],
                    labels: ["1 person", "2 persons", "3 persons", "4 persons", "5 and 6 persons",
                        "7 persons or more"],
                    datasets: [
                        {
                            label: "NUMBER OF PERSONS IN DWELLING UNIT",
                            data: [292, 1516, 1348, 1236, 1471, 811],
                            backgroundColor: getColor()
                        }
                    ]
                },
                {
                    extra: [
                        "Renter occupied units reporting\t3629",
                        "Median rent in dollars\t50.16"
                    ],
                    labels: [
                        "Less than $10",
                        "$10 to $14",
                        "$15 to $19",
                        "$20 to $29",
                        "$30 to $39",
                        "$40 to $49",
                        "$50 to $74",
                        "$75 or more"],
                    datasets: [
                        {
                            label: "CONTRACT MONTHLY RENT",
                            data: [2, 28, 71, 211, 423, 1041, 1657, 196],
                            backgroundColor: getColor()
                        }
                    ]
                },
                {
                    extra: [
                        "Owner-occupied units reporting *	2643",
                        "Median value in dollars\t10607"
                    ],
                    labels: ["Less than $2000",
                        "$2000 to $2999",
                        "$3000 to $3999",
                        "$4000 to $4999",
                        "$5000 to $9999",
                        "$10000 to $14999",
                        "$15000 or more"],
                    datasets: [
                        {
                            label: "VALUE OF ONE-DWELLING-UNIT STRUCTURES",
                            data: [
                                24,
                                11,
                                43,
                                62,
                                1034,
                                1123,
                                346],
                            backgroundColor: getColor()
                        }
                    ]
                },
                {
                    extra: [],
                    labels: [
                        "Total",
                        "Single",
                        "Married",
                        "Widowed/Divorced"],
                    datasets: [
                        {
                            label: "Marital Status Male 14y/o & over",
                            data: [
                                8777,
                                1990,
                                6343,
                                444],
                            backgroundColor: getColor()
                        },
                        {
                            label: "Marital Status Female 14 y/o & over",
                            data: [
                                10354,
                                2054,
                                6913,
                                1387],
                            backgroundColor: getColor()
                        }
                    ]
                },
                {
                    extra: ["Persons 25 y/o and older\t\t14810",
                        "Median school years completed\t\t10.4"],
                    labels: [
                        "No school years completed",
                        "Elementary\t1-4 years",
                        "Elementary\t5 and 6 years",
                        "Elementary\t7 years",
                        "Elementary\t8 years",
                        "High school\t1 to 3 years",
                        "High school\t1 to 3 years",
                        "College\t1 to 3 years",
                        "College\t4 years",
                        "School years not reported"],
                    datasets: [
                        {
                            label: "Years of school completed",
                            data: [
                                200,
                                1205,
                                1510,
                                1310,
                                1585,
                                1935,
                                3020,
                                1525,
                                1120,
                                400],
                            backgroundColor: getColor()
                        }
                    ]
                }
            ],
            bars: true
        };
    }

    toggleCharts() {
        this.setState({...this.state, bars: !this.state.bars});
    }

    render() {
        return (<>
            <h1>Census Data - Tract 78 - 1950</h1>
            <button onClick={() => this.toggleCharts()}>
                {
                    this.state.bars ? "View Pie Charts" : "View Bar Charts"
                }
            </button>
            <div className={"bar-charts"}>

                {this.state.data.map((each,i) => this.state.bars ? <BarChart data={each} key={i}/>
                    : <PieChart data={each} key={i}/>)}
            </div>
        </>);
    }
}
