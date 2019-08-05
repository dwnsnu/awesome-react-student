import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      {/* {this.props.todos} */}
      {/* {todos} */}
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </ul>
    </div>
  );
}
