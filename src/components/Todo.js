import React from "react";

function Todo({ todo, removeTodo, completeTodo }) {
  function handleRemove() {
    removeTodo(todo.id);
  }

  function handleComplete() {
    completeTodo(todo.id, todo.completed);
  }

  const compTrue = "px-4 py-2 bg-green-200";
  const compFalse = "px-4 py-2 bg-gray-200";

  const styleTrue = { width: "15.2rem", textDecoration: "line-through" };
  const styleFalse = { width: "15.2rem" };

  return (
    <div className="flex justify-center py-2 px-4">
      <input
        className="px-2 py-2 my-4 mx-4"
        type="checkbox"
        checked={todo.completed}
        onChange={handleComplete}
      />
      <li
        style={todo.completed ? styleTrue : styleFalse}
        className={todo.completed ? compTrue : compFalse}
      >
        {todo.task}
      </li>
      <button className="px-3 py-2 bg-red-400" onClick={handleRemove}>
        🗑️
      </button>
    </div>
  );
}

export default Todo;
