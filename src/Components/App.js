import { useState, useEffect } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  let [todos, setTodos] = useState([]);
  let [doneTodos, setDoneTodos] = useState([]);

  useEffect(() => {
    let cmp = (a, b) => {
      return a.time - b.time;
    };
    setTodos([...todos.sort(cmp)]);
    setDoneTodos([...doneTodos.sort(cmp)]);
  }, [todos, doneTodos]);
  return (
    <div className="App">
      <AddTodo setTodos={setTodos} />
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
