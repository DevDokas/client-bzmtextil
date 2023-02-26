import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from '../services/axios';

// Pages
import Home from '../pages/pageHome/pageHome';
import About from '../pages/pageAbout';
import Page404 from '../pages/page404/page404';
import WhatsApp from '../pages/pageWhatsapp';
import SAC from '../pages/pageSAC';

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
      <Route path="/sac/" element={<SAC />} />
      {/* WhatsApp Page */}
      <Route path="/whatsapp-contact" element={<WhatsApp />} />
      {/* Tecidos */}
      <Route path="/tecidos" element={<About />} />
      {/**/}
      <Route path="/rendas" element={<About />} />
      {/**/}
      <Route path="/aviamentos" element={<About />} />
      {/* Page 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
