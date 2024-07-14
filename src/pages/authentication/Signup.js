import React, {useState} from "react";
import "../../assets/styles/register.css";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../../materials/pr-btn";

const RegisterPage = ({ navigation }) => {
    const [auth, setAuth] = useState(true);
    const navigate = useNavigate();

    const addUser =()=>{
        if(!auth){
            return null;
        }
        setAuth(true);
        return navigate('/login')
    }


  return (
    <div className="registerPage"> 

      <> 
        <img className="shapesIcon" src={require("../../assets/images/shapes.png")} alt="Shapes"/>
        <img className="shapesIcon1 vectorIconLayout" src={require("../../assets/images/shapes.png")} alt="Shapes"/>   
      </>

      <div className="welcome-message">
        <div className="greebin-trademark">
            <span className="welcome-to ">Welcome to</span>
            <span className="greenbin-welcome">GreenBin</span>
        </div>
        <div className="suggestive-message">
            <span>How you manage your waste. <br/> if not, then start now.</span>
        </div>
      </div>


       <div className="signup-form-input">
       </div>

       <div className="iAcceptTheTermsConditionParent groupChildLayout">
        <span className="iAcceptThe iAcceptTheTypo">I accept the terms & conditions</span>
        <div className="groupChild groupChildLayout" />
       </div>

       <div className="register-button">
        <PrimaryButton onClick={() => addUser()}>Register</PrimaryButton>
       </div>

       <div className="signin-text-link">
        <span>Already have an account? </span>
        <span className="alreadyHaveAnContainer" onClick={() => navigate("login")}> Login</span>
       </div>
    </div>
  );
};

export default RegisterPage;
