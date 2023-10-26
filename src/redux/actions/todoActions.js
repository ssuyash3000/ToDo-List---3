//Action constansts
export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "Toggle Todo";
export const REMOVE_TODO = "Remvoe Todo";
export const RESET_TODOS = "Reset Todos"
//Action Creators
export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (time) => ({ time, type: TOGGLE_TODO });
export const removeTodo = (time) => ({ time, type: REMOVE_TODO });
export const resetTodos = () => ({type: RESET_TODOS}) 