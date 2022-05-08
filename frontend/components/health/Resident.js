import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";


export const DeanwoodResident = () => {
    const ward3Data = [
        {
            label: "Life expectancy",
            value: "86.1 years"
        },
        {
            label: "Infant mortality",
            subLabel: "Deaths per thousand live births.",
            value: "1.3"
        },
        {
            label: "Disability rate",
            subLabel: "Due to health limitations.",
            value: "17.3%"
        }
    ];
    const ward7Data = [
        {
            label: "Life expectancy",
            value: "72.8 years"
        },
        {
            label: "Infant mortality",
            subLabel: "Deaths per thousand live births.",
            value: "9.6"
        },
        {
            label: "Disability rate",
            subLabel: "Due to health limitations.",
            value: "26.3%"
        }
    ];

    return (<>
        <h2>A side-by-side comparison</h2>
        <p>
            Let's look at some key numbers that show the great disparity in the health of those
            in Ward 3 and Ward 7 of the District of Columbia.
        </p>

        <Row>
            <Col className="col-6 p-0">
                <h3 align="center">Ward 3</h3>
                <h5 className="text-center">Majority white ward 🖐🏼 🖐🏻</h5>
                {ward3Data.map((datum, idx) =>
                    <Card key={idx} className="m-2 p-2">
                        <Card.Body className="p-1">
                            <p>{datum.label}: {datum.value}</p>
                            <p className="resident-sublabel">{datum.subLabel}</p>
                        </Card.Body>
                    </Card>
                )}
            </Col>
            <Col className="col-6 p-0">
                <h3 align="center">Ward 7</h3>
                <h5 className="text-center">Majority Black ward 🖐🏾 🖐🏿</h5>
                {ward7Data.map((datum, idx) =>
                    <Card key={idx} className="m-2 p-2">
                        <Card.Body className="p-1">
                            <p>{datum.label}: {datum.value}</p>
                            <p className="resident-sublabel">{datum.subLabel}</p>
                        </Card.Body>
                    </Card>
                )}
            </Col>
        </Row>
    </>);

};

DeanwoodResident.propTypes = {
    resources: PropTypes.array
};

export default DeanwoodResident;
