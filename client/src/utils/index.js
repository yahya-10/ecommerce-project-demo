import { useState, useEffect } from "react";

/**
 *
 * @returns {boolean} function to check if the user's token exists or not
 *
 */

// const [loggingStatus, setUserStatus] = React.useState(false);

export const isLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  }
  return false;
};

// console.log("utils/index.js", isLoggedIn());

export const logOut = () => {
  sessionStorage.removeItem("token");
  window.location.reload();
};

// export const ControlAuth = () => {
//   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       setIsAuth(true);
//     }
//   }, []);

//   return { isAuth };
// };
