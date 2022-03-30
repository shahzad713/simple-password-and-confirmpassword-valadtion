import {ADD_TODO,DEL_TODO } from "./ActionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO, // mandatory key
    todo,
});

export const deleteTodo = (id) => ({
  type: DEL_TODO, // mandatory key
  id
});
