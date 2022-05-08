import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import Citation from "../../components/global/Citation";
import DeanwoodCovid from "../../components/health/Covid";
import HealthTrends from "../../components/health/Health_Trends";
import DeanwoodResident from "../../components/health/Resident";

export const DeanwoodHealth = ({resources}) => {
    const tabs = [
        {label: "healthTrends", name: "Health Trends", el: <HealthTrends/>},
        {label: "covidData", name: "COVID-19 Data", el: <DeanwoodCovid/>},
        {
            label: "residentProfile",
            name: "Resident Profile",
            el: <DeanwoodResident/>
        }
    ];

    const [displayState, setDisplayState] = useState("covidData");

    return (<Container className="city" id="deanwood-health">
            <Row>
                <Col lg={3} className="nav-col p-0 mr-2">
                    <h1>Health in Deanwood, D.C.</h1>
                    <p>
                        Deanwood lies in Ward 7 of the District of Columbia, home to over
                        80 thousand (mostly Black) inhabitants. A couple of miles across the
                        Anacostia lies Ward 3, with about the same number of (mostly White)
                        inhabitants. However, the small distance between the two wards belies
                        a world of difference. The disparity between Ward 3 and Ward 7 is not
                        just demographic or economic: as shown here, it extends to people's
                        health. Those who, by accident of birth, lie in the wrong side of the
                        divide can expect to lead lives that are ten years shorter and have
                        higher rates of chronic diseases such as diabetes,heart diseases,HIV/AIDS
                        and cancer.
                    </p>
                    <DeanwoodNav selected={"health"} resources={resources}/>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className={"p-0 mt-sm-4"}>
                    <ul className="health-tab-list list-inline">
                        {tabs.map((tab, idx) =>
                            <li className="list-inline-item" key={`li-tab-${idx}`}>
                                <Button
                                    className={`btn-health-tab ${displayState === tab.label ? "selected" : ""}`}
                                    key={idx}
                                    onClick={() => setDisplayState(tab.label)}>
                                    {tab.name}
                                </Button>
                            </li>
                        )}
                    </ul>
                </Col>

                <Col lg={4} className={"p-0"}/>
                <Col lg={8} className={"p-0"}>{tabs.map((tab, idx) =>
                    <Container className={"p-0"} key={idx}>
                        {displayState === tab.label && tab.el}
                    </Container>
                )}</Col>

                <Col lg={4}/>
                <Col lg={8} className="mt-5 mb-5">
                    <h2>Sources</h2>
                    <Citation identifier={"source-1"}
                              title={"Department of Energy and Environment,1996-2020 " +
                              "Ambient Air Quality Trends Report "}
                              link={"https://doee.dc.gov/sites/default/files/dc/sites/ddoe/service_content/attachments/2020%20Ambient%20Air%20Quality%20Trends%20Report.pdf"}/>

                    <Citation identifier={"source-2"}
                              title={"Center for Policy, Planning and" +
                              " Evaluation,2008-2012 Mortality Report"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/2012%20MORTALITY%20REPORT%20FINAL.pdf"}/>

                    <Citation identifier={"source-3"}
                              title={"Chaya Merrill, DrPH; Linda Cottrell," +
                              " MPH; and, Kimberle Searcy, MPH,2016-providence-hospital-chna-report"}
                              link={"https://healthcare.ascension.org/-/media/healthcare/compliance-documents/washington-dc/2016-providence-hospital-chna-report.pdf"}/>

                    <Citation identifier={"source-4"}
                              title={"Chaya merrill,DrPH and Amber" +
                              " Rieke,MPH, Community Health Needs" +
                              " Assessment 2019"}
                              link={"https://www.dchealthmatters.org/content/sites/washingtondc/2019_DC_CHNA_FINAL.pdf"}/>

                    <Citation identifier={"source-5"}
                              title={"District of ColumbiaDepartment of" +
                              " Health,District of Columbia Community" +
                              " Health Needs Assessment"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/page_content/attachments/DC%20DOH%20CHNA%20%28v5%200%29%2005%2007%202014%20-%20FINAL%20%282%29.pdf"}/>

                    <Citation identifier={"source-6"}
                              title={"District of Columbia Department of" +
                              " Health,District of Columbia Health Chart" +
                              " Book 1996-2001"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/DC_Health_Chart_Book_1996_2001.pdf"}/>

                    <Citation identifier={"source-7"}
                              title={"District of Columbia Department of" +
                              " the Environment,Strategic Plan for Lead and" +
                              " Healthy Housing "}
                              link={"https://doee.dc.gov/sites/default/files/dc/sites/ddoe/publication/attachments/DDOE_Strategic_Plan_for_Lead-Safe_and_Healthy_Homes.pdf"}/>

                    <Citation identifier={"source-8"}
                              title={"Phillip Mauler,Lauren A. Doamekpor, Crytal Reed &" +
                              " Kwesi" +
                              " Mfume, Cardiovascular Disease in the Nation’s Capital: How" +
                              " Policy" + " and the Built Environment Contribute to" +
                              " Disparities in CVD " + "Risk Factors in Washington, D.C."}
                              link={"https://link.springer.com/content/pdf/10.1007/s40615-018-0497-7.pdf"}/>

                    <Citation identifier={"source-9"}
                              title={"District of Columbia Department of Health,2005" +
                              " Mortality Report"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/Mortality_Report_2005.pdf"}/>

                    <Citation identifier={"source-10"}
                              title={"District of Columbia Department of Health,2007" +
                              " Mortality Report"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/Mortality_Report_2007_0.pdf"}/>

                    <Citation identifier={"source-11"}
                              title={"Obesity in the District of Columbia, 2014"}
                              link={"https://doh.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/Obesity%20Report%202014.pdf"}/>

                    <Citation identifier={"source-12"}
                              title={"Anita Chandra, Janice C. Blanchard & Teague" +
                              " Ruder, District of Columbia Health Needs Assessment"}
                              link={"https://www.rand.org/content/dam/rand/pubs/research_reports/RR200/RR207/RAND_RR207.sum.pdf"}/>

                    <Citation identifier={"source-13"}
                              title={"Aaron Brink-Johnson,MPA & Judy Lubin,PHD,MPH," +
                              " Structural racism in Washington,DC facts, figures &" +
                              " opportunities for advancing racial equity"}
                              link={"https://urbanandracialequity.org/wp-content/uploads/2020/08/Structural-Racism-in-Washington-DC-1.pdf"}/>

                    <Citation identifier={"source-14"}
                              title={"District of Columbia Department of Health,Impacts" +
                              " of Pharmaceutical Marketing on Healthcare in the" +
                              " District of Columbia"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/Impacts%20Report%202016%20-%20Diabetes_0.pdf"}/>

                    <Citation identifier={"source-15"}
                              title={"Health Effects of Ozone Pollution"}
                              link={"https://www.epa.gov/ground-level-ozone-pollution/health-effects-ozone-pollution"}/>

                    <Citation identifier={"source-16"}
                              title={"District of Columbia Department of Health, Annual" +
                              " Epidemiology & Surveillance Report"}
                              link={"https://dchealth.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/2019%20Annual%20Surveillance%20Report_09062019.pdf"}/>
                    <Citation identifier={"source-17"}
                              title={"DC COVID-19 Cases by Ward"}
                              link={"https://opendata.dc.gov/datasets/dc-covid-19-cases-by-ward/explore?showTable=true"}/>

                </Col>
            </Row>
        </Container>
    );
};

DeanwoodHealth.propTypes = {
    resources: PropTypes.array
};


export default DeanwoodHealth;
