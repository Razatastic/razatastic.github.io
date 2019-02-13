import React, { Component } from "react";
import "./styles/App.css";
import Card from "./Card";
import { Button, DatePicker } from "antd";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Projects</h1>
        <Button>Submit</Button>
        <Card />
        <DatePicker />
      </div>
    );
  }
}

export default App;
