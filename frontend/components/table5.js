import React from "react";

let JsonData= [
    {
        "occupancy": "Owner Occupied"
    },
    {
        "occupancy": "White",
        "tract78": 380
    },
    {
        "occupancy": "Nonwhite",
        "tract78": 1183
    },
    {
        "occupancy": "Black",
        "tract78": 1183
    },
    {
        "occupancy": "Other nonwhite",
        "tract78": 0
    },
    {
        "occupancy": "Total",
        "tract78": 1563
    },
    {
        "occupancy": "Tenant occupied"
    },
    {
        "occupancy": "White",
        "tract78": 277
    },
    {
        "occupancy": "Nonwhite",
        "tract78": 836
    },
    {
        "occupancy": "Black",
        "tract78": 834
    },
    {
        "occupancy": "Other nonwhite",
        "tract78": 2
    },
    {
        "occupancy": "Total",
        "tract78": 1113
    },
    {
        "occupancy": "Vacant"
    },
    {
        "occupancy": "For sale or rent",
        "tract78": 181
    },
    {
        "occupancy": "Not for sale or rent",
        "tract78": 3
    },
    {
        "occupancy": "% of all Occupied Units"
    },
    {
        "occupancy": "Owner occupied",
        "tract78": 58.4
    },
    {
        "occupancy": "Occupied by nonwhite",
        "tract78": 75.4
    },
    {
        "occupancy": "Total Dwelling Units",
        "tract78": 2860
    }
];

function Table5(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr key={info.count}>
                    <td>{info.occupancy}</td>
                    <td>{info.tract78}</td>
                </tr>
            );
        }
    );
    return(
        <div>
            <table className="table formatting">
                <thead>
                    <tr>
                        <th>Occupancy</th>
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
export default Table5;
