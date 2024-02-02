import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MainLayout from './components/MainLayout';
import Dashboard from './components/pages/Dashboard';

const App = () => {
  return (
    <div>
      <Routes>
      <Route
            path="/"
            element={<MainLayout />}
          >
            <Route index element={<Dashboard />} />
          </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
