import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import * as Text from "./DeanwoodCommunityText";
import MapTest from "../../components/maps/MapTest";
import MapDeanwood from "../../components/maps/MapDeanwood";



const DeanwoodProfile = (statement, map = true, source = "") => {
    let right;
    if (map){
        right = <Col><MapDeanwood/></Col>;
    }
    else{
        right = <img src = {source} />;
    }
    let statement_array = statement.split("\n");
    return (<div className={"Profile"}>
        <Row>
            <Col md={4}/>
            <Col>
                {statement_array.map(s => (
                    <p key={s} className={"intro-text"}>{s}</p>
                ))}
            </Col>
            {right}
        </Row>
    </div>);
};




class CommunityMap extends React.Component {
    state = {
        decade: 1980
    };

    render() {
        return (<div>
            <button onClick={() => this.setState({decade:1940})}>1940s</button>
            <button onClick={() => this.setState({decade:1950})}>1950s</button>
            <button onClick={() => this.setState({decade:1960})}>1960s</button>
            <button onClick={() => this.setState({decade:1970})}>1970s</button>
            <button onClick={() => this.setState({decade:1980})}>1980s</button>
            <button onClick={() => this.setState({decade:1990})}>1990s</button>
            <MapTest decade = {this.state.decade} data = {this.props.data}/>
        </div>);
    }
};




export const DeanwoodCommunity = ({resources, community_data}) => {
    console.log("hi ", community_data);
    return (<>
        <Container className="city" id="deanwood-overview">
            <Row >
                <Col md={3} className="nav-col mr-2">
                    <h1>Deanwood, D.C.</h1>
                    <p>
                        The project tells the rise and fall of urban communities that grew their
                        own food in the 20th century United States. Taking the Deanwood
                        neighborhood in Washington, D.C. as their starting place, students
                        consulted newspaper articles and census data to design an interactive
                        site.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
                </Col>
                <Row xs={1} md={2} className="justify-content-around mt-5">
                    <Col md={4}/>
                    <Col md={4}>
                        <p className={"intro-text"}>
                            Eligendi excepturi corporis velit provident dicta neque autem. Enim ab
                            at
                            distinctio enim debitis temporibus. Provident enim natus cumque.
                            Quibusdam
                            impedit nam et ipsam. Consequatur earum quam dolore doloremque earum.…
                            Eligendi excepturi corporis velit provident dicta neque autem.
                            Enim ab at distinctio enim debitis temporibus.
                            Provident enim natus cumque. Quibusdam impedit nam
                            et ipsam. Consequatur earum quam dolore doloremque earum.…
                        </p>
                    </Col>
                    <Col md={4}>
                        <blockquote>
                            "This is a blockquote. Eligendi excepturi corporis velit. Enim
                            ab at distinctio enim debitis temporibus"
                        </blockquote>
                    </Col>
                </Row>
                <Row>
                    <Col md = {4}/>
                    <Col>
                        <blockquote>
                           "Deanwood was once a propsperous
                           neighborhood with a close-knit community Deanwood was once a propsperous
                           neighborhood with a close-knit communityDeanwood was once a propsperous
                           neighborhood with a close-knit community"
                        </blockquote>
                    </Col>

                </Row>

                {DeanwoodProfile(Text.quoteContext, false)}
                {DeanwoodProfile(Text.fillerString, true)}

            </Row>
            <Row>
                <CommunityMap data={community_data}/>
            </Row>

        </Container>

    </>);

};

DeanwoodCommunity.propTypes = {
    resources: PropTypes.array,
    community_data: PropTypes.array
};

CommunityMap.propTypes = {
    data: PropTypes.array
};


export default DeanwoodCommunity;
