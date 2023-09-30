import React from "react";
import ReactDOM from "react-dom";

const stylePro={
  color:"red",
  fontSize:"30px",
  fontFamily:"sans-serif"
}


ReactDOM.render(
    <div>
    <h1 style={stylePro}>
      My Favourite
    </h1>
    <ul style={{
  color:"blue"
}}>
      <li>se</li>
      <li>hu</li>
      </ul>
    </div>,
    
    document.getElementById("root")
);