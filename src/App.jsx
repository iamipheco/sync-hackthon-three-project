import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route
            path="/"
            element={< />}
          >
            <Route index element={<Dashboard />} />
          </Route> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
