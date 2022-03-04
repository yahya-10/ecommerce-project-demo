import { useState } from "react";

/**
 *
 * @returns {string} token
 * This is a custom hook responsible for retrieving the token from the server
 * and stored in the browser's session storage.
 */

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };

  return {
    setToken: saveToken,
    token,
  };
};
