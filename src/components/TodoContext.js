import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState("");
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    // Fetch initial todos
    axios.get(apiUrl)
      .then(response => setTodos(response.data))
      .catch(err => console.error(err));
  }, []);

  const updateTodoStatus = (id, completed) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed } : todo));
    axios.post(apiUrl, { id, completed })
      .catch(err => console.error(err));
  };

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
    const newTodo = { userId: 1, id: lastId + 1, title, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setNotification("Added new item!");
    setTimeout(() => setNotification(""), 2000);
    axios.post(apiUrl, newTodo)
      .catch(err => console.error(err));
  };

  return (
    <TodoContext.Provider value={{ todos, updateTodoStatus, addTodo,notification  }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider as default };
