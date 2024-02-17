import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../HomeScreen/Navbar';

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/homescreen" element={<Navbar />} />
    </Routes>
  );
};

export default UserRouter;
