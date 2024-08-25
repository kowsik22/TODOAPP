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
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <circle r="8" cx="10" cy="10" fill="red" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
