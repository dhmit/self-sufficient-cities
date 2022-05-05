import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {Line} from "react-chartjs-2";
// import '../../scss/chart.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Years",
                font: {
                    size: 16,
                    weight: "bold"
                }
            }
        }
    },
    plugins: {
        legend: {
            position: "right",
            title: {
                align: "center",
                display: true,
                text: "Wards"

            }
        },
        title: {
            align: "center",
            display: true,
            text: "Life Expectancy",
            font: {
                size: 40
            }
        }
    }
};

const labels = ["1940-1950", "1950-1960", "1960-1970", "1970-1980", "1980-1990", "1990-2000", "2000-2010", "2010-2020", "2022"];

export const data = {
    labels,
    datasets: [
        {
            label: "Ward 7",
            data: [54, 67, 89, 66, 69, 13, 45, 67, 90],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Ward 3",
            data: [66, 69, 13, 45, 67, 90, 54, 67, 89],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ]
};

export default function Lifeexpectancy() {
    return <Line options={options} data={data}/>;
}

