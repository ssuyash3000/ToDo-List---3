import TodoCard from "./TodoCard";
import styles from "../Style/TodoList.module.css";
export default function TodoList(props) {
  return (
    <ul className={styles.todoList}>
      {(props.todos.length !== 0 && <h1>ToDos -</h1>) || (
        <h4>Add Some ToDos</h4>
      )}
      {props.todos.map((todo, index) => {
        return <TodoCard key={index} todo={todo} />;
      })}
    </ul>
  );
}
