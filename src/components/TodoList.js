import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, completeTodo }) {
  return (
    <ul className="flex-column py-2">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
