import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function Todos() {
  let todos = useSelector((state) => state.todos);

  let dispatch = useDispatch();
  return (
    <>
      <ul className="list-none flex flex-col items-center justify-center mt-5">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center
          bg-zinc-800 px-4 py-2 rounded w-3/4 max-w-lg "
            key={todo.id}
          >
            <div className="text-white  ">{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              <svg
                height="20"
                width="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-2 14H7L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M5 6l1-4h12l1 4" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
