import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainTask from './MainTask'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    MainTask.run(this.refs.mycanvas.getContext("2d"))
  }

  render() {
    return (
      <canvas ref='mycanvas' width={300} height={300}>
      </canvas>
    );
  }
}

export default App;
