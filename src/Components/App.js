import { useState, useEffect } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  });

  const [doneTodos, setDoneTodos] = useState(() => {
    const storedDoneTodos = JSON.parse(localStorage.getItem("doneTodos"));
    return storedDoneTodos || [];
  });

  const addTodoToLS = () => {
    localStorage.setItem("todos", JSON.stringify([...todos]));
    localStorage.setItem("doneTodos", JSON.stringify([...doneTodos]));
  };

  useEffect(() => {
    addTodoToLS();
  });

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
