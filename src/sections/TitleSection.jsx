import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import data from "../data";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../component/downIcon";
import {Element, Link } from "react-scroll";

class TitleSection extends Component {
  constructor() {
    super();
    this.state = { color: "white" };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white"
    });
  };
  render() {
    return (
      <Element name="title" className="element">
        <Fullpage className="first">
          <div>
            <h1
              className="title"
              style={{ color: this.state.color }}
              onMouseOver={this.changeColor}
              onMouseLeave={this.changeColor}
            >
              {data.title}
            </h1>
          </div>
          <div>
            <h2> {data.subtitle}</h2>
          </div>
          <div>
            {Object.keys(data.links).map(m => {
              return <SocialIcon className="icon" url={data.links[m]} />;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <DownIcon icon={data.icons.down}></DownIcon>
        </Link>
      </Element>
    );
  }
}
export default TitleSection;
