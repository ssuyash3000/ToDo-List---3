import { useEffect, useRef } from "react";
import styles from "../Style/AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
export default function AddTodo() {
  let textTodo = useRef();
  useEffect(() => {
    textTodo.current.focus();
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(textTodo.current.value));
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
