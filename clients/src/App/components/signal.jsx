import React from "react";

export default (function Signal(props) {
  const color = props.color;
  return (
    <div className="box">
      <div className="circle" style={color.red}>
        <span className="title">Red (5 sec)</span>
      </div>
      <div className="circle" style={color.yellow}>
        <span className="title">Yellow (10 sec)</span>
      </div>
      <div className="circle" style={color.green}>
        <span className="title">Green (15 sec)</span>
      </div>
    </div>
  );
});
