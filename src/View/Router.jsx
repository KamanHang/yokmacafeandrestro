import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarAnother from './component/SidebarAnother';
import Login from '../View/component/LoginPage';
import BOT from './component/Order/BOT';
import KOT from './component/Order/KOT';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/side' element={<SidebarAnother />} />
        <Route path='/bot' element={<BOT />} />
        <Route path='/kot' element={<KOT />} />

        {/* <Route path='/' element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
