import React, { Component } from "react";
import Action from "./Action";
import AddUser from "./AddUser";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Users from "./Users";

export default class MainApp extends Component {
  state = {
    udatas: ["Admin", "Manager", "QA"],
    hdata: "Welcome to default Header",
  };

  deleteAllUsers = () => {
    this.setState(() => {
      return {
        udatas: [],
      };
    });
  };
  addUserToState = (data) => {
    this.setState((prevState) => {
      return {
        udatas: prevState.udatas.concat(data),
      };
    });
  };

  componentDidMount() {
    console.log("called once during load first time");
  }
  componentDidUpdate() {
    console.log("called everytime when the state changes");
  }
  render() {
    return (
      <div>
        <Header hdata={this.state.hdata} />
        Welcome to MainApp
        <Action datalen={this.state.udatas.length > 0} />
        <AddUser adUsrToState={this.addUserToState} />
        <Users
          udatas={this.state.udatas}
          delAlUsrs={this.deleteAllUsers}
          datalen={this.state.udatas.length > 0}
        />
        <Counter />
        <Footer fdata="Welcome to default Footer" />
      </div>
    );
  }
}
