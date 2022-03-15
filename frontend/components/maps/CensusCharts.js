import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const getColor = () => `rgba(${(Math.random()/3 +.6)*255}, ${(Math.random()/3 +.6)*255}, 200, 0.7)`;

export default class CensusCharts extends React.Component {
    constructor(props) {
        super(props);

        let data1950 = [
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
        ];

        let data1940 = [
            {
                extra: [],
                labels: [
                    "1 person",
                    "2 persons",
                    "3 persons",
                    "4 persons",
                    "5 persons",
                    "6 persons",
                    "7 persons",
                    "8 persons",
                    "9 persons",
                    "10 persons",
                    "11 persons or more"
                ],
                datasets: [
                    {
                        label: "NUMBER OF PERSONS IN DWELLING UNIT",
                        data: [
                            68,
                            340,
                            365,
                            315,
                            256,
                            212,
                            154,
                            104,
                            79,
                            56,
                            70
                        ],
                        backgroundColor: getColor()
                    }
                ]
            },
            {
                extra: [],
                labels: [
                    "Under $5",
                    "$5 to $6",
                    "$7 to $9",
                    "$10 to $14",
                    "$15 to $19",
                    "$20 to $24",
                    "$25 to $29",
                    "$30 to $39",
                    "$40 to $49",
                    "$50 to $59",
                    "$60 to $74",
                    "$75 to $99",
                    "$100 and over"
                ],
                datasets: [
                    {
                        label: "CONTRACT MONTHLY RENT",
                        data: [
                            2,
                            2,
                            15,
                            44,
                            119,
                            165,
                            196,
                            193,
                            72,
                            20,
                            3,
                            0,
                            0],
                        backgroundColor: getColor()
                    }
                ]
            }
        ];

        this.state = {
            year: 1940,
            bars: true,
            data1950,
            data1940
        };
    }

    toggleData() {
        if (this.state.year === 1950){
            this.setState({...this.state, year: 1940});
        }

        if (this.state.year === 1940){
            this.setState({...this.state, year: 1950});
        }


    }

    toggleCharts() {
        this.setState({...this.state, bars: !this.state.bars});
    }

    render() {

        let data = this.state.year === 1940 ? this.state.data1940 : this.state.data1950;
        return (<>
            <h1>Census Data - Tract 78 - {this.state.year}</h1>
            <button onClick={() => this.toggleCharts()}>
                {
                    this.state.bars ? "View Pie Charts" : "View Bar Charts"
                }
            </button>
            <button onClick={() => this.toggleData()}>
                Switch to {
                    this.state.year === 1950 ? "1940" : "1950"
                }
            </button>
            <div className={"bar-charts"}>
                {
                    data.map((each,i) => this.state.bars
                        ? <BarChart data={each} key={i + this.state.year}/>
                        : <PieChart data={each} key={i + this.state.year}/>)
                }

            </div>
        </>);
    }
}
