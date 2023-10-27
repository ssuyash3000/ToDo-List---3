import { createSlice } from "@reduxjs/toolkit";
// import {
//   TOGGLE_TODO,
//   ADD_TODO,
//   REMOVE_TODO,
//   RESET_TODOS,
// } from "../actions/todoActions";

const initialState = {
  todos: [
    {
      text: "DemoTodo1",
      time: new Date().getTime(),
      status: "Not Done",
      completionTime: null,
    },
    {
      text: "DemoTodo2",
      time: new Date().getTime() + 1,
      status: "Not Done",
      completionTime: null,
    },
  ],
};
//Reducer using Redux Toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        time: new Date().getTime(),
        status: "Not Done",
        completionTime: null,
      });
    },
    toggle: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload === todo.time) {
          return {
            ...todo,
            status: todo.status === "Not Done" ? "Done" : "Not Done",
            completionTime:
              todo.status === "Not Done" ? new Date().getTime() : null,
          };
        }
        return todo;
      });
    },
    remove: (state, action) => {
      state.todos = [
        ...state.todos.filter(({ time }) => time !== action.payload),
      ];
    },
    reset: (state, action) => {
      // /console.log(state.todos);
      state.todos.length = 0;
    },
  },
});
export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
//Reducer using Redux
// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             time: new Date().getTime(),
//             status: "Not Done",
//             completionTime: null,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
// todos: state.todos.map((todo) => {
//   if (action.time === todo.time) {
//     return {
//       ...todo,
//       status: todo.status === "Not Done" ? "Done" : "Not Done",
//       completionTime:
//         todo.status === "Not Done" ? new Date().getTime() : null,
//     };
//   }
//   return todo;
// }),
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter(({ time }) => time !== action.time),
//       };
//     case RESET_TODOS:
// return {
//   ...state,
//   todos: [],
// };
//     default:
//       return state;
//   }
// }
