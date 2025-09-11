import { useEffect } from "react";

/**
 * Custom hook to call a function after a specified delay
 * @param {Function} callback - function to call after timeout
 * @param {number} delay - delay in milliseconds
 */
const useSplashTimeout = (callback, delay = 2000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (callback) callback();
    }, delay);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [callback, delay]);
};

export default useSplashTimeout;
