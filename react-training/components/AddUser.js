import React, { Component } from "react";

export default class AddUser extends Component {
  addUser = (e) => {
    e.preventDefault();
    const name = e.target.elements.uname.value;
    this.props.adUsrToState(name);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          UserName: <input type="text" name="uname" />
          <button>add</button>
        </form>
      </div>
    );
  }
}
