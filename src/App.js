import React from 'react';
import axios from 'axios';
import Map from './components/map';
import './index.css'
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import Error from './components/Error';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
      placeObj: {},
      cityMap: {},
      hasError: false
    }
  }
  getPlace = async () => {
    console.log('button Pressed');
    console.log(process.env.REACT_APP_LOCATION_API_KEY)
    let URL =  `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`;
    console.log(URL);
    //axios get request
    try{
    let placeData = await axios.get(URL);
    this.setState({placeObj:placeData.data[0]});
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.placeObj.lat},${this.state.placeObj.lon}&zoom=14&size=400x400`
    this.setState({cityMap:mapURL});
    console.log('this is the map url',mapURL);
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
     <h4>lon:{this.state.placeObj.lon}</h4></Row></Container>
      </div>}
      <Map cityMap={this.state.cityMap}/>
      {this.state.hasError && <Error toggleError={this.toggleError}/>}
    </>
    
  );
}
}


            
            
            
            

export default App;
