import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import { SocialIcon } from "react-social-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation"></div>
        <div className="fullpage">
          <h1 className="title">{data.title}</h1>
        </div>
        <div>
          <h2> {data.subtitle}</h2>
        </div>
        <div>
          {Object.keys(data.links).map(m => {
            return <SocialIcon url={data.links[m]} />;
          })}
        </div>
        <div className="fullpage"></div>
        <div className="fullpage"></div>
      </div>
    );
  }
}

export default App;
