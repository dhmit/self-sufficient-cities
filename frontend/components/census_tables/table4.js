import React from "react";

let JsonData = [
    {
        "nonwhitePop": "Persons 25 years or older",
        "total": 5067,
        "male": 2415,
        "female": 2662
    },
    {
        "nonwhitePop": "No school years completed",
        "total": 118,
        "male": 46,
        "female": 72
    },
    {
        "nonwhitePop": "Grade School: 1-4 years",
        "total": 715,
        "male": 401,
        "female": 314
    },
    {
        "nonwhitePop": "Grade school: 5-6 years",
        "total": 875,
        "male": 423,
        "female": 452
    },
    {
        "nonwhitePop": "Grade school: 7-8 years",
        "total": 1314,
        "male": 617,
        "female": 697
    },
    {
        "nonwhitePop": "High school: 1-3 years",
        "total": 837,
        "male": 368,
        "female": 469
    },
    {
        "nonwhitePop": "High school: 4 years",
        "total": 576,
        "male": 264,
        "female": 312
    },
    {
        "nonwhitePop": "College: 1-3 years",
        "total": 300,
        "male": 125,
        "female": 175
    },
    {
        "nonwhitePop": "College: 4+ years",
        "total": 341,
        "male": 124,
        "female": 117
    },
    {
        "nonwhitePop": "Not Reported",
        "total": 101,
        "male": 47,
        "female": 54
    },
    {
        "nonwhitePop": "Median School Years",
        "total": 8.2,
        "male": 8,
        "female": 8.2
    },
    {
        "nonwhitePop": "Employment Status"
    },
    {
        "nonwhitePop": "Persons 14 years and over",
        "total": 7066,
        "male": 3372,
        "female": 3694
    },
    {
        "nonwhitePop": "In labor force",
        "total": 4276,
        "male": 2677,
        "female": 1599
    },
    {
        "nonwhitePop": "Percent of pop. 14+",
        "total": 60.5,
        "male": 79.4,
        "female": 43.3
    },
    {
        "nonwhitePop": "Employed",
        "total": 3254,
        "male": 2091,
        "female": 1163
    },
    {
        "nonwhitePop": "Wage and Salaray Workers",
        "total": 3029,
        "male": 1942,
        "female": 1087
    },
    {
        "nonwhitePop": "Employers and own-account workers",
        "total": 205,
        "male": 139,
        "female": 66
    },
    {
        "nonwhitePop": "Unpaid family workers",
        "total": 4,
        "male": 4,
        "female": 0
    },
    {
        "nonwhitePop": "Class of worker not reported",
        "total": 16,
        "male": 6,
        "female": 10
    },
    {
        "nonwhitePop": "On public emergency work (WPA, NYA, etc)",
        "total": 267,
        "male": 203,
        "female": 84
    },
    {
        "nonwhitePop": "Seeking work",
        "total": 735,
        "male": 368,
        "female": 352
    },
    {
        "nonwhitePop": "Experienced workers",
        "total": 561,
        "male": 291,
        "female": 270
    },
    {
        "nonwhitePop": "New workers",
        "total": 174,
        "male": 92,
        "female": 82
    },
    {
        "nonwhitePop": "Not in labor force",
        "total": 2790,
        "male": 695,
        "female": 2095
    },
    {
        "nonwhitePop": "Engaged in home housework",
        "total": 1257,
        "male": 6,
        "female": 1251
    },
    {
        "nonwhitePop": "In school",
        "total": 808,
        "male": 288,
        "female": 420
    },
    {
        "nonwhitePop": "Unable to work",
        "total": 402,
        "male": 122,
        "female": 270
    },
    {
        "nonwhitePop": "In institutions",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "nonwhitePop": "Other and not reported",
        "total": 322,
        "male": 168,
        "female": 154
    },
    {
        "nonwhitePop": "Major Occupation Group"
    },
    {
        "nonwhitePop": "Employed (exc. on pub. emerg. work)",
        "total": 3254,
        "male": 2091,
        "female": 1163
    },
    {
        "nonwhitePop": "Professional workers",
        "total": 126,
        "male": 48,
        "female": 78
    },
    {
        "nonwhitePop": "Semiprofessional workers",
        "total": 16,
        "male": 12,
        "female": 4
    },
    {
        "nonwhitePop": "Proprietors, managers, and officials",
        "total": 48,
        "male": 40,
        "female": 8
    },
    {
        "nonwhitePop": "Clerical, sales, and kindred workers",
        "total": 334,
        "male": 273,
        "female": 61
    },
    {
        "nonwhitePop": "Craftsmen, fooremen, and kindred workers",
        "total": 170,
        "male": 169,
        "female": 1
    },
    {
        "nonwhitePop": "Operatives and kindred workers",
        "total": 504,
        "male": 407,
        "female": 97
    },
    {
        "nonwhitePop": "Domestic service workers",
        "total": 608,
        "male": 20,
        "female": 588
    },
    {
        "nonwhitePop": "Service workers, except domestic",
        "total": 779,
        "male": 476,
        "female": 303
    },
    {
        "nonwhitePop": "Laborers",
        "total": 647,
        "male": 636,
        "female": 11
    },
    {
        "nonwhitePop": "Occupation not reported",
        "total": 22,
        "male": 10,
        "female": 12
    }
];

function Table4() {
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr key={info.count}>
                    <td>{info.nonwhitePop}</td>
                    <td>{info.total}</td>
                    <td> {info.male}</td>
                    <td> {info.female}</td>
                </tr>
            );
        }
    );
    return (
        <div>
            <table className="table formatting">
                <thead>
                <tr>
                    <th>Non-white population</th>
                    <th>Total</th>
                    <th>Male</th>
                    <th>Female</th>
                </tr>
                </thead>
                <tbody>


                {DisplayData}

                </tbody>
            </table>

        </div>
    );
}

export default Table4;
