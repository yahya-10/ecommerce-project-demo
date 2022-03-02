export const isLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  }
  return false;
};

export const logOut = () => {
  sessionStorage.removeItem("token");
};
