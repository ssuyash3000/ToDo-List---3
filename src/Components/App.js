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
    setTodos((prevTodos) => {
      const todoIndex = prevTodos.findIndex((todo) => {
        return time === todo.time;
      });
      if (status === "Not Done") {
        prevTodos[todoIndex].status = "Done";
        prevTodos[todoIndex].completionTime = new Date().getTime();
      } else {
        prevTodos[todoIndex].status = "Not Done";
        prevTodos[todoIndex].completionTime = null;
      }
      return [...prevTodos];
    });
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
