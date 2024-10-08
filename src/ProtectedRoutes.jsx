import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ user }) => {
  const location = useLocation();
  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default ProtectedRoutes;
