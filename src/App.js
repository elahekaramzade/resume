import React, { Component } from "react";
import SnowStorm from "react-snowstorm";

import Navigation from "./component/Navigation";
import TitleSection from "./sections/TitleSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import SkillsSection from "./sections/SkilsSection.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { snow: true};
    this.changeSnow = this.changeSnow.bind(this);
  }
  changeSnow = () => {
    this.setState({
      snow: this.state.snow === true ? false : true
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.snow?<SnowStorm />:""}
        <Navigation onClick={()=>{this.changeSnow()}}></Navigation>
        <TitleSection />
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
      </div>
    );
  }
}

export default App;
