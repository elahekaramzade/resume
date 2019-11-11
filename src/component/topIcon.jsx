import React from "react";

const TopIcon = props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(45px)",
        cursor: "pointer"
      }}
    >
      <div>
        <img src={props.icon} style={{ maxWidth: "30px",transform: "rotateX(180deg)" }} alt="" />
      </div>
    </div>
  );
};
export default TopIcon;
