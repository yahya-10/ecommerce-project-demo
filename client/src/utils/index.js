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

export const logOut = () => {
  sessionStorage.removeItem("token");
  window.location.reload();
};
