import React, { Component } from 'react';
import Router from '../src/components/router/Router';
import './App.css';
import CardBase from "./components/Cards/CardBase/CardBase"
import CardCaro from './components/Cards/CardCaro/CardCaro';
import CardDavid from './components/Cards/CardDavid/CardDavid';


class App extends Component {
  render() {
    return (
      //<React.Fragment>
        //<Router />
        <div>
        <CardCaro/>
        </div>
        
      //</React.Fragment>
      
    );
  }
}

export default App;
