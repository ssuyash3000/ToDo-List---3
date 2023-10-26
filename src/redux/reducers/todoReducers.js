import { TOGGLE_TODO, ADD_TODO } from "../actions/todoActions";

const initialState = {
  todos: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todos,
          {
            text: action.text,
            time: new Date().getTime(),
            status: "Not Done",
            completionTime: null,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.time === todo.time) {
            return {
              ...todo,
              status: todo.status === "Not Done" ? "Done" : "Not Done",
              completionTime:
                todo.status === "Not Done" ? new Date().getTime() : null,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
