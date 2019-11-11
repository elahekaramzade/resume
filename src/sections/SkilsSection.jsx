import React from "react";
import Fullpage from "../component/Fullpage";
import data from "../data";
import SkillCard from "../component/skilCard";
import {Link, Element } from "react-scroll";
import TopIcon from "../component/topIcon";

const SkillsSection = () => {
  return (
    <Element name="Skills" className="element">
      <Fullpage className="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(m => {
            return <SkillCard skill={m}></SkillCard>;
          })}
        </div>
        <Link
          activeClass="active"
          to="title"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <TopIcon icon={data.icons.down}></TopIcon>
        </Link>
      </Fullpage>
    </Element>
  );
};
export default SkillsSection;
