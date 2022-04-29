import React, {useState} from "react";
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
    });
    const [description, setDescription] = useState("");

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

            setDescription("What is Lorem Ipsum?\n" +
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                " Lorem Ipsum has been the industry's standard dummy text " +
                "ever since the 1500s, when an unknown printer" +
                " took a galley of type and scrambled it to make a type specimen book. " +
                "It has survived not only five centuries, " +
                "but also the leap into electronic typesetting, remaining essentially unchanged. " +
                "It was popularised in the 1960s with the release of " +
                "Letraset sheets containing Lorem Ipsum passages, and more recently with" +
                " desktop publishing software like Aldus PageMaker including " +
                "versions of Lorem Ipsum.");
            setData({
                ...data, datasets: [
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
            setDescription("The number of people who have asthma in a region " +
                "can be associated with air\n" +
                "quality in that respective region, whereby " +
                "the more the people with asthma in a \n" +
                "region then the poor the air quality in that region " +
                "because asthma and asthma \n" +
                "attacks are associated with secondhand smoke, " +
                "traffic pollution and poor housing \n" +
                "conditions among other factors thus from the above data, " +
                "it can be inferred that \n" +
                "Deanwood’s air quality may be low than the the " +
                "D.C average air quality and even \n" +
                "that of Ward 3 since Deanwood has  greater percentage of adults with current \n" +
                "asthma.  \n");
            setData({
                ...data,
                datasets: [
                    {
                        label: "Ward 7",
                        data: [54, 78, 89, 64, 35, 13, 85, 75, 80],
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)"
                    },
                    {
                        label: "Ward 3",
                        data: [54, 67, 89, 66, 69, 13, 45, 67, 90],
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)"
                    }
                ]
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
            setDescription("We will use the Canvas website for announcements, " +
                "class material, problem sets, and for\n" +
                "the course calendar.\n" +
                "Use Piazza to ask questions about course material or logistics—your Piazza " +
                "posts may be\n either public (visible to everyone, and signed with your name)," +
                " public but anonymous\n (visible to everyone, but only staff can see your" +
                " name), or private (only staff can see your\n" +
                "post and name");
            setData({
                ...data,
                datasets: [
                    {
                        label: "Ward 7",
                        data: [54, 78, 89, 64, 35, 13, 85, 75, 80],
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)"
                    },
                    {
                        label: "Ward 3",
                        data: [54, 67, 89, 66, 69, 13, 45, 67, 90],
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)"
                    }
                ]
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
            setDescription("Access to Early Prenatal Care is " +
                "among the factors that indicate the quality of \n" +
                "healthcare services and ease of access to such services " +
                "in different areas and \n" +
                "from the above data,It can be inferred that Deanwood(Ward 7) has yet to have a\n" +
                " satisfiable percentage of women who received early prenatal " +
                "care in the recent \n" +
                "years, the percentage of women with such access in Ward 7, is way below the \n" +
                "average of the whole District of Columbia whereas, Areas such as Ward 3 are \n" +
                "way above the average, and since these two areas are dominated by opposite \n" +
                "races, such a trend keeps solidifying the existence of underlying issues \n" +
                "concerning racial inequity in healthcare\n" +
                "\n");
            setData({
                ...data,
                datasets: [
                    {
                        label: "Ward 7",
                        data: [54, 78, 89, 64, 35, 13, 85, 75, 80],
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)"
                    },
                    {
                        label: "Ward 3",
                        data: [54, 67, 89, 66, 69, 13, 45, 67, 90],
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)"
                    }
                ]
            });
            break;
        case "lead_poisoning":
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
            setDescription(" In the beginning of the pandemic, " +
                "the number of people who were" +
                " affected\n" +
                "was comparable between Ward 3 and Ward 7, but as time progressed,it \n" +
                "has been observed that the number of people affected by COVID-19 on a \n" +
                "monthly basis in Ward 7 (Deanwood) is greater than that of Ward 3 and \n" +
                "this may be due to different reasons such as poor health policies and \n" +
                "actions that were adopted to mitigate the effects of COVID-19 or failure to \n" +
                "abide by such policies by residents in that area among other reasons but \n" +
                "overall, such differences reflect the differences present in the healthcare \n" +
                "system in those two areas.\n");
            setData({
                ...data,
                datasets: [
                    {
                        label: "Ward 7",
                        data: [54, 78, 89, 64, 35, 13, 85, 75, 80],
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)"
                    },
                    {
                        label: "Ward 3",
                        data: [54, 67, 89, 66, 69, 13, 45, 67, 90],
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)"
                    }
                ]
            });
            break;
        default:
            console.log("Please choose valid choice");
            break;
        }
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option disabled>Choices</option>
                <option value="obesity">Obesity</option>
                <option value="healthcare">Access to Healthcare</option>
                <option value="air_quality">Air Quality</option>
                <option value="diabetes">Diabetes</option>
                <option value="lead_poisoning">Lead Poisoning</option>
            </select>
            <Line options={options} data={data}/>
            <p>{description}</p>
        </div>
    );
}
