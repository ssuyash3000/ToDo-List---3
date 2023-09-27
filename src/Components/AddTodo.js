import { useRef } from "react";
import styles from "../Style/AddTodo.module.css";
export default function AddTodo(props) {
  let textTodo = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: textTodo.current.value,
      time: new Date().getTime(),
    };
    props.setTodos((prevState) => [...prevState, newTodo]);
    textTodo.current.value = "";
  };
  return (
    <div className={styles.addTodo}>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <label htmlFor="inputTodo">Enter your to-do</label>
        <input
          id="inputTodo"
          required
          ref={textTodo}
          type="text"
          placeholder="Enter your todo title here"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
