import TodoCard from "./TodoCard";
import styles from "../Style/TodoList.module.css";
import { useEffect } from "react";
export default function TodoList(props) {
  let cmp = (a, b) => {
    return a.time - b.time;
  };

  return (
    <div className={styles.todoListCtn}>
      {((props.todos.length !== 0 || props.doneTodos.length !== 0) && (
        <h1>ToDos -</h1>
      )) || <h4>Add Some ToDos</h4>}
      <ul className={styles.todoList}>
        {props.todos.sort(cmp).map((todo, index) => {
          return (
            <TodoCard
              key={index}
              todo={todo}
              todos={props.todos}
              setDoneTodos={props.setDoneTodos}
              setTodos={props.setTodos}
            />
          );
        })}
        {props.doneTodos.length !== 0 && <hr />}
        {props.doneTodos.sort(cmp).map((todo, index) => {
          return (
            <TodoCard
              key={index}
              todo={todo}
              doneTodos={props.doneTodos}
              setDoneTodos={props.setDoneTodos}
              setTodos={props.setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
}
