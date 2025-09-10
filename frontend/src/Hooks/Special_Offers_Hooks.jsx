import { useEffect, useState } from "react";

export const useCountdown = (initialHours = 2) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    let totalSeconds = initialHours * 60 * 60; // default 2 hours

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
        return;
      }
      totalSeconds--;

      const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const secs = String(totalSeconds % 60).padStart(2, "0");

      setTimeLeft(`${hrs}:${mins}:${secs}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [initialHours]);

  return timeLeft.split(":"); // returns [hrs, mins, secs]
};
