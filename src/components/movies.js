import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MovieList extends React.Component{
    render(){
        return(
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.movieData.image_url} />
             <Card.Body>
            <Card.Title>{this.props.movieData.title}</Card.Title>
            <Card.Text>
            {this.props.movieData.overview}
            {this.props.movieData.average_votes}
            {this.props.movieData.total_votes}
            {this.props.movieData.popularity}
            {this.props.movieData.released_on}
        
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </>
        )
    }
}

export default MovieList;