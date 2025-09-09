import { useState, useEffect } from "react";

/**
 * Custom hook to manage splash screen and main app visibility
 * @param {number} splashDuration - total time splash screen is visible (ms)
 * @param {number} fadeDuration - duration of splash fade-out (ms)
 */
const useAppHooks = (splashDuration = 2000, fadeDuration = 500) => {
  const [showMainApp, setShowMainApp] = useState(false);
  const [fadeSplash, setFadeSplash] = useState(true);

  useEffect(() => {
    // Start a timer for splash duration minus fade duration
    const timer = setTimeout(() => {
      setFadeSplash(false); // trigger fade out
      // Show main app after fade duration
      setTimeout(() => setShowMainApp(true), fadeDuration);
    }, splashDuration - fadeDuration);

    return () => clearTimeout(timer);
  }, [splashDuration, fadeDuration]);

  return { showMainApp, fadeSplash };
};

export default useAppHooks;
