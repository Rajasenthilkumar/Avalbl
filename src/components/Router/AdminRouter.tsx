import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../auth/Login';

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/signin" element={<LoginForm />} />
    </Routes>
  );
};

export default AdminRouter;
