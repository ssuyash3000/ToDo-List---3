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
  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const toggleTodo = (status, time) => {
    if (status === "Not Done") {
      let currTodo = todos.filter((todo) => todo.time === time);
      let newTodoList = todos.filter((todo) => todo.time !== time);
      currTodo[0].status = "Done";
      currTodo[0].completionTime = new Date().getTime();
      setTodos([...newTodoList, currTodo[0]]);
    } else {
      let currTodo = todos.filter((todo) => todo.time === time);
      let newTodoList = todos.filter((todo) => todo.time !== time);
      currTodo[0].status = "Not Done";
      currTodo[0].completionTime = null;
      setTodos([...newTodoList, currTodo[0]]);
    }
  };
  const removeTodo = (time) => {
    let newTodoList = todos.filter((todo) => todo.time !== time);
    setTodos([...newTodoList]);
  };
  return (
    <div className="App">
      <div className="feature-ctn">
        <AddTodo addTodo={addTodo} />
        <button className="reset-btn" onClick={handleResetButton}>
          Reset
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
