import React, { Component } from "react";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        def
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default connect(
  state => {
    console.log(state);
    return { todos: state.todos };
  },
  dispatch => {}
)(Todos);
