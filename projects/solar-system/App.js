import React, { Component } from 'react';
import Header from './src/components/Header';
import SolarSystem from './src/components/SolarSystem';
import Missions from './src/components/Missions';
import '../App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
