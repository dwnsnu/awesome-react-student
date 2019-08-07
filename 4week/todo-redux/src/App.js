import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import AddTodoContainer from "./containers/AddTodoContainer";
function App() {
  return (
    <div className="App">
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
}
export default App;
