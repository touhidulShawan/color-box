import React from "react";
import "../assets/css/Box.css";
const Box = props => {
  return (
    <div className="box">
      <div
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          background: `${props.bg}`,
          margin: "20px",
          boxShadow: "2px 1.75px 3px rgba(0,0,0,0.4)"
        }}
      />
      <button onClick={props.removeBox}>Remove Box</button>
    </div>
  );
};

export default Box;
