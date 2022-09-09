import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };
  reset = () => {
    this.setState((prevState) => {
      return {
        counter: (prevState.counter = 0),
      };
    });
  };
  render() {
    return (
      <div>
        <p>The counter is {this.state.counter}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
