import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import "../index.css"

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "5px", marginRight: "10px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
