import { useState } from "react";

import "./exercise4.css";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);
  const days = range * count;
  const date = new Date();
  date.setDate(date.getDate() + days);
  function handleChangeRange(e) {
    setRange(Number(e.target.value));
    console.log(e.target.value);
  }
  function handleChangeText(e) {
    if (e.target.value === "") {
      setCount("");
      return;
    }
    setCount(Number(e.target.value));
    console.log(e.target.value);
  }

  function handleReset() {
    setRange(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={range}
          onChange={handleChangeRange}
        />
        <span>{range}</span>
      </div>

      <div>
        <button onClick={() => setCount((s) => s - 1)}>-</button>
        <input type="number" value={count} onChange={handleChangeText} />
        <button onClick={() => setCount((s) => s + 1)}>+</button>
      </div>

      <p>
        <span>
          {count === 0 || count === ""
            ? "Today is "
            : count < 1
              ? `${Math.abs(days)} days ago was `
              : `${days} days from today is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || range !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
