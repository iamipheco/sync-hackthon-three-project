import React, { useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default Dashboard;
