import React, { Component } from "react";
import "./styles/App.css";
import Card from "./Card";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card />
      </div>
    );
  }
}

export default App;
