import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import {Pie} from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default class PieChart extends React.Component {
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
            <div className="pie-chart">
                <div className="pie">
                    <Pie options={this.state.options} data={this.state.data} />
                </div>

                <ul>
                    {this.state.data.extra.map((each,i) => <li key={i}>{each}</li>)}
                </ul>

            </div>
        </>);
    }
}

PieChart.propTypes = {
    data: PropTypes.object
};
