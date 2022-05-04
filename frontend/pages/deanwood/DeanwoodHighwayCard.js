import React from "react";
import * as PropTypes from "prop-types";
import {Col, Image} from "react-bootstrap";

const DeanwoodHighwayCard = ({img_source}) => {
    return (
        <Col>
            <h3>Federal Aid Highway Act of 1956</h3>
            <Image src={img_source} fluid/>
            <div>
                <p>
                    “Together, the uniting forces of our communication and transportation
                    systems are dynamic elements in the very name we bear – United States.
                    Without them, we would be a mere alliance of many separate parts."
                    <a href={"#source-1"}
                       className={"citation-pointer"}
                       title="Dwight D. Eisenhower Presidential Library -
                       An excerpt from President Eisenhower’s Message to Congress
                       regarding highways, February 22, 1955">[1]</a>
                </p>
            </div>

            <div>
                <h4>The Federal Aid Highway Act of 1956 </h4>
                <p>
                    The Federal Aid Highway Act was passed in June 1956. The law authorized the
                    construction of a 41,000-mile network of interstate highways that would span
                    the nation. It also allocated $26 billion to pay for them. Under the terms
                    of the law, the federal government would pay 90 percent of the cost of
                    expressway construction. The money came from an increased gasoline tax–now 3
                    cents a gallon instead of 2–that went into a non-divertible Highway Trust
                    Fund.</p>
                <p>
                    The new interstate highways were controlled-access expressways with no
                    at-grade crossings–that is, they had overpasses and underpasses instead of
                    intersections. They were at least four lanes wide and were designed for
                    high-speed driving.
                </p>
            </div>

            <div>
                <h4>Pros and Cons for the construction of interstate highways</h4>
                <p>
                    The interstate highways were intended to serve several purposes: eliminate
                    traffic congestion; replace what one highway advocate called “undesirable
                    slum areas” with pristine ribbons of concrete; make coast-to-coast
                    transportation more efficient; and make it easy to get out of big cities in
                    case of an atomic attack.
                </p>
                <p>
                    When the Interstate Highway Act was first passed, most Americans supported
                    it. However, people grew unhappy about the roadbuilding very soon. The
                    highways divided communities and displaced people from their homes. Many
                    people were forced to leave their old homes, hence the abandonment and decay
                    in multiple cities.
                </p>
            </div>
        </Col>
    );
};

DeanwoodHighwayCard.propTypes = {
    img_source: PropTypes.string
};

export default DeanwoodHighwayCard;
