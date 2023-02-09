import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from '../services/axios';

// Pages
import Home from '../pages/pageHome/pageHome';
import About from '../pages/pageAbout/pageAbout';
import Page404 from '../pages/page404/page404';

import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      {/* About */}
      <Route path="/about/" element={<About />} />
      {/* Store */}
      <Route path="/store/" element={<Page404 />} />
      {/* SAC */}
      <Route path="/sac/" element={<Page404 />} />
      {/* Page 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
