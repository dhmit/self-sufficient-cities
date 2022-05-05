import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {chart_data, info} from "../../contexts/health";

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const labels = ["1940-1950", "1950-1960", "1960-1970",
    "1970-1980", "1980-1990", "1990-2000", "2000-2010", "2010-2020", "2022"];


export default function HealthTrends() {
    const [options, setOptions] = useState({
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
                text: "Obesity Levels",
                font: {
                    size: 40
                }
            }
        }
    });

    const [data, setData] = useState({
        labels,
        datasets: chart_data.obesity
    });

    const [description, setDescription] = useState(info.obesity);

    const handleChange = (e) => {
        switch (e.target.value) {
            case "obesity":
                setOptions({
                    ...options,
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Obesity Levels"
                        }
                    }
                });

                setDescription(info.obesity);
                setData({
                    ...data, datasets: chart_data.obesity
                });
                break;
            case "healthcare":
                setOptions({
                    ...options,
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Access to Healthcare"
                        }
                    }
                });
                setDescription(info.healthcare);
                setData({
                    ...data, datasets: chart_data.healthcare
                });
                break;
            case "air_quality":
                setOptions({
                    ...options,
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Air quality"
                        }
                    }
                });
                setDescription(info.airquality);
                setData({
                    ...data,
                    datasets: chart_data.airquality
                });
                break;
            case "diabetes":
                setOptions({
                    ...options,
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Diabetes"
                        }
                    }
                });
                setDescription(info.diabetes);
                setData({
                    ...data,
                    datasets: chart_data.diabetes
                });
                break;
            case "lead_poisoning":
                setOptions({
                    ...options,
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Lead Poisoning"
                        }
                    }
                });
                setDescription(info.leadpoisoning);
                setData({
                    ...data,
                    datasets: chart_data.leadpoisoning
                });
                break;
            default:
                break;
        }
    };

    return (
        <Container>
            <select onChange={handleChange} className={"box"}>
                <option disabled className="d-none">Choices</option>
                <option value="obesity">Obesity</option>
                <option value="healthcare">Access to Healthcare</option>
                <option value="air_quality">Air Quality</option>
                <option value="diabetes">Diabetes</option>
                <option value="lead_poisoning">Lead Poisoning</option>
            </select>
            <Line options={options} data={data}/>
            <p className={"description"}>{description}</p>
        </Container>
    );
}
