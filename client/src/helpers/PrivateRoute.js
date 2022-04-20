import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

/**
 *
 * @param {*} component
 * @returns a specific route.
 * If the user wants to browse to private route, he'll be redirected to login or register
 */

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  const { user, isSuccess } = useSelector((state) => state.auth);
  /**
   * It checks first if the token exist in the user's browser to navigate to the right
   * path.
   */
  return user || isSuccess ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
