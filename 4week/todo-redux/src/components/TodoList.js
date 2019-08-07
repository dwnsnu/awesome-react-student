import React from "react";
import TodoContainer from "../container/TodoContainer";

export default function TodoList({ todos }) {
  return (
    <div>
      {/* {this.props.todos} */}
      {/* {todos} */}
      <ul>
        {todos.map((todo, index) => (
          <div style={{ border: "solid" }}>
            <Todo key={index} {...todo} />
          </div>
        ))}
      </ul>
    </div>
  );
}
