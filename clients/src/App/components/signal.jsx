import React from "react";

export default (function signal(props) {
  const color = props.color;
  return (
    <div className="box">
      <div className="circle" style={color.red}>
        Red
      </div>
      <div className="circle" style={color.yellow}>
        Yellow
      </div>
      <div className="circle" style={color.green}>
        Green
      </div>
    </div>
  );
});
