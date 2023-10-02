// import { useState, useEffect } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import useLocalStorage from "./useLocalStorage";
function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [doneTodos, setDoneTodos] = useLocalStorage("doneTodos", []);

  // const addTodoToLS = () => {
  //   localStorage.setItem("todos", JSON.stringify([...todos]));
  //   localStorage.setItem("doneTodos", JSON.stringify([...doneTodos]));
  // };

  // useEffect(() => {
  //   addTodoToLS();
  // });

  const handleResetButton = () => {
    setTodos([]);
    setDoneTodos([]);
  };
  return (
    <div className="App">
      <div className="feature-ctn">
        <AddTodo setTodos={setTodos} />
        <button className="reset-btn" onClick={handleResetButton}>
          Reset
        </button>
      </div>

      <TodoList
        todos={todos}
        doneTodos={doneTodos}
        setTodos={setTodos}
        setDoneTodos={setDoneTodos}
      />
    </div>
  );
}

export default App;
