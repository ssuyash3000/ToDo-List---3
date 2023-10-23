import styles from "../Style/TodoCard.module.css";
export default function TodoCard({ todo, todos, setTodos }) {
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
  const handleDone = (status, time) => {
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
  const handleDelete = (status, time) => {
    let newTodoList = todos.filter((todo) => todo.time !== time);
    setTodos([...newTodoList]);
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
            handleDone(todo.status, todo.time);
          }}>
          {todo.status === "Not Done" ? "Done" : "Not Done"}
        </button>
        <button
          className={styles.delete}
          onClick={() => {
            handleDelete(todo.status, todo.time);
          }}>
          Delete
        </button>
      </div>
    </li>
  );
}
