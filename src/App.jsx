import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { UserContext } from './utils/UserContext';
import Dashboard from './components/Dashboard';
import { init } from './utils/helpers';

const App = () => {
  const navigate = useNavigate();
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
        navigate('/dashboard');
      },
      () => {
        setCheckingAuth(false);
        // navigate('/');
      },
    );
  }, [setUser, navigate]);

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
          {/* <Route
            path="/"
            element={< />}
          >
            <Route index element={<Dashboard />} />
          </Route> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
