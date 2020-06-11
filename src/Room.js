import React, { useState } from "react";
import "./App.css";

function Room() {
  let [count, setCount] = useState(1);
  let [isDay, setDay] = useState(false);
  return (
    <div className={`content ${isDay ? "day" : ""}`}>
      <h1>Counter: {count}</h1>
      <br />
      <button onClick={() => setCount(++count)}>Add Count</button>
      <br />
      <button onClick={() => setDay(!isDay)}>Day/Night</button>
    </div>
  );
}

export default Room;
