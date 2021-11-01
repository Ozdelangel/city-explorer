import React from 'react';
import axios from 'axios';
import Map from './components/map';
import './index.css'
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import Error from './components/Error';
import WeatherList from './components/weather';
import MovieList from './components/movies';


// import Weather from './components/weather.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
      placeObj: {},
      cityMap: {},
      hasError: false,
      weatherForecast: [],
      showWeather: false,
      moviePosters: [],
      showMovies: false
    }
  }
  getPlace = async () => {
    
    console.log(process.env.REACT_APP_LOCATION_API_KEY)
    let URL =  `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`;
    console.log(URL);
    //axios get request
    try{
    let placeData = await axios.get(URL);
    console.log('place data', placeData);
    this.setState({placeObj:placeData.data[0]});
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.placeObj.lat},${this.state.placeObj.lon}&zoom=10&size=400x400`
    this.setState({cityMap:mapURL});
    console.log('this is the map url',mapURL);



    
    let weatherUrl = await axios.get(`http://localhost:3001/weather?lat=${this.state.placeObj.lat}&lon=${this.state.placeObj.lon}`)
    console.log('this is the weather data:', weatherUrl.data);
    this.setState({weatherForecast: weatherUrl.data, showWeather: true});
    // this.setState({showWeather: true});

    let movieUrl = await axios.get(`http://localhost:3001/movies?cityName=${this.state.cityName}`)
    console.log('this is the movie data:', movieUrl.data);
    this.setState({moviePosters: movieUrl.data, showMovies: true});
    // this.setState({showWeather: true});


  }
  catch(error){
    console.log('there was an error: error');
    this.setState({hasError:true});
  }

}
toggleError = () => {
  this.setState({hasError:false});
}
  render(){
  return (
    <>
    <div className='form'>
    <h1>City Explorer </h1>
    <h3>{this.state.cityName}</h3>
    <input onChange={(e) => this.setState({cityName: e.target.value})}>
    </input>
    <button onClick={this.getPlace}>Explore!</button>
    </div>
    {this.state.placeObj.display_name &&<div>
      <Container fluid="xxl">
      <Row><h2>Here's the city:{this.state.placeObj.display_name}</h2>
    <h4>Lat:{this.state.placeObj.lat}</h4>
     <h4>lon:{this.state.placeObj.lon}</h4>
     
     </Row>
     </Container>
      </div>}
      <Map cityMap={this.state.cityMap} style={{ width: '200px' }}/>
      {this.state.hasError && <Error toggleError={this.toggleError}/>}
     
      {
      this.state.showWeather && this.state.weatherForecast && this.state.weatherForecast.map((weatherData, idx) => 
      
    <WeatherList key={idx} data={weatherData}/>)
  }
  {
      this.state.showMovies && this.state.moviePosters.map((movieData, idx) => 
      
    <MovieList key={idx} movieData={movieData}/>)
  }

  
  
     
    </>
    
  );
}
}


            
            
            
            

export default App;
