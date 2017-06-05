import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainTask from './canvas/MainTask'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    MainTask.setup(this.refs.mycanvas.getContext("2d"))





  }

  render() {
    return (
      <canvas id='canvas' ref='mycanvas' width={800} height={800}>
      </canvas>
    );
  }
}

export default App;
