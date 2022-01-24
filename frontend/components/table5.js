import React from "react";

const Table5 = () => {
    return (
        <>
            <body>
                <input type = "button" onClick={CreateTableFromJSON()} value="Create Table From JSON" />
                <p className="ShowData"/>
            </body>
            <script>
                 function CreateTableFromJSON(){
                    var data5=[
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
                            "occupancy": "Vacant",
                            "tract78": "Number",
                            "undefined": "Percentage"
                        },
                        {
                            "occupancy": "For sale or rent",
                            "tract78": 181,
                            "undefined": 6.3
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
                    ]

                    //Extracting the keys, tract78 and count
                    var col = [];
                    for (var i = 0; i < data5.length; i++) {
                      for (var key in data5[i]) {
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
                    for(var i=0; i<data5.length; i++){
                        tr=table.insertRow(-1);

                        for (var j=0; j<col.length; j++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = data5[i][col[j]];
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

export default Table5;
