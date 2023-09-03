import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// TODO: improve isAuth validation
const PrivateRoute = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const isAuth = auth && auth.hashValue && auth.publicKey && auth.privateKey;

  if (!isAuth) return <Navigate to="/" />;

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PrivateRoute;
