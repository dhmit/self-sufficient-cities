import React from "react";

let JsonData=[
    {
        "tract78": "All Classes"
    },
    {
        "tract78": "Total",
        "count": 12379
    },
    {
        "tract78": "White"
    },
    {
        "tract78": "Total",
        "count": 2598
    },
    {
        "tract78": "Native",
        "count": 2412
    },
    {
        "tract78": "Foreign born",
        "count": 186
    },
    {
        "tract78": "Nonwhite"
    },
    {
        "tract78": "Total",
        "count": 9781
    },
    {
        "tract78": "Black",
        "count": 9777
    },
    {
        "tract78": "Other races",
        "count": 4
    },
    {
        "tract78": "Percent of total"
    },
    {
        "tract78": "Native white",
        "count": 19.5
    },
    {
        "tract78": "Foreign born",
        "count": 1.5
    },
    {
        "tract78": "Nonwhite",
        "count": 79
    },
    {
        "tract78": "Occupied dwelling units",
        "count": 2629
    },
    {
        "tract78": "Population per occupied dwelling unit",
        "count": 4.63
    }
];


function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr key={info.count}>
                    <td>{info.tract78}</td>
                    <td>{info.count}</td>
                </tr>
            );
        }
    );
    return(
        <div>
            <table className="table formatting">
                <thead>
                    <tr>
                        <th>Tract 78</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    );
}
export default JsonDataDisplay;
