import {
  View,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";

import { Component } from "react";

export default class TouchableDemo extends Component {
  onPressButn() {
    Alert.alert("you tapped it");
  }
  onLongPressButn() {
    Alert.alert("you long pressed tapped it");
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressButn} underlayColor="red">
          <View style={styles.button}>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.onPressButn} underlayColor="red">
          <View style={styles.button}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onLongPress={this.onLongPressButn}
          underlayColor="red"
        >
          <View style={styles.button}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "green",
  },
});
