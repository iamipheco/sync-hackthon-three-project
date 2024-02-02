import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { UserContext } from './utils/UserContext';

import { init } from './utils/helpers';
import MainLayout from './components/MainLayout';
import Dashboard from './components/pages/Dashboard';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkingAuth, setCheckingAuth] = useState(false);
  const [user, setUser] = useState({
    name: '',
    phone: '',
  });

  useEffect(() => {
    setCheckingAuth(true);
    init(
      (user) => {
        setUser(user);
        setCheckingAuth(false);
        // navigate('/');
      },
      () => {
        setCheckingAuth(false);
        if (!location.pathname.includes('signup')) {
          navigate('/signin');
        }
      },
    );
  }, [setUser, navigate, location]);

  if (checkingAuth) {
    return (
      <div>
        <h1>Please wait...</h1>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
