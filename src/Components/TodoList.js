import TodoCard from "./TodoCard";
import styles from "../Style/TodoList.module.css";
import { useSelector } from "react-redux";

export default function TodoList({ toggleTodo, removeTodo }) {
  // const todos = store.getState().todos; // -> not recommended
  const todos = useSelector((state) => state.todos); // -> recommended way
  let cmp = (a, b) => {
    return a.time - b.time;
  };
  let doneTodos = 0;
  return (
    <div className={styles.todoListCtn}>
      {(todos.length !== 0 && <h1>ToDos -</h1>) || <h4>Add Some ToDos</h4>}
      <ul className={styles.todoList}>
        {todos.sort(cmp).map((todo, index) => {
          if (todo.status !== "Done") {
            return (
              <TodoCard
                key={index}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          } else {
            doneTodos++;
            return "";
          }
        })}
        {doneTodos !== 0 && <hr />}
        {todos.sort(cmp).map((todo, index) => {
          if (todo.status === "Done") {
            return (
              <TodoCard
                key={index}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          } else {
            return "";
          }
        })}
      </ul>
    </div>
  );
}
