import styles from "../Style/TodoCard.module.css";
export default function TodoCard({
  todo,
  todos,
  setDoneTodos,
  setTodos,
  doneTodos,
}) {
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
      setTodos([...newTodoList]);
      currTodo[0].status = "Done";
      setDoneTodos((prevState) => [...prevState, currTodo[0]]);
    } else {
      let currTodo = doneTodos.filter((todo) => todo.time === time);
      let newTodoList = doneTodos.filter((todo) => todo.time !== time);
      setDoneTodos([...newTodoList]);
      currTodo[0].status = "Not Done";
      setTodos((prevState) => [...prevState, currTodo[0]]);
    }
  };
  const handleDelete = (status, time) => {
    if (status === "Not Done") {
      let currTodo = todos.filter((todo) => todo.time === time);
      let newTodoList = todos.filter((todo) => todo.time !== time);
      setTodos([...newTodoList]);
    } else {
      let currTodo = doneTodos.filter((todo) => todo.time === time);
      let newTodoList = doneTodos.filter((todo) => todo.time !== time);
      setDoneTodos([...newTodoList]);
    }
  };
  return (
    <li className={styles.todoCard}>
      <h3>Task - {todo.text}</h3>
      <h4>Added At - {timeFormatter(todo.time)}</h4>
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
