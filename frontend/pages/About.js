import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default class About extends React.Component {
    render() {
        return <>
            <Container>
                <Row xs={1} md={2}>
                    <Col style={{marginLeft: 50}}>
                        <h1>About</h1>
                        <p>
                        Self-Sufficient Cities was a project by the <a href = "https://digitalhumanities.mit.edu/">MIT Programs in Digital Humanities</a> in collaboration with our Spring 2022 Faculty Fellow, <a href = "https://sts-program.mit.edu/people/sts-faculty/kate-brown/">Kate Brown</a>, Professor of Science, Technology, and Society at MIT.
                        <br/><br/>
                        This project uses techniques of web development, data visualization, mapping, 
                        timelines, and database design to grapple with the puzzle that in one of 
                        the world’s wealthiest countries, 36 million people presently experience 
                        food insecurity, while a majority of Americans suffer from 
                        diet-related diseases. Students developed an online, interactive mapping and 
                        timeline project that tells the story of the rise and fall of urban communities 
                        that grew their own food in the 20th century United States. 
                        Using population and agricultural census documents, oral histories, 
                        sample household survey data, photos, maps, aerial
                        photography, and satellite imagery, the project enables users 
                        to travel through time and space to see how changes in 
                        landscapes, land use, and infrastructure affect community well-being.
                        <br/><br/>
                        All code created for this project is available on <a href = "https://github.com/dhmit/self-sufficient-cities">Github</a>.
                        </p>
                        <h2>Project Citation</h2>
                        <p>                   
                            Kate Brown, Alexis Ponce Castillo, Angelica Castillejos, Angelina Wu, Ayden Johnson, Emeka Echezona, Erastus Murungi, Erin Liu, Esther Faith Kinyanjui, Guilhermo Cutrim Costa, Irina Zoccolini, Justice Vidal, Karen Andre, Kateryna Morhun, Keilee Northcutt, Kelly Fang, Leanne Shen, Lucy Cai, Moises Trejo, Nadia Frieden, Nisha Nkya, Peihua Huang, Quincy Johnson, Raxel Gutierrez, Samantha York, Shaojia Lu, Shirlin Kingston, Sharaf Rashid, Wenqi Ding, “Self-Sufficient Cities,” Web resource. 2022. https://cities.dhlab.mit.edu/
                        </p>
                    </Col>
                </Row>
            </Container>
        </>;
    }

};

