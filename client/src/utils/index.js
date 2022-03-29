/**
 *
 * @returns {boolean} function to check if the user's token exists or not
 *
 */

/**
 * Checks if the token exists in the browser
 * then returns true else returns false
 */
export const isLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  }
  return false;
};

/**
 * Remove the existant token from the browser.
 */
export const logOut = () => {
  sessionStorage.removeItem("token");
  window.location.reload();
};
