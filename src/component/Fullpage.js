import React from "react";
import "./Fullpage.css";
const Fullpage = (props)=> {
    const { children } = props;
    return (
      <div className={`fullpage ${props.className || ""}`}>{children}</div>
    )
}
export default Fullpage;
