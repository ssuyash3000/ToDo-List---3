import { useDispatch } from "react-redux";
import styles from "../Style/TodoCard.module.css";
import { removeTodo, toggleTodo } from "../redux/actions/todoActions";
export default function TodoCard({ todo }) {
  const dispatch = useDispatch();
  const timeFormatter = (timeinMilli) => {
    // Create a new Date object using the timestamp
    const currentTime = new Date(timeinMilli);

    // Get hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Determine whether it's AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Add leading zeros to minutes and seconds if they are less than 10
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Create the formatted time string
    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    return formattedTime;
  };

  return (
    <li className={styles.todoCard}>
      <h3>Task - {todo.text}</h3>
      <h4>Added At - {timeFormatter(todo.time)}</h4>
      {(todo.completionTime != null && (
        <h4>Competed At - {timeFormatter(todo.completionTime)}</h4>
      )) || <h4>Not Completed Yet</h4>}
      <div className={styles.btnCtn}>
        <button
          className={styles.status}
          onClick={() => {
            // toggleTodo(todo.time);
            dispatch(toggleTodo(todo.time));
          }}>
          {todo.status === "Not Done" ? "Done" : "Not Done"}
        </button>
        <button
          className={styles.delete}
          onClick={() => {
            // removeTodo(todo.time);
            dispatch(removeTodo(todo.time));
          }}>
          Delete
        </button>
      </div>
    </li>
  );
}
