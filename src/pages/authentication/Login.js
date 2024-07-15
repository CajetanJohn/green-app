import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/login.css';
import PrimaryButton from '../../materials/pr-btn';
import Input from '../../materials/input';
import { Link } from 'react-router-dom'; 

const SignInPage = () => {
  const navigate = useNavigate(); 
  const [username, setUsername]= useState({name:'', value:''})
  const [password, setPassword]= useState({name:'', value:''})


  const authenticateUser = (e) => {
    e.preventDefault();
    return navigate('/main')
  }

  return (
    <div className="page-container">
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
        <div className='sign-in'>
          <main>
            <div className='sign-form-section'>
              <form className='sign-in-form' noValidate>
                    <Input 
                      type='text' 
                      id="username" 
                      name="username" 
                      labelText="Username" 
                      required={true} 
                      value={username.value} 
                      onChange={(name, value) => this.handleInputChange(name, value)} 
                      error={username.error} // Pass error message for username
                    />
                    <Input 
                      type='password' 
                      id="password" 
                      name="password" 
                      labelText="Password" 
                      required={true} 
                      value={password.value} 
                      onChange={(name, value) => this.handleInputChange(name, value)} 
                      error={password.error} // Pass error message for password
                    />
                    <div className='forgot-password-div'><Link to='/forgot-password'>forgot password ?</Link></div>
                    <div className="login-button">
                      <PrimaryButton onClick={(e) => authenticateUser(e)}>Login</PrimaryButton>
                    </div>
              </form>
              <div className='sign-navigation-btn'>create account? <Link to="/register">Sign-up</Link></div>
            </div>
          </main>
        </div>              
      </div>

    </div>
  );
};

export default SignInPage;

