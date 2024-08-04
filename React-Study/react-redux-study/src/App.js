import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Admin/Header/Header";

import Centre from "./Admin/Centre/Centre";

import Bottom from "./Admin/Bottom/Bottom";

// redux 学习 https://segmentfault.com/a/1190000011474522

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app_header">
          <img src={logo} className="app_logo" alt="logo" />
        </header>
        <section className="section">
          <Header/>
          <Centre/>
          <Bottom/>
        </section>
      </div>
    );
  }
}


export default App;
