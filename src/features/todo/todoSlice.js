/* This is the file which probabaly helps us to create a big object
 which we can actually export as well,
 this slice helps us to track the initial state of the store and 
 reducers are gather in one place.
 */

//reducers communicate with the store and there are multiple reducers which are responsible for the change or updation of the stores state
//payload is nothing but data
import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export let todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export let { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
