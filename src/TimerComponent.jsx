import { useState } from "react";
import { useTimer } from "./useTimer";

function TimerComponent() {
  const [input, setInput] = useState("");
  const {
    seconds,
    isRunning,
    handleStartPause,
    handleReset,
    setTime,
    stopSound,
  } = useTimer(10);
  // use useState to tracks the elapsed time using seconds
  //   const [seconds, setSeconds] = useState(0);
  //   // use for start and pause
  //   const [isRunning, setIsRunning] = useState(false);
  //   // use useRef to store interval ID
  //   const intervalRef = useRef(null);

  // setup an interval to increament seconds every second
  // the cleanup function ensure the interval stops
  // when the component unmounts
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         setSeconds(prevSeconds => prevSeconds + 1);
  //     }, 1000);
  //     return () => clearInterval(interval); //cleanup on unmount
  // },[]); // run onece on mount
  //   useEffect(() => {
  //     if (isRunning) {
  //       intervalRef.current = setInterval(() => {
  //         setSeconds((preSec) => preSec + 1);
  //       }, 1000);
  //     }

  //     // cleanup
  //     return () => clearInterval(intervalRef.current);
  //   }, [isRunning]);

  //   // handle start and pause
  //   const handleStartPause = () => {
  //     setIsRunning((prev) => !prev);
  //   };

  //   const handleReset = () => {
  //     clearInterval(intervalRef.current);
  //     setSeconds(0);
  //     setIsRunning(false);
  //   };

  const handleSetTime = () => {
    const value = Number(input);

    if (value > 0) {
      setTime(value);
      setInput("");
    }
  };
  return (
    // display the elapsed time and a button to reset the timer
    <div className="grid place-content-center m-8">
      <p
        className="text-7xl bg-clip-text text-transparent 
  bg-gradient-to-l from-lime-500 to-pink-500 
  font-bold rounded-full border-8 border-pink-600 
  w-[500px] h-[500px] 
  flex items-center justify-center justify-self-center"
      >
        {seconds} s
      </p>
      {/* input number and set time */}
      <div className="flex justify-center m-8 gap-5">
        {/* input the value of time */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="input the time"
          className="text-3xl caret-indigo-900 placeholder:text-gray-300 bg-clip-text text-transparent  bg-gradient-to-t from-blue-800 to-pink-600 font-bold p-3 outline-2 outline-pink-600 rounded-lg w-[600px]"
        />
        {/* handle set */}
        <button
          onClick={handleSetTime}
          className="text-3xl outline-2 outline-amber-600  bg-gradient-to-l from-lime-500 to-pink-500 p-3 rounded-md text-center w-[200px]"
        >
          Set Time
        </button>
      </div>
      <div className="flex gap-5 justify-center">
        {/* handle start and pause */}
        <button
          onClick={handleStartPause}
          className="bg-orange-500 hover:bg-gradient-to-r 
         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
         transition-all duration-500 text-3xl p-5 rounded-md text-center w-[250px]"
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          className="bg-rose-500 hover:bg-gradient-to-r 
         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
         transition-all duration-500 text-3xl p-5 rounded-md text-center w-[250px]"
          onClick={handleReset}
        >
          Reset{" "}
        </button>
        {/* stop sound */}
        <button
          onClick={stopSound}
          className="bg-pink-500 hover:bg-gradient-to-r 
         hover:from-blue-600 hover:via-yellow-500 hover:to-orange-500
         transition-all duration-500 text-3xl p-5 rounded-md text-center w-[250px]"
        >
          stop sound
        </button>
      </div>
    </div>
  );
}
export default TimerComponent;
