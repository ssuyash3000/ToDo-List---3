import TodoCard from "./TodoCard";
import styles from "../Style/TodoList.module.css";
import { useSelector } from "react-redux";

export default function TodoList() {
  // const todos = store.getState().todos; // -> not recommended
  const todos = useSelector((state) => {
    // console.log(state);
    return state.todoReducer.todos;
  }); // -> recommended way
  let cmp = (a, b) => {
    return a.time - b.time;
  };
  let doneTodos = 0;
  const sortedTodos = [...todos].sort(cmp);
  // console.log(todos);
  return (
    <div className={styles.todoListCtn}>
      {(todos.length !== 0 && <h1>ToDos -</h1>) || <h4>Add Some ToDos</h4>}
      <ul className={styles.todoList}>
        {sortedTodos.map((todo, index) => {
          if (todo.status !== "Done") {
            return <TodoCard key={index} todo={todo} />;
          } else {
            doneTodos++;
            return "";
          }
        })}
        {doneTodos !== 0 && <hr />}
        {sortedTodos.map((todo, index) => {
          if (todo.status === "Done") {
            return <TodoCard key={index} todo={todo} />;
          } else {
            return "";
          }
        })}
      </ul>
    </div>
  );
}
