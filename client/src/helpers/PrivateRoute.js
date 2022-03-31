import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { isLoggedIn } from "../utils";

/**
 *
 * @param {*} component
 * @returns a specific route.
 * If the user wants to browse to private route, he'll be redirected to login or register
 */

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  /**
   * It checks first if the token exist in the user's browser to navigate to the right
   * path.
   */
  // console.log("private_route", isLoggedIn());
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
