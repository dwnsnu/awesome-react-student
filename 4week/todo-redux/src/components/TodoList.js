import React from "react";
import Todo from "../components/Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      {/* {this.props.todos} */}
      {/* {todos} */}
      <ul>
        {todos.map((todo, index) => (
          <div style={{ border: "" }}>
            <Todo key={index} {...todo} />
          </div>
        ))}
      </ul>
    </div>
  );
}
