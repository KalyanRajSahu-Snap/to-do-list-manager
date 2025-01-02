import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoTable = () => {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Id</div>
      <div class="col col-2">Title</div>
      <div class="col col-3">Status</div>
      <div class="col col-4">Actions</div>
    </li>
    {todos.map((todo) => (<li class="table-row">
      <div class="col col-1" data-label="Todo Id">{todo.id}</div>
      <div class="col col-2" data-label="Title">{todo.title}</div>
      <div class="col col-3" data-label="Status">{todo.completed ? "Completed" : "Not Completed"}</div>
      <div class="col col-4" data-label="Actions"><button onClick={() => updateTodoStatus(todo.id, !todo.completed)}>
                  Toggle Status
                </button></div>
    </li>))}
    
    </ul>
    </div>
  );
};

export default TodoTable;
