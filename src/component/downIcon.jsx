import React from "react";

const DownIcon = props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-34px",
        transform: "translateY(-45px)",
        cursor: "pointer"
      }}
    >
      <div>
        <img src={props.icon} style={{ maxWidth: "30px" }} alt="" />
      </div>
    </div>
  );
};
export default DownIcon;
