import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/startPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="startPage">
      <img className="shapesIcon" src={require("../assets/images/shapes.png")} alt="Shapes" />
      <img className="shapesIcon1" src={require("../assets/images/shapes.png")} alt="Shapes" />
      <h1 className="greenbin">GreenBin</h1>
      <img className="startimgIcon" src={require("../assets/images/start-img.png")} alt="Start" />
      <p className="manageYourWaste">Manage your waste effectively!</p>
      <button className="getStartedBtn1" onClick={() => handleNavigation("/register")}>
        <span className="getStarted">Get Started</span>
      </button>
    </div>
  );
};

export default StartPage;
