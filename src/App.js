import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './assets/styles/globals.css';
import Installer from './utils/Installer';

const StartPage = React.lazy(() => import('./pages/startPage'));
const RegisterPage = React.lazy(() => import('./pages/authentication/Signup'));
const Main = React.lazy(() => import('./pages/screens/main'));
const SignInPage = React.lazy(() => import('./pages/authentication/Login'));


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router basename="/greenapp">
      <div className="app-container">
        <Installer />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <StartPage /> : <Navigate to="/login" />} />
            <Route path="/login" element={<SignInPage handleLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage handleLogin={handleLogin} />} />
            <Route path="/main" element={<Main handleLogin={handleLogin} />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
