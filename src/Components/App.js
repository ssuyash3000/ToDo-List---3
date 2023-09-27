import { useState } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  let [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
