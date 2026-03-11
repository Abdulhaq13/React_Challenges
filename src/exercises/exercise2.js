import { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import "./exercise2.css";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// function Step() {
//   const [step, setStep] = useState(1);
//   function addStep() {
//     setStep((curStep) => curStep + 1);
//   }
//   function prevStep() {
//     setStep((curStep) => (curStep > 0 ? curStep - 1 : curStep));
//   }
//   return (
//     <div className="step">
//       <button onClick={prevStep}>-</button>
//       <p>Step:{step}</p>
//       <button onClick={addStep}>+</button>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(1);
//   function addCount() {
//     setCount((curCount) => curCount + 1);
//   }
//   function subCount() {
//     setCount((curCount) => curCount - 1);
//   }
//   return (
//     <div className="count">
//       <button onClick={subCount}>-</button>
//       <p>Count:{count}</p>
//       <button onClick={addCount}>+</button>
//     </div>
//   );
// }

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
