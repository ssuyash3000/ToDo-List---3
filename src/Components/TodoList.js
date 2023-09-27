import TodoCard from "./TodoCard";
export default function TodoList(props) {
  return (
    <div className="todoList">
      {props.todos.map((todo, index) => {
        return <TodoCard key={index} todo={todo} />;
      })}
    </div>
  );
}
