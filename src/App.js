import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CatFinder from './components/CatFinder';
import CatDisplayer from './components/CatDisplayer';


class App extends Component {

  componentDidMount(){

  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <CatFinder/>
        <CatDisplayer/>
      </div>
    );
  }
}

export default App;
