// import { useState, useEffect } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import useLocalStorage from "./useLocalStorage";
function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  // const addTodoToLS = () => {
  //   localStorage.setItem("todos", JSON.stringify([...todos]));
  // };
  // useEffect(() => {
  //   addTodoToLS();
  // });
  const handleResetButton = () => {
    setTodos([]);
  };
  return (
    <div className="App">
      <div className="feature-ctn">
        <AddTodo setTodos={setTodos} />
        <button className="reset-btn" onClick={handleResetButton}>
          Reset
        </button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
