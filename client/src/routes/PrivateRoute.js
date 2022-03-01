import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { isLoggedIn } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
