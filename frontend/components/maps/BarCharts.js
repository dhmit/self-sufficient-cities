import React from "react";
import BarChart from "./BarChart";

const getColor = () => `rgba(${(Math.random()/2 +.5)*255}, 99, 132, 0.5)`;

export default class BarCharts extends React.Component {
    constructor(props) {
        super(props);

        const labels1 = ["1 person", "2 persons", "3 persons", "4 persons", "5 and 6 persons",
            "7 persons or more"];

        const data1 = {
            extra: [
                "Median number of persons\t3.6"
            ],
            labels: labels1,
            datasets: [
                {
                    label: "NUMBER OF PERSONS IN DWELLING UNIT",
                    data: [292, 1516, 1348, 1236, 1471, 811],
                    backgroundColor: getColor()
                }
            ]
        };

        const labels2 = [
            "Less than $10",
            "$10 to $14",
            "$15 to $19",
            "$20 to $29",
            "$30 to $39",
            "$40 to $49",
            "$50 to $74",
            "$75 or more"];

        const data2 = {
            extra: [
                "Renter occupied units reporting\t3629",
                "Median rent in dollars\t50.16"
            ],
            labels: labels2,
            datasets: [
                {
                    label: "CONTRACT MONTHLY RENT",
                    data: [2, 28, 71, 211, 423, 1041, 1657, 196],
                    backgroundColor: getColor()
                }
            ]
        };

        const labels3 = ["Less than $2000",
            "$2000 to $2999",
            "$3000 to $3999",
            "$4000 to $4999",
            "$5000 to $9999",
            "$10000 to $14999",
            "$15000 or more"];

        const data3 = {
            extra: [
                "Owner-occupied units reporting *	2643",
                "Median value in dollars\t10607"
            ],
            labels: labels3,
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
        };

        this.state = {
            data: [
                data1,
                data2,
                data3
            ]
        };
    }

    render() {
        return (<>
            <div>
                {this.state.data.map((each,i) => <BarChart data={each} key={i}/>)}
            </div>
        </>);
    }
}
