import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import AddTodo from "./containers/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoListContainer />
    </div>
  );
}
export default App;
