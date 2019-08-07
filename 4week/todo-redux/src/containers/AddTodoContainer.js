import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../modules/actions";

class AddTodoContainer extends Component {
  state = {
    todo: ""
  };
  handleChange = e => {
    this.setState({ todo: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.todo;
    this.props.addTodo(text);
    this.setState({ todo: "" });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}
export default connect(
  state => {
    console.log(state);
  },
  dispatch => {
    return {
      addTodo: text => {
        dispatch(addTodo(text));
      }
    };
  }
)(AddTodoContainer);
