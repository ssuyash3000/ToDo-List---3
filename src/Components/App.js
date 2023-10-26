// import { useState, useEffect } from "react";
import "../Style/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import useLocalStorage from "./useLocalStorage";
import { Provider } from "react-redux";
import { todoStore } from "../redux/store";
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
  const addTodo = (text) => {
    let newTodo = {
      text,
      time: new Date().getTime(),
      status: "Not Done",
      completionTime: null,
    };
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const toggleTodo = (time) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (time === todo.time) {
          return {
            ...todo,
            status: todo.status === "Not Done" ? "Done" : "Not Done",
            completionTime:
              todo.status === "Not Done" ? new Date().getTime() : null,
          };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  const removeTodo = (time) => {
    let newTodoList = todos.filter((todo) => todo.time !== time);
    setTodos([...newTodoList]);
  };
  return (
    <div className="App">
      <Provider store={todoStore}>
        <div className="feature-ctn">
          <AddTodo addTodo={addTodo} />
          <button className="reset-btn" onClick={handleResetButton}>
            Reset
          </button>
        </div>
        <TodoList
          // todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Provider>
    </div>
  );
}

export default App;
