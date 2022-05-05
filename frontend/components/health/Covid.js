import React from "react";
import {Row, Col, Image, Card, Container} from "react-bootstrap";
import cases_graph from "../../images/cases_graph.png";
import lives_graph from "../../images/cases_graph.png";
import tests_graph from "../../images/cases_graph.png";
import deanwood_image from "../../images/deanwood.jpg";
const image_source = "https://commons.wikimedia.org/wiki/File:Deanwood_Washington_DC.jpg";


export const DeanwoodCovid = () => {

    return (<>
        {/*<Container>*/}
        {/*    <Card>*/}
        {/*        /!*<Card.Img src={deanwood_image}/>*!/*/}
        {/*        /!*<Card.ImgOverlay>*!/*/}
        {/*        /!*    Licenced under CC BY 3.0. <a href={image_source}>Source.</a>*!/*/}
        {/*        /!*</Card.ImgOverlay>*!/*/}
        {/*        <Card.Body>*/}
        {/*            <Card.Title>A history of disparity</Card.Title>*/}
        {/*            <Card.Text>*/}
        {/*                Deanwood lies in Ward 7 of the District of Columbia, home to over*/}
        {/*                80 thousand (mostly Black) inhabitants. A couple of miles across the*/}
        {/*                Anacostia lies Ward 3, with about the same number of (mostly White)*/}
        {/*                inhabitants. However, the small distance between the two wards belies*/}
        {/*                a world of difference. The disparity between Ward 3 and Ward 7 is not*/}
        {/*                just demographic or economic: as shown here, it extends to people's*/}
        {/*                health. Those who, by accident of birth, lie in the wrong side of the*/}
        {/*                divide can expect to lead lives that are ten years shorter and have*/}
        {/*                higher rates of chronic diseases such as diabetes.*/}
        {/*            </Card.Text>*/}
        {/*        </Card.Body>*/}
        {/*    </Card>*/}
        {/*</Container>*/}

        <>
            <Col className={"graph-column p-0"}>
                <h5>Positive Cases:</h5>
                {/*<Image fluid={true} src={cases_graph}/>*/}
                <p>*Info about above data*</p>
            </Col>
            <Col className={"text-column p-0"}>
                Hello
            </Col>
                {/*<Row>*/}
                {/*    <Col className={"p-0"}>*/}
                {/*        <h5>Lives Lost:</h5>*/}
                {/*        /!*<Image fluid={true} src={lives_graph}/>*!/*/}
                {/*        <p>*Info about above data*</p>*/}
                {/*    </Col>*/}
                {/*    <Col className={"p-0"}>Sup</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col className={"p-0"}>*/}
                {/*        <h5>Total Tests:</h5>*/}
                {/*        /!*<Image fluid={true} src={tests_graph}/>*!/*/}
                {/*        <p>*Info about above data*</p>*/}
                {/*    </Col>*/}
                {/*    <Col className={"p-0"}>*/}
                {/*        Here*/}
                {/*    </Col>*/}
                {/*</Row>*/}

        </>

    </>);

};


export default DeanwoodCovid;
