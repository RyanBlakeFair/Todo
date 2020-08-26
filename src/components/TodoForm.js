import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleInput(input) {
    setTodo({ ...todo, task: input.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      const id = uuidv4();
      addTodo({ ...todo, id });
    }
    setTodo({ ...todo, task: "" });
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        style={{ position: "absoute", paddingLeft: "2.75rem" }}
      >
        <input
          className="py-2 text-center bg-gray-300"
          style={{ width: "15.2rem" }}
          type="text"
          name="task"
          value={todo.task}
          onChange={handleInput}
          placeholder="What's next?"
        />
        <button className="bg-green-300 px-3 py-2 font-bold" type="submit">
          <span role="img" aria-label="bin">
            ➕
          </span>
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
