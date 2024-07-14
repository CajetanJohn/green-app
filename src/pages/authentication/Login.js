import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/login.css';
import PrimaryButton from '../../materials/pr-btn';

const SignInPage = () => {
  const navigate = useNavigate(); 


  const authenticateUser = () => {
    return navigate('/')
  }

  return (
    <div className="signInPage">
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
            <span>Welcome again! <br/>Please log in</span>
        </div>
      </div>

      <div className='login-image-container'>
        <img src={require('../../assets/images/login-img.png')} alt="Login Image" />
      </div>

      <div className='login-form-inputs'>
        
      </div>
      
      

      <div className="login-button">
        <PrimaryButton onClick={() => authenticateUser()}>Login</PrimaryButton>
      </div>

      <div className="signin-text-link">
        <span>New here? </span>
        <span className="alreadyHaveAnContainer" onClick={() => navigate("/register")}> create account</span>
      </div>

    </div>
  );
};

export default SignInPage;

