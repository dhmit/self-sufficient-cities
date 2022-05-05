import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {chart_data, info,labels} from "../../contexts/health";

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


// const labels = ["2000","2009-2013","2010-2014","2011-2015","2018"];


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
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Age",
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
                text: "Life Expectancy at Birth",
                font: {
                    size: 25
                }
            }
        }
    });

    const [data, setData] = useState({
        labels: labels.life_expectancy,
        datasets: chart_data.life_expectancy
    });

    const [description, setDescription] = useState(info.life_expectancy);

    const handleChange = (e) => {
        switch (e.target.value) {
            case "life_expectancy":
                setOptions({

                    scales:  {
                        ...options.scales,
                        y: {
                        display: true,
                        title: {
                            display: true,
                            text: "Age",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Life Expectancy at Birth"
                        }
                    }
                });

                setDescription(info.life_expectancy);
                setData({
                    ...data, datasets: chart_data.life_expectancy,
                    labels: labels.life_expectancy
                });
                break;
            case "air_quality":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Concentration(ppb)",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Concentration of Ozone Levels"
                        }
                    }
                });
                setDescription(info.air_quality);
                setData({
                    ...data, datasets: chart_data.air_quality,
                    labels: labels.air_quality
                });
                break;
            case "obesity":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "% of adults who were obese",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Prevalence of Obesity Among Adults"
                        }
                    }
                });
                setDescription(info.obesity);
                setData({
                    ...data,
                    datasets: chart_data.obesity,
                    labels: labels.obesity
                });
                break;
            case "heart_diseases":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Rate per 100,000 Population(Total)",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Crude mortality rate due to Heart Diseases"
                        }
                    }
                });
                setDescription(info.heart_diseases);
                setData({
                    ...data,
                    datasets: chart_data.heart_diseases,
                     abels: labels.heart_diseases
                });
                break;
            case "diabetes":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Rate per 100,000 Population(Total)",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Crude Mortality Rate due to Diabetes"
                        }
                    }
                });
                setDescription(info.diabetes);
                setData({
                    ...data,
                    datasets: chart_data.diabetes,
                    labels: labels.diabetes
                });
                break;
                case "lead_poisoning":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "% of screened children with blood lead levels≥ 5µg/dL",
                            font: {
                                size: 12,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Cases of Lead Poisoning Among Children under 6 years of Age"
                        }
                    }
                });
                setDescription(info.lead_poisoning);
                setData({
                    ...data,
                    datasets: chart_data.lead_poisoning,
                     labels: labels.lead_poisoning
                });
                break;
                case "cancer":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Rate per 100,000 Population(Total)",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Crude Mortality Rate due to Cancer"
                        }
                    }
                });
                setDescription(info.cancer);
                setData({
                    ...data,
                    datasets: chart_data.cancer,
                     labels: labels.cancer
                });
                break;
                case "hiv":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Rate per 100,000 Population(Total)",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Crude Mortality Rate due to HIV/AIDS"
                        }
                    }
                });
                setDescription(info.hiv);
                setData({
                    ...data,
                    datasets: chart_data.hiv,
                     labels: labels.hiv
                });
                break;
                case "mortality":
                setOptions({
                    scales: {
                        ...options.scales,
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Rate per 100,000 Population(Total)",
                            font: {
                                size: 16,
                                weight: "bold"
                            }
                        }
                    }
                    },
                    plugins: {
                        ...options.plugins,
                        title: {
                            ...options.plugins.title,
                            text: "Crude Mortality Rate"
                        }
                    }
                });
                setDescription(info.mortality);
                setData({
                    ...data,
                    datasets: chart_data.mortality,
                     labels: labels.mortality
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
                <option value="life_expectancy">Life Expectancy</option>
                <option value="air_quality">Air Quality</option>
                <option value="obesity">Obesity</option>
                <option value="heart_diseases">Heart Diseases</option>
                <option value="diabetes">Diabetes</option>
                <option value="lead_poisoning">Lead Poisoning</option>
                <option value="cancer">Cancer</option>
                <option value="hiv">HIV/AIDS</option>
                <option value="mortality">Mortality Rate</option>
            </select>
            <Line options={options} data={data}/>
            <p className={"description"}>{description}</p>
        </Container>
    );
}
