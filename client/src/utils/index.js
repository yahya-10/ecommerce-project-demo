/**
 *
 * @returns {boolean} function to check if the user's token exists or not
 *
 */

export const isLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  }
  return false;
};

// console.log("utils/index.js", isLoggedIn());

export const logOut = () => {
  sessionStorage.removeItem("token");
};
