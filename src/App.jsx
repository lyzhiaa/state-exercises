import { useEffect, useReducer, useState } from "react";
import "./App.css";

function App() {
  // declare stare variable
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex ">
          <p className="text-6xl p-8 font-bold text-sky-300">{count1}</p>
          <p className="text-6xl p-8">➕</p>
          <p className="text-6xl p-8 font-bold text-red-300">{count2}</p>
          <p className="text-6xl p-8">🟰</p>
          <p className="text-6xl p-8 font-bold text-green-300">
            {count1 + count2}
          </p>
        </div>
        {/* button */}
        <div className="flex gap-5">
          {/* increament */}
          <button
            className="w-full text-2xl p-3 text-center bg-sky-300 rounded-lg"
            onClick={() => setCount1(count1 + 1)}
          >
            ➕
          </button>
          {/* decreament */}
          <button
            className="w-full text-2xl p-3 text-center bg-red-300 rounded-lg"
            onClick={() => setCount2(count2 + 1)}
          >
            ➕
          </button>
        </div>
      </div>
    </div>
  );
}

export function Counter() {
  // declare state variable
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]); // this effect runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increament</button>
    </div>
  );
}

// function Greeting
export function Greeting() {
  // declare state variable
  const [name, setName] = useState("Lyzhia");
  // write html code in jsx
  return (
    <div className="grid place-content-center p-8">
      <h2 className="text-6xl p-5">Good afternoon, {name}</h2>
      <button
        className="w-48 text-2xl p-3 text-center bg-sky-300 rounded-lg justify-center flex"
        onClick={() => {
          setName("Eung Lyzhia");
        }}
      >
        Change name
      </button>
    </div>
  );
}

// avoiding Redundant State
export function FullNameForm() {
  // declare state variable
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // fullName
  const fullName = `${firstName} ${lastName}`;

  return (
    <div>
      {/* firstName */}
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      {/* lastName */}
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="lastName"
      />
      {/* fullName */}
      <p>FullName: {fullName}</p>
    </div>
  );
}

//test with useReducer

// definded intial
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function Test() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="grid place-content-center h-screen">
      <p className="text-5xl">Count: {state.count}</p>
      <button
        className="text-5xl"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="text-6xl"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </div>
  );
}

export default function ExampleComponent() {
  // definded state
  const [count, setCount] = useState(0);

  // definde useEffect
  useEffect(() => {
    console.log(`count update : ${count}`);
  }, [count]); // count here is a dependency

  return (
    <div>
      <p>Current count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
}
