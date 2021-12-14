import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoute = () => {
  const { login } = useContext(UserContext);

  return login ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
