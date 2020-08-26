import React, { useState, useEffect } from "react";
import "./styles/main.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import "./App.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function completeTodo(id, completed) {
    const changed = todos;
    for (let index = 0; index < changed.length; index++) {
      const task = changed[index];
      if (task.id === id) {
        changed[index].completed = !completed;
        break;
      }
    }
    setTodos([...changed]);
  }

  return (
    <div
      className="box"
      style={{
        background: "white",
        width: "30rem",
        margin: "0 auto",
        border: "4px solid black",
        marginTop: "8rem",
      }}
    >
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
