import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = false;

  if (!auth) return <Navigate to="/" />;

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PrivateRoute;
