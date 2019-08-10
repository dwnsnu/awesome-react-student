import React, { Component } from "react";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";

class TodoListContainer extends Component {
  handle_delTodo = content => {
    console.log("hello");
    console.log(content);
    // console.log(this.props.todos)
    // this.props.delTodo(text);
  };

  render() {
    console.log(this.props);
    return (
      // <div style={{ border: "" }} >
      <TodoList todos={this.props.todos} />
      // </div>
    );
  }
}

export default connect(
  state => {
    console.log(state);
    return { todos: state.todos };
  },
  dispatch => {}
)(TodoListContainer);
