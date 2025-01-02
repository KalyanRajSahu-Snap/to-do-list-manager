// App.js
import React from "react";
import TodoProvider from "./components/TodoContext";
import TodoTable from "./components/TodoTable";
import AddTodo from "./components/AddTodo";
import Notification from "./components/Notification";
import "./index.css"

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Kalyan's Todo App</h1>
        <AddTodo />
        <TodoTable />
        <Notification />
      </div>
    </TodoProvider>
  );
};

export default App;
