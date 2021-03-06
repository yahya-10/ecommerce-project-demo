import { useState } from "react";

/**
 *
 * @param {*} key
 * @param {*} initialValue
 * @returns A custom hook that changes the mode (light/dark)
 * and store the selected mode in the localStorage.
 */

export const useThemeHandler = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};
export default useThemeHandler;
