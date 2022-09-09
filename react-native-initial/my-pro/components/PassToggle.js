import { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export class PassToggle extends Component {
  state = {
    password: "",
    isPassVisible: true,
    toggleText: "Show",
  };

  handleHide = () => {
    const { isPassVisible } = this.state;
    if (isPassVisible) {
      this.setState({ isPassVisible: false });
      this.setState({ toggleText: "Hide" });
    } else {
      this.setState({ isPassVisible: true });
      this.setState({ toggleText: "Show" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry={this.state.isPassVisible}
          style={styles.textStyle}
        />
        <TouchableOpacity onPress={this.handleHide}>
          <Text style={{ fontSize: 20 }}>{this.state.toggleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    width: 400,
    height: 50,
    backgroundColor: "lightblue",
    color: "white",
    fontSize: 20,
  },
});
