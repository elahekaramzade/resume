import React from "react";
import data from "../data";
import "./Navigation.css";
import { Link } from "react-scroll";

const Navigation = props => {
  return (
    <div className="Navigation">
      <div className="menu">
        {data.sections.map(m => {
          return (
            <Link
              activeClass="active"
              to={m.title}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              <p style={{ marginRight: "50px", cursor: "pointer" }}>
                {m.title}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="magic" onClick={props.onClick}>
        <img
          src="image/magic.png"
          alt=""
          style={{ width: "30px", margin: "10px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
export default Navigation;
