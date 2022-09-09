import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Component } from "react";

export default class Allignment extends Component {
  state = {
    initName: "",
    data: [],
  };
  inputHandler = (val) => {
    this.setState({
      initName: val,
    });
  };
  butnHandler = () => {
    alert("clicked");
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
            onPress={this.butnHandler}
            style={styles.btnstyle}
          ></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
    // flexDirection: "column",
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
  btnstyle: {
    width: "30%",
  },
});
