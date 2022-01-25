import React from "react";

let JsonData = [
    {
        "subject": "VALUE OF HOME"
    },
    {
        "subject": "All owner-occupied units",
        "tract78": 1183
    },
    {
        "subject": "Number reporting value",
        "tract78": 1152
    },
    {
        "subject": "Under $500",
        "tract78": 1
    },
    {
        "subject": "$500 to $699",
        "tract78": " -"
    },
    {
        "subject": "$700 to $999",
        "tract78": 6
    },
    {
        "subject": "$1,000 to $1,499",
        "tract78": 30
    },
    {
        "subject": "$1,500 to $1,999",
        "tract78": 53
    },
    {
        "subject": "$2,000 to $2,499",
        "tract78": 77
    },
    {
        "subject": "$2,500 to $2,999",
        "tract78": 88
    },
    {
        "subject": "$3,000 to $3,999",
        "tract78": 286
    },
    {
        "subject": "$4,000 to $4,999",
        "tract78": 245
    },
    {
        "subject": "$5,000 to $5,999",
        "tract78": 133
    },
    {
        "subject": "$6,000 to $7,499",
        "tract78": 155
    },
    {
        "subject": "$7,500 to $9,999",
        "tract78": 62
    },
    {
        "subject": "$10,000 and over",
        "tract78": 16
    },
    {
        "subject": "Not reporting value",
        "tract78": 31
    },
    {
        "subject": "Total value (thousands of dollars)",
        "tract78": 4913
    },
    {
        "subject": "Average value (dollars)",
        "tract78": 4264
    },
    {
        "subject": "Median value (dollars)",
        "tract78": 4143
    },
    {
        "subject": "CONTRACT MONTHLY RENT"
    },
    {
        "subject": "All tenant-occupied units",
        "tract78": 836
    },
    {
        "subject": "Number reporting contract rent",
        "tract78": 831
    },
    {
        "subject": "Under $5",
        "tract78": 2
    },
    {
        "subject": "$5 to $6",
        "tract78": 2
    },
    {
        "subject": "$7 to $9",
        "tract78": 15
    },
    {
        "subject": "$10 to $14",
        "tract78": 44
    },
    {
        "subject": "$15 to $19",
        "tract78": 119
    },
    {
        "subject": "$20 to $24",
        "tract78": 165
    },
    {
        "subject": "$25 to $29",
        "tract78": 196
    },
    {
        "subject": "$30 to $39",
        "tract78": 193
    },
    {
        "subject": "$40 to $49",
        "tract78": 72
    },
    {
        "subject": "$50 to $59",
        "tract78": 20
    },
    {
        "subject": "$60 to $74",
        "tract78": 3
    },
    {
        "subject": "$75 to $99",
        "tract78": " -"
    },
    {
        "subject": "$100 and over",
        "tract78": " -"
    },
    {
        "subject": "Not reporting monthly rent",
        "tract78": 5
    },
    {
        "subject": "Total monthly rent (dollars)",
        "tract78": 22014
    },
    {
        "subject": " Average monthly rent (dollars)",
        "tract78": "26.49"
    },
    {
        "subject": "Median monthly rent (dollars)",
        "tract78": 26.25
    },
    {
        "subject": "NUMBER OF PERSONS IN HOUSEHOLD"
    },
    {
        "subject": "All occupied units",
        "tract78": 2019
    },
    {
        "subject": "1 person",
        "tract78": 68
    },
    {
        "subject": "2 persons",
        "tract78": 340
    },
    {
        "subject": "3 persons",
        "tract78": 365
    },
    {
        "subject": "4 persons",
        "tract78": 315
    },
    {
        "subject": "5 persons",
        "tract78": 256
    },
    {
        "subject": "6 persons",
        "tract78": 212
    },
    {
        "subject": "7 persons",
        "tract78": 154
    },
    {
        "subject": "8 persons",
        "tract78": 104
    },
    {
        "subject": "9 persons",
        "tract78": 79
    },
    {
        "subject": "10 persons",
        "tract78": 56
    },
    {
        "subject": "11 persons or more",
        "tract78": 70
    },
    {
        "subject": "Median number of persons"
    },
    {
        "subject": "All occupied units",
        "tract78": 4.25
    },
    {
        "subject": "Owner-occupied units",
        "tract78": 3.82
    },
    {
        "subject": "Tenant-occupied units",
        "tract78": 5.06
    },
    {
        "subject": "PERSONS PER ROOM"
    },
    {
        "subject": "All occupied units",
        "tract78": 2019
    },
    {
        "subject": "0.50 or less",
        "tract78": 504
    },
    {
        "subject": "0.51 to 0.75",
        "tract78": 372
    },
    {
        "subject": "0.76 to 1.00",
        "tract78": 519
    },
    {
        "subject": "1.01 to 1.50",
        "tract78": 356
    },
    {
        "subject": "1.51 to 2.00",
        "tract78": 190
    },
    {
        "subject": "2.01 or more",
        "tract78": 66
    },
    {
        "subject": "Not reporting persons per room",
        "tract78": 12
    },
    {
        "subject": "Tenant-occupied units",
        "tract78": 836
    },
    {
        "subject": "0.50 or less",
        "tract78": 103
    },
    {
        "subject": "0.51 to 0.75",
        "tract78": 131
    },
    {
        "subject": "0.76 to 1.00",
        "tract78": 220
    },
    {
        "subject": "1.01 to 1.50",
        "tract78": 192
    },
    {
        "subject": "1.51 to 2.00",
        "tract78": 130
    },
    {
        "subject": "2.01 or more",
        "tract78": 54
    },
    {
        "subject": "Not reporting persons per room",
        "tract78": 6
    },
    {
        "subject": "STATE OF REPAIR AND PLUMBING"
    },
    {
        "subject": "All occupied units",
        "tract78": 2019
    },
    {
        "subject": "Not needing major repair",
        "tract78": 1699
    },
    {
        "subject": "With private bath and priv. flush toilet",
        "tract78": 1353
    },
    {
        "subject": "With private flush toilet, no priv. bath",
        "tract78": 67
    },
    {
        "subject": "With running water, no priv. flush toilet",
        "tract78": 138
    },
    {
        "subject": "No running water in dwelling unit",
        "tract78": 141
    },
    {
        "subject": "Needing major repairs",
        "tract78": 223
    },
    {
        "subject": "With private bath and priv. flush toilet",
        "tract78": 92
    },
    {
        "subject": "With private flush toilet, no priv. bath",
        "tract78": 33
    },
    {
        "subject": "With running water, no priv. flush toilet",
        "tract78": 28
    },
    {
        "subject": "No running water in dwelling unit",
        "tract78": 70
    },
    {
        "subject": "Not reporting repair or plumbing",
        "tract78": 97
    }
];

function Table7() {
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr key={info.count}>
                    <td>{info.subject}</td>
                    <td>{info.tract78}</td>
                </tr>
            );
        }
    );
    return (
        <div>
            <table className="table formatting">
                <thead>
                <tr>
                    <th>Subject</th>
                    <th>Tract 78</th>
                </tr>
                </thead>
                <tbody>


                {DisplayData}

                </tbody>
            </table>

        </div>
    );
}

export default Table7;
