import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cityName: ''
    }
  }
  getPlace = () => {
    console.log('button Pressed');
    let apiKey = 'pk.f2c50aa80b0fb6ac48bb87cff3cde9d4';
    let URL =  `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.state.cityName}&format=json`;
    console.log(URL);
    let placeData = axios.get(URL);
    console.log(placeData);
  }
  render(){
  return (
    <>
    <h1> Proof Of Life</h1>
    <h3>{this.state.cityName}</h3>
    <input onChange={(e) => this.setState({cityName: e.target.value})}>
    </input>
    <button onClick={this.getPlace}>Search</button>
    </>
    
  );
}
}

export default App;
