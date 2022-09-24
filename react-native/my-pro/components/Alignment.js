import { Component } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default class Alignment extends Component {
  state = {
    initVal: "",
    data: [],
  };
  inputHandler = (val) => {
    this.setState({
      initVal: val,
    });
  };
  btnHandler = () => {
    Alert.alert("button clicked");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerData}>
          <TextInput
            placeholder="enter name"
            onChangeText={this.inputHandler}
            style={styles.textStyle}
          />
          <Button
            title="Add User"
            onPress={this.btnHandler}
            style={styles.btnStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  innerData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    width: "70%",
    backgroundColor: "gray",
  },
  btnStyle: {
    width: "30%",
  },
});
