import { View, StyleSheet, Button, Alert } from "react-native";
import { Component } from "react";
import DisplayModal from "./DisplayModal";
import myimage from "../images/Krishna.jpeg";
export default class ModalDemo extends Component {
  state = {
    display: false,
  };
  loadModal() {
    this.setState((prevState) => {
      return {
        display: true,
      };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.loadModal()}
          title="modal demo"
          color="red"
        ></Button>

        <DisplayModal
          image={myimage}
          data="profile"
          display={this.state.display}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
});
