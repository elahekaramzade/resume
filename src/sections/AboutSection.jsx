import React from "react";
import Fullpage from "../component/Fullpage";
import data from "../data";
import {  Element } from "react-scroll";

const AboutSection = () => {
  return (
    <Element name="About" className="element">
      <Fullpage className="second">
      <h3>{data.sections[0].title}</h3>
      <p>{data.sections[0].items[0].content}</p>
    </Fullpage>
    </Element>

    
  );
};
export default AboutSection;
