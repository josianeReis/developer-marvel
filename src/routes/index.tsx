import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Access from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Characters from '../pages/Characters';
import PublicRoute from './Public.template';
import PrivateRoute from './Private.template';

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
