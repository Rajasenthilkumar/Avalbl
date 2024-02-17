import * as React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import AdminRouter from './AdminRouter';
import LoginRouter from './LoginRouter';
import UserRouter from './UserRouter';
// import Welcome from '../auth/Welcome'
// import { Provider } from 'react-redux';
// import store from '../../reducer/store';

export const Routers = () => {
  return (
    // <Provider store={store}>
    // <Router>
    <Routes>
      {/* <Route path="/admin/*" element={<AdminRouter />} /> */}
      {/* <Route path="/user/*" element={<UserRouter />} /> */}
      <Route path="/login/*" element={<LoginRouter />} />
      <Route path="/user/*" element={<UserRouter />} />
      {/* <Route path="/welcome" element={<Welcome />} /> */}
      {/* Handle 404 - Not Found
        <Route component={NotFound} /> */}
    </Routes>
    // </Router>
    // </Provider>
  );
};
