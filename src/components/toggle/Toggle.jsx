import React from "react";
import "./toggle.css";
import moon from "../../image/moon.png";
import sunny from "../../image/sunny.png";
import { useState } from "react/cjs/react.development";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useState(ThemeContext);
  const handelClick = () => {
    // theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={moon} alt="" className="t-img" />
      <img src={sunny} alt="" className="t-img" />
      <div className="t-bouton" onClick={handelClick} 
        // style={{left: theme.state.darkMode ? 0 : 25}}      
      ></div>
    </div>
  );
};

export default Toggle;
