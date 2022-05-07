import React from "react";
import PropTypes from "prop-types";

export default class Table_Brightwood extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        tabledata: PropTypes.array
    };

    render() {
        return <div id="table">
            <h2>
                Brightwood Lots - Value by Year
            </h2>

            <h3>Lot 58 Square 2992</h3>
            <table className="table formatting">
                <tr>
                    <th>Year</th>
                    <th>Original Price</th>
                </tr>
                <tr>
                    <td>1954</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1985</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>2002</td>
                    <td>$21000</td>
                </tr>
                <tr>
                    <td>2006</td>
                    <td>$420000</td>
                </tr>
                <tr>
                    <td>2020</td>
                    <td>$515000</td>
                </tr>
                <tr>
                    <td>2022 (estimate)</td>
                    <td>~$879,016</td>
                </tr>
            </table>

            <h3>Lot 72 Square 2992</h3>
            <table className="table formatting">
                <tr>
                    <th>Year</th>
                    <th>Original Price</th>
                </tr>
                <tr>
                    <td>1925</td>
                    <td>$4000</td>
                </tr>
                <tr>
                    <td>1931</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1986</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1989</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1992</td>
                    <td>$25000</td>
                </tr>
                <tr>
                    <td>2006</td>
                    <td>$425000</td>
                </tr>
                <tr>
                    <td>2022 (estimate)</td>
                    <td>~$889,409</td>
                </tr>
            </table>

            <h3>Lot 86 Square 2992</h3>
            <table className="table formatting">
                <tr>
                    <th>Year</th>
                    <th>Original Price</th>
                </tr>
                <tr>
                    <td>1926</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1939</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1957</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1959</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1960</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1962</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1971</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1973</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>1979</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>2003</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>2006</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>2008</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>2022 (estimate)</td>
                    <td>~$889,409</td>
                </tr>
            </table>

        </div>;
    }
}


