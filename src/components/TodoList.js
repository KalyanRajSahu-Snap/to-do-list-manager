import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <span>{todo.title}</span>
          <span style={{ marginLeft: "10px", color: todo.completed ? "green" : "red" }}>
            {todo.completed ? "Completed" : "Not Completed"}
          </span>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => updateTodoStatus(todo.id, !todo.completed)}
          >
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
