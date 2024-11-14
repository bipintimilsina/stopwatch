import React, { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });

  const [status, setStatus] = useState();

  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;

  function start() {
    myfun();
    console.log("hey")
    setStatus(setInterval(myfun, 10));
  }

  function myfun() {
    if (updMilli === 100) {
      updMilli = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }

    updMilli++;
    // console.log(updMilli)
    setTime({hr:updHr,min:updMin,sec:updSec,milli:updMilli})
  }

  function stop() {
    clearInterval(status)
  }

  function reset() {
clearInterval(status)
    setTime({hr:0,min:0,sec:0,milli:0})
  }

  return (
    <div className="contain flex justify-center">
      <div className=" stopwatch my-7 border-black p-7 rounded-2xl  border-2 px-10">
        <div className="display text-center text-4xl mb-2">
          {time.hr + ":" + time.min + ":" + time.sec + ":" + time.milli}
        </div>
        <div className="controls flex gap-2">
          <button
            className="start-button  bg-green-500 text-white px-2 rounded-md font-bold"
            onClick={start}
          >
            Start
          </button>
          <button
            className="stop-button bg-red-500 text-white px-2 rounded-md font-bold "
            onClick={stop}
          >
            Stop
          </button>
          <button
            className="reset bg-blue-500 text-white px-2 rounded-md font-bold"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
