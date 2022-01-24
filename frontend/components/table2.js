import React from 'react';
// import JsonData from './data.json';

let JsonData= [
    {
        "tract78": "All classes"
    },
    {
        "tract78": "Total",
        "male": 6081,
        "female": 6298,
        "total": 12379
    },
    {
        "tract78": "Under 5",
        "male": 621,
        "female": 587,
        "total": 1208
    },
    {
        "tract78": "5 - 9",
        "male": 574,
        "female": 568,
        "total": 1142
    },
    {
        "tract78": "10 - 14",
        "male": 591,
        "female": 581,
        "total": 1172
    },
    {
        "tract78": "15 - 19",
        "male": 645,
        "female": 616,
        "total": 1261
    },
    {
        "tract78": "20 - 24",
        "male": 497,
        "female": 569,
        "total": 1066
    },
    {
        "tract78": "25 - 29",
        "male": 514,
        "female": 590,
        "total": 1104
    },
    {
        "tract78": "30 - 34",
        "male": 461,
        "female": 558,
        "total": 1019
    },
    {
        "tract78": "35 - 39",
        "male": 450,
        "female": 515,
        "total": 965
    },
    {
        "tract78": "40 - 44",
        "male": 430,
        "female": 413,
        "total": 843
    },
    {
        "tract78": "45 - 49",
        "male": 383,
        "female": 351,
        "total": 734
    },
    {
        "tract78": "50 - 54",
        "male": 268,
        "female": 284,
        "total": 552
    },
    {
        "tract78": "55 - 59",
        "male": 230,
        "female": 218,
        "total": 448
    },
    {
        "tract78": "60 - 64",
        "male": 178,
        "female": 168,
        "total": 346
    },
    {
        "tract78": "65 - 69",
        "male": 115,
        "female": 128,
        "total": 243
    },
    {
        "tract78": "70 - 74",
        "male": 65,
        "female": 68,
        "total": 133
    },
    {
        "tract78": "75 and over",
        "male": 59,
        "female": 84,
        "total": 143
    },
    {
        "tract78": "Under 1",
        "male": 119,
        "female": 132,
        "total": 251
    },
    {
        "tract78": 5,
        "male": 91,
        "female": 111,
        "total": 202
    },
    {
        "tract78": 14,
        "male": 125,
        "female": 119,
        "total": 244
    },
    {
        "tract78": 15,
        "male": 121,
        "female": 119,
        "total": 240
    },
    {
        "tract78": "16 and 17",
        "male": 283,
        "female": 249,
        "total": 532
    },
    {
        "tract78": "21 and over",
        "male": 3536,
        "female": 3823,
        "total": 7359
    },
    {
        "tract78": "Native White"
    },
    {
        "tract78": "Total",
        "male": 1233,
        "female": 1179
    },
    {
        "tract78": "Under 5",
        "male": 127,
        "female": 101
    },
    {
        "tract78": "5 - 9",
        "male": 83,
        "female": 104
    },
    {
        "tract78": "10 - 14",
        "male": 97,
        "female": 83
    },
    {
        "tract78": "15 - 19",
        "male": 146,
        "female": 108
    },
    {
        "tract78": "20 - 24",
        "male": 135,
        "female": 137
    },
    {
        "tract78": "25 - 29",
        "male": 147,
        "female": 132
    },
    {
        "tract78": "30 - 34",
        "male": 114,
        "female": 116
    },
    {
        "tract78": "35 - 39",
        "male": 72,
        "female": 73
    },
    {
        "tract78": "40 - 44",
        "male": 81,
        "female": 78
    },
    {
        "tract78": "45 - 49",
        "male": 74,
        "female": 74
    },
    {
        "tract78": "50 - 54",
        "male": 42,
        "female": 50
    },
    {
        "tract78": "55 - 59",
        "male": 39,
        "female": 37
    },
    {
        "tract78": "60 - 64",
        "male": 29,
        "female": 29
    },
    {
        "tract78": "65 - 69",
        "male": 23,
        "female": 27
    },
    {
        "tract78": "70 - 74",
        "male": 12,
        "female": 18
    },
    {
        "tract78": "75 and over",
        "male": 12,
        "female": 12
    },
    {
        "tract78": "Under 1",
        "male": 26,
        "female": 24
    },
    {
        "tract78": 5,
        "male": 12,
        "female": 22
    },
    {
        "tract78": 14,
        "male": 22,
        "female": 14
    },
    {
        "tract78": 15,
        "male": 34,
        "female": 13
    },
    {
        "tract78": "16 and 17",
        "male": 53,
        "female": 49
    },
    {
        "tract78": "21 and over",
        "male": 751,
        "female": 759
    },
    {
        "tract78": "Foreign-Born White"
    },
    {
        "tract78": "Total",
        "male": 101,
        "female": 85
    },
    {
        "tract78": "Under 5",
        "male": 0,
        "female": 1
    },
    {
        "tract78": "5 - 9",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "10 - 14",
        "male": 1,
        "female": 2
    },
    {
        "tract78": "15 - 19",
        "male": 4,
        "female": 0
    },
    {
        "tract78": "20 - 24",
        "male": 3,
        "female": 3
    },
    {
        "tract78": "25 - 29",
        "male": 6,
        "female": 9
    },
    {
        "tract78": "30 - 34",
        "male": 7,
        "female": 10
    },
    {
        "tract78": "35 - 39",
        "male": 12,
        "female": 14
    },
    {
        "tract78": "40 - 44",
        "male": 14,
        "female": 8
    },
    {
        "tract78": "45 - 49",
        "male": 17,
        "female": 10
    },
    {
        "tract78": "50 - 54",
        "male": 14,
        "female": 12
    },
    {
        "tract78": "55 - 59",
        "male": 6,
        "female": 3
    },
    {
        "tract78": "60 - 64",
        "male": 7,
        "female": 5
    },
    {
        "tract78": "65 - 69",
        "male": 4,
        "female": 4
    },
    {
        "tract78": "70 - 74",
        "male": 3,
        "female": 2
    },
    {
        "tract78": "75 and over",
        "male": 3,
        "female": 2
    },
    {
        "tract78": "Under 1",
        "male": 0,
        "female": 1
    },
    {
        "tract78": 5,
        "male": 0,
        "female": 0
    },
    {
        "tract78": 14,
        "male": 0,
        "female": 0
    },
    {
        "tract78": 15,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "16 and 17",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "21 and over",
        "male": 95,
        "female": 81
    },
    {
        "tract78": "Black"
    },
    {
        "tract78": "Total",
        "male": 4743,
        "female": 5034
    },
    {
        "tract78": "Under 5",
        "male": 494,
        "female": 485
    },
    {
        "tract78": "5 - 9",
        "male": 491,
        "female": 464
    },
    {
        "tract78": "10 - 14",
        "male": 493,
        "female": 496
    },
    {
        "tract78": "15 - 19",
        "male": 495,
        "female": 508
    },
    {
        "tract78": "20 - 24",
        "male": 359,
        "female": 429
    },
    {
        "tract78": "25 - 29",
        "male": 361,
        "female": 449
    },
    {
        "tract78": "30 - 34",
        "male": 339,
        "female": 432
    },
    {
        "tract78": "35 - 39",
        "male": 366,
        "female": 428
    },
    {
        "tract78": "40 - 44",
        "male": 335,
        "female": 327
    },
    {
        "tract78": "45 - 49",
        "male": 291,
        "female": 267
    },
    {
        "tract78": "50 - 54",
        "male": 212,
        "female": 222
    },
    {
        "tract78": "55 - 59",
        "male": 185,
        "female": 178
    },
    {
        "tract78": "60 - 64",
        "male": 142,
        "female": 134
    },
    {
        "tract78": "65 - 69",
        "male": 88,
        "female": 97
    },
    {
        "tract78": "70 - 74",
        "male": 49,
        "female": 48
    },
    {
        "tract78": "75 and over",
        "male": 43,
        "female": 70
    },
    {
        "tract78": "Under 1",
        "male": 93,
        "female": 107
    },
    {
        "tract78": 5,
        "male": 79,
        "female": 89
    },
    {
        "tract78": 14,
        "male": 103,
        "female": 105
    },
    {
        "tract78": 15,
        "male": 87,
        "female": 106
    },
    {
        "tract78": "16 and 17",
        "male": 230,
        "female": 200
    },
    {
        "tract78": "21 and over",
        "male": 2686,
        "female": 2983
    },
    {
        "tract78": "Other Races"
    },
    {
        "tract78": "Total",
        "male": 4,
        "female": 0
    },
    {
        "tract78": "Under 5",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "5 - 9",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "10 - 14",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "15 - 19",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "20 - 24",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "25 - 29",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "30 - 34",
        "male": 1,
        "female": 0
    },
    {
        "tract78": "35 - 39",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "40 - 44",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "45 - 49",
        "male": 1,
        "female": 0
    },
    {
        "tract78": "50 - 54",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "55 - 59",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "60 - 64",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "65 - 69",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "70 - 74",
        "male": 1,
        "female": 0
    },
    {
        "tract78": "75 and over",
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Under 1",
        "male": 0,
        "female": 0
    },
    {
        "tract78": 5,
        "male": 0,
        "female": 0
    },
    {
        "tract78": 14,
        "male": 0,
        "female": 0
    },
    {
        "tract78": 15,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "16 and 17",
        "male": 0,
        "female": 0
    },
    {
        "tract78": "21 and over",
        "male": 4,
        "female": 0
    }
];


 function Table2(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr key={info.count}>
                    <td>{info.tract78}</td>
                    <td>{info.male}</td>
                    <td>
                        {info.female}
                    </td>
                    <td> {info.total}</td>
                </tr>
            );
        }
    );

    return(
        <div>
            <table className="table formatting">
                <thead>
                    <tr>
                    <th>tract 78</th>
                    <th>Male</th>
                    <th>Female </th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    );
 }

 export default Table2;
