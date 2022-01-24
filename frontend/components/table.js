import React from "react";

const data = [
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
        "tract78": "Occupied dwelling units"
    },
    {
        "tract78": 2629
    },
    {
        "tract78": "Population per occupied dwelling unit"
    },
    {
        "tract78": 4.63
    }
];

const keys = ["tract78", "count"];

document.write("<table border==\"1\"><tr>");
for (let key in data[0]) { //added let
	document.write('<td>' + key + '</td>');
}
document.write("</tr>");
for (let i = 0; i < data.length; i++) {
	document.write('<tr>');
	for (let key in data[i]) { //added the let, not sure if it should be there
  	document.write('<td>' + data[i][key] + '</td>');
  }
	document.write('</tr>');
}
document.write("</table>");

export default data;

