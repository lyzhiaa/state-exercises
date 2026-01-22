import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error();
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-[600px] m-5 border border-blue-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="px-3 py-2 border border-blue-800 rounded"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" className="m-5 pl-5" />
            <span
              className="text-xl "
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => dispatch({ type: "toggle", id: todo.id })}
            >
              {todo.text}
            </span>
            <button
              className=" text-red-800 px-12"
              onClick={() => dispatch({ type: "remove", id: todo.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
