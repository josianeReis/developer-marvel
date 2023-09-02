import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './templates/PrivateRoute';
import PublicRoute from './templates/PublicRoute';
import Access from './pages/Login';
import Characters from './pages/Characters';
import PageNotFound from './pages/PageNotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<Access />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="Characters" element={<Characters />} />
      </Route>
    </Routes>
  );
};

export default Router;
