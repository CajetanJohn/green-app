import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './assets/styles/globals.css';
import Installer from './utils/Installer';

import StartPage from './pages/startPage';
import RegisterPage from './pages/authentication/Signup'


const Main = lazy(() => import('./pages/screens/main'));
const SignInPage = lazy(() => import('./pages/authentication/Login'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Method to check if user is signed in
  const checkAuth = () => {
    const userLoggedIn = true;
    setIsLoggedIn(userLoggedIn);
  };

  useEffect(() => {
    checkAuth();
  }, []);


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Installer />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Main /> : <Navigate to="/StartPage" />} />
            <Route path="/login" element={<SignInPage handleLogin={handleLogin}/>} />
            <Route path="/register" element={<RegisterPage handleLogin={handleLogin}/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
