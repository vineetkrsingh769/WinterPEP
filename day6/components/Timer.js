import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup interval on unmount or stop
  }, [isRunning]);

  // Start the timer
  const handleStart = () => setIsRunning(true);

  // Stop the timer
  const handleStop = () => setIsRunning(false);

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <p>Time : {seconds} seconds</p>
      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
