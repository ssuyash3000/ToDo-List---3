//Action constansts
export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "Toggle Todo";

//Action Creators
export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (time) => ({ time, type: TOGGLE_TODO });
