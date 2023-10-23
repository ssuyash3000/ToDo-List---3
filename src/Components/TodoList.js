import TodoCard from "./TodoCard";
import styles from "../Style/TodoList.module.css";

export default function TodoList(props) {
  let cmp = (a, b) => {
    return a.time - b.time;
  };
  let doneTodos = 0;
  return (
    <div className={styles.todoListCtn}>
      {(props.todos.length !== 0 && <h1>ToDos -</h1>) || (
        <h4>Add Some ToDos</h4>
      )}
      <ul className={styles.todoList}>
        {props.todos.sort(cmp).map((todo, index) => {
          if (todo.status !== "Done") {
            return (
              <TodoCard
                key={index}
                todo={todo}
                todos={props.todos}
                setTodos={props.setTodos}
              />
            );
          } else {
            doneTodos++;
            return "";
          }
        })}
        {doneTodos !== 0 && <hr />}
        {props.todos.sort(cmp).map((todo, index) => {
          if (todo.status === "Done") {
            return (
              <TodoCard
                key={index}
                todo={todo}
                todos={props.todos}
                setTodos={props.setTodos}
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
