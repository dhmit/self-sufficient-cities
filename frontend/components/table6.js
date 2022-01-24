import React from "react";

const Table6 = () => {
    return (
        <>
            <body>
                <input type = "button" onClick={CreateTableFromJSON()} value="Create Table From JSON" />
                <p className="ShowData"/>
            </body>
            <script>
                 function CreateTableFromJSON(){
                    var data6=[
                        {
                            "subject": "VALUE OF HOME"
                        },
                        {
                            "subject": "All owner-occupied units",
                            "tract78": 1563
                        },
                        {
                            "subject": "Number reporting value",
                            "tract78": 1527
                        },
                        {
                            "subject": "Under $500",
                            "tract78": 1
                        },
                        {
                            "subject": "$500 to $699",
                            "tract78": "-"
                        },
                        {
                            "subject": "$700 to $999",
                            "tract78": 7
                        },
                        {
                            "subject": "$1,000 to $1,499",
                            "tract78": 32
                        },
                        {
                            "subject": "$1,500 to $1,999",
                            "tract78": 55
                        },
                        {
                            "subject": "$2,000 to $2,499",
                            "tract78": 82
                        },
                        {
                            "subject": "$2,500 to $2,999",
                            "tract78": 94
                        },
                        {
                            "subject": "$3,000 to $3,999",
                            "tract78": 309
                        },
                        {
                            "subject": "$4,000 to $4,999",
                            "tract78": 377
                        },
                        {
                            "subject": "$5,000 to $5,999",
                            "tract78": 265
                        },
                        {
                            "subject": "$6,000 to $7,499",
                            "tract78": 203
                        },
                        {
                            "subject": "$7,500 to $9,999",
                            "tract78": 75
                        },
                        {
                            "subject": "$10,000 to $14,999",
                            "tract78": 23
                        },
                        {
                            "subject": "$15,000 to $19,999",
                            "tract78": 4
                        },
                        {
                            "subject": "$20,000 and over",
                            "tract78": "-"
                        },
                        {
                            "subject": "Total value (thousands of dollars)",
                            "tract78": 6854
                        },
                        {
                            "subject": "Average value (dollars)",
                            "tract78": 4488
                        },
                        {
                            "subject": "Median value (dollars)",
                            "tract78": 4487
                        },
                        {
                            "subject": "ESTIMATED MONTHLY RENT"
                        },
                        {
                            "subject": "All owner-occupied units",
                            "tract78": 1563
                        },
                        {
                            "subject": "Number reporting estimated rent",
                            "tract78": 1537
                        },
                        {
                            "subject": "Under $5",
                            "tract78": 1
                        },
                        {
                            "subject": "$5 to $6",
                            "tract78": 1
                        },
                        {
                            "subject": "$7 to $9",
                            "tract78": 2
                        },
                        {
                            "subject": "$10 to $14",
                            "tract78": 16
                        },
                        {
                            "subject": "$15 to $19",
                            "tract78": 49
                        },
                        {
                            "subject": "$20 to $24",
                            "tract78": 93
                        },
                        {
                            "subject": "$25 to $29",
                            "tract78": 170
                        },
                        {
                            "subject": "$30 to $39",
                            "tract78": 423
                        },
                        {
                            "subject": "$40 to $49",
                            "tract78": 356
                        },
                        {
                            "subject": "$50 to $59",
                            "tract78": 294
                        },
                        {
                            "subject": "$60 to $74",
                            "tract78": 106
                        },
                        {
                            "subject": "$75 to $99",
                            "tract78": 18
                        },
                        {
                            "subject": "$100 and over",
                            "tract78": 8
                        },
                        {
                            "subject": "Total estimated monthly rent (dollars)",
                            "tract78": 60373
                        },
                        {
                            "subject": "Average est. monthly rent (dollars)",
                            "tract78": "39.28"
                        },
                        {
                            "subject": "Median est. monthly rent (dollars)",
                            "tract78": "39.88"
                        },
                        {
                            "subject": "CONTRACT MONTHLY RENT"
                        },
                        {
                            "subject": "All tenant-occupied units",
                            "tract78": 1113
                        },
                        {
                            "subject": "Number reporting contract rent",
                            "tract78": 1108
                        },
                        {
                            "subject": "Under $5",
                            "tract78": 3
                        },
                        {
                            "subject": "$5 to $6",
                            "tract78": 2
                        },
                        {
                            "subject": "$7 to $9",
                            "tract78": 16
                        },
                        {
                            "subject": "$10 to $14",
                            "tract78": 53
                        },
                        {
                            "subject": "$15 to $19",
                            "tract78": 135
                        },
                        {
                            "subject": "$20 to $24",
                            "tract78": 177
                        },
                        {
                            "subject": "$25 to $29",
                            "tract78": 237
                        },
                        {
                            "subject": "$30 to $39",
                            "tract78": 284
                        },
                        {
                            "subject": "$40 to $49",
                            "tract78": 145
                        },
                        {
                            "subject": "$50 to $59",
                            "tract78": 47
                        },
                        {
                            "subject": "$60 to $74",
                            "tract78": 7
                        },
                        {
                            "subject": "$75 to $99",
                            "tract78": 1
                        },
                        {
                            "subject": "$100 to $149",
                            "tract78": 1
                        },
                        {
                            "subject": "$150 to $199",
                            "tract78": "-"
                        },
                        {
                            "subject": "$200 and over",
                            "tract78": "-"
                        },
                        {
                            "subject": "Total monthly rent (dollars)",
                            "tract78": 31772
                        },
                        {
                            "subject": "Average monthly rent (dollars)",
                            "tract78": 28.68
                        },
                        {
                            "subject": "Median monthly rent (dollars)",
                            "tract78": 28.04
                        },
                        {
                            "subject": "ESTIMATED MONTHLY RENT"
                        },
                        {
                            "subject": "Vacant units, for sale or rent",
                            "tract78": 181
                        },
                        {
                            "subject": "Number reporting estimated rent",
                            "tract78": 165
                        },
                        {
                            "subject": "Total estimated monthly rent (dollars)",
                            "tract78": 7932
                        },
                        {
                            "subject": "Average est. monthly rent (dollars)",
                            "tract78": 48.07
                        },
                        {
                            "subject": "Median est. monthly rent (dollars)",
                            "tract78": 51.82
                        },
                        {
                            "subject": "CONTRACT OR ESTIMATED MONTHLY RENT"
                        },
                        {
                            "subject": "All dwelling units",
                            "tract78": 2860
                        },
                        {
                            "subject": "Number reporting contract or est. rent",
                            "tract78": 2812
                        },
                        {
                            "subject": "Total monthly rent (dollars)",
                            "tract78": 100159
                        },
                        {
                            "subject": "Average monthly rent (dollars)",
                            "tract78": "35.62"
                        },
                        {
                            "subject": "Median monthly rent (dollars)",
                            "tract78": "35.43"
                        },
                        {
                            "subject": "GROSS MONTHLY RENT"
                        },
                        {
                            "subject": "Tenant-occupied nonfarm units",
                            "tract78": 1113
                        },
                        {
                            "subject": "Number reporting gross monthly rent",
                            "tract78": 1058
                        },
                        {
                            "subject": "Under $5",
                            "tract78": "-"
                        },
                        {
                            "subject": "$5 to $6",
                            "tract78": 1
                        },
                        {
                            "subject": "$7 to $9",
                            "tract78": 6
                        },
                        {
                            "subject": "$10 to $14",
                            "tract78": 18
                        },
                        {
                            "subject": "$15 to $19",
                            "tract78": 49
                        },
                        {
                            "subject": "$20 to $24",
                            "tract78": 98
                        },
                        {
                            "subject": "$25 to $29",
                            "tract78": 143
                        },
                        {
                            "subject": "$30 to $39",
                            "tract78": 336
                        },
                        {
                            "subject": "$40 to $49",
                            "tract78": 201
                        },
                        {
                            "subject": "$50 to $59",
                            "tract78": 137
                        },
                        {
                            "subject": "$60 to $74",
                            "tract78": 63
                        },
                        {
                            "subject": "$75 to $99",
                            "tract78": 4
                        },
                        {
                            "subject": "$100 and over",
                            "tract78": 2
                        },
                        {
                            "subject": "Median gross rent (dollars)",
                            "tract78": 35.87
                        }
                    ]

                    //Extracting the keys, tract78 and count
                    var col = [];
                    for (var i = 0; i < data6.length; i++) {
                      for (var key in data6[i]) {
                        if (col.indexOf(key) === -1) {
                        col.push(key);
                        }
                      }
                    }

                    //Creating the table
                    var table= document.createElement("table");

                    //The table headers using the keys extracted above
                    var tr=table.insertRow(-1);

                    for(var i=0; i<col.length;i++){
                        var th=document.createElement("th");
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }

                    //Adding the JSON data as rows
                    for(var i=0; i<data6.length; i++){
                        tr=table.insertRow(-1);

                        for (var j=0; j<col.length; j++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = data6[i][col[j]];
                        }
                    }

                    //Adding the table to a container
                    var divContainer = document.getElementById('showData');
                    divContainer.innerHTML="";
                    divContainer.appendChild(table);
                }
            </script>
        </>
    );
};

export default Table6;
