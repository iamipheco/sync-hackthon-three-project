import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainLayout from './components/MainLayout';
import Dashboard from './components/pages/Dashboard';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import EmailVerify from './components/pages/EmailVerify';
import ForgetPassword from './components/ForgetPassword';


const App = () => {

  return (
    
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/verify" element={<EmailVerify />} />

        </Routes>
      </div>
      </AuthProvider>
   
  );
};

export default App;
