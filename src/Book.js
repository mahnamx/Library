import React from "react";
import { useStore } from "./Library";

const Todo = ({ todo }) => {
  const handleToggleFromStore = useStore((state) => state.handleToggle);
  const removeBook = useStore((state) => state.removeBook);
  const loadUpdateForm = useStore((state) => state.loadUpdateForm);
  const handleClick = (e) => {
    e.preventDefault();
    handleToggleFromStore(e.currentTarget.id);
  };

  return (
    <div>
      <li
        id={todo.id}
        key={todo.id + todo.title}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className={todo.complete ? "todo strike" : "todo"}
      >
        {todo.title} &nbsp;
      </li>
      <button onClick={() => removeBook(todo.id)} className="delete">
        Delete
      </button>
      &nbsp;
      <button onClick={() => loadUpdateForm(todo)} className="update">
        Update
      </button>
    </div>
  );
};

export default Todo;
