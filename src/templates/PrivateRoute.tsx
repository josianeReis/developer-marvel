import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PrivateRoute;
