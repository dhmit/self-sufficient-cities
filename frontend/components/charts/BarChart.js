import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {Bar} from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                }
            }
        };

        this.state = {
            data: props.data,
            options
        };
    }

    render() {
        return (<>
            <div className="bar-chart">
                <Bar options={this.state.options} data={this.state.data} />
                <ul>
                    {this.state.data.extra.map((each,i) => <li key={i}>{each}</li>)}
                </ul>

            </div>
        </>);
    }
}

BarChart.propTypes = {
    data: PropTypes.object
};
