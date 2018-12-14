import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Recommand from '../components/Recommand';
import FooterPage from '../components/FooterPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/> 
          <Main/>
          <Recommand/>
          <FooterPage/>
      </div>
    );
  }
}

export default App;
