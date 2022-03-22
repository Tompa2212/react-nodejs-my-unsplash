import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useAuth();
  const { location } = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
