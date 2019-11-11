import React from "react";
import "./SkillCard.css";
const SkillCard = props => {
  const { skill } = props;
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={skill.content.image} alt="" width="200px" />
      </div>
      <div className="skill-title-wrapper">
        <h4>{skill.content.title}</h4>
      </div>
    </div>
  );
};
export default SkillCard;
