// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Users from '../../pages/Users';

const ProtectedRoute = () => {
  const isAuthenticated  = useSelector(store => store.auth.isAuthenticated);

  console.log("Authenticated?", isAuthenticated);

  return isAuthenticated ? (
    <Route element={<Users/>} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
