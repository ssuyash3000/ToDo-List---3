// import { useState, useEffect } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
// import useLocalStorage from "./useLocalStorage";
import { Provider } from "react-redux";
import { todoStore } from "../redux/store";
// import { resetTodos } from "../redux/actions/todoActions";
import { todoActions } from "../redux/reducers/todoReducers";
function App() {
  const handleResetButton = () => {
    todoStore.dispatch(todoActions.reset());
  };

  return (
    <div className="App">
      <Provider store={todoStore}>
        <div className="feature-ctn">
          <AddTodo />
          <button className="reset-btn" onClick={handleResetButton}>
            Reset
          </button>
        </div>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
