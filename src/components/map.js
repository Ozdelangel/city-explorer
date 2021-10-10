import React from "react";
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";



class Map extends React.Component{
    // constructor(props){
    //     super(props);
        
    //   }
    render(){
        
        return(
            <>
            <Container fluid="md">
            <Row>
            <Image src={`${this.props.cityMap}`} roundedCircle/>
            </Row>
            </Container>
            </>
        );
    }
}

export default Map;