import React from "react";
import PropTypes from "prop-types";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        tabledata: PropTypes.array
    };

    render() {
        return <div id="table">
            <table className="table formatting">
                <thead>
                    <tr>
                        <th>Tract 78</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tabledata.length > 0 && this.props.tabledata.map(
                        (info) => {
                            return (
                                <tr key={info.count}>
                                    <td>{info.tract78}</td>
                                    <td>{info.count}</td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>;
    }
}


