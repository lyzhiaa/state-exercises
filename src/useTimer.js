import { useEffect, useRef, useState } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  //   store audio id
  const audioRef = useRef(new Audio("../public/relax.mp3"));
  //   useEffect(() => {
  //     if (isRunning) {
  //       intervalRef.current = setInterval(() => {
  //         setSeconds((prev) => prev + 1);
  //       }, 1000);
  //     }

  //     return () => clearInterval(intervalRef.current);
  //   }, [isRunning]);

  // stop sound
  const stopSound = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  //Create countdown founction
  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
    // if the time is equal to 0
    if (seconds === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);

      //   play sound
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, seconds]);

  //   // handle start and pause
  //   const handleStartPause = () => {
  //     setIsRunning((prev) => !prev);
  //   };

  //   const handleReset = () => {
  //     clearInterval(intervalRef.current);
  //     setSeconds(0);
  //     setIsRunning(false);
  //   };

  const handleStartPause = () => {
    if (seconds > 0) {
        stopSound();
      setIsRunning((prev) => !prev);
    }
  };

  const setTime = (value) => {
    clearInterval(intervalRef.current);
    setSeconds(value);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  return {
    seconds,
    isRunning,
    handleStartPause,
    handleReset,
    setTime,
    stopSound
  };
}
