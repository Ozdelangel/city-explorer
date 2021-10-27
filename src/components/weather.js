import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";

class WeatherList extends React.Component{
    render(){
        return(
            <>
            <Container fluid>
            <Row>
            <Col>Date:{this.props.data.date}
            </Col>
            <Col>
            High:{this.props.data.hightemp}
            </Col>
            <Col>
            Low:{this.props.data.lowtemp}
            </Col>
            <Col>
            Description:{this.props.data.description}
            </Col>
            </Row>
            </Container>
            </>
        )
    }
}

export default WeatherList;