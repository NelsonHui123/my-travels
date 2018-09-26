import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Mallorca"
          country ="Spain"
          photo ="https://okrentacar.es/img/oficinas/mallorca-back.jpg"
          distance = "575 km"
        />
        <Travel
          destination="Johannesburg"
          country ="South Africa"
          photo ="https://trendscatchers.io/wp-content/uploads/2018/03/Johannesburg-Skyline-1600x900-1024x576.jpg"
          distance = "12.000 km"
        />
      </div>
    );
  }
}

export default App;