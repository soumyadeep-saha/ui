import { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class ScrollDemo extends Component {
  state = {
    names: [
      { uname: "admin", email: "admin@gmail.com" },
      { uname: "admin1", email: "admin@gmail.com" },
      { uname: "admin2", email: "admin@gmail.com" },
      { uname: "admin3", email: "admin@gmail.com" },
      { uname: "admin4", email: "admin@gmail.com" },
      { uname: "admin5", email: "admin@gmail.com" },
      { uname: "admin6", email: "admin@gmail.com" },
      { uname: "admin7", email: "admin@gmail.com" },
      { uname: "admin8", email: "admin@gmail.com" },
      { uname: "admin9", email: "admin@gmail.com" },
      { uname: "admin10", email: "admin@gmail.com" },
      { uname: "admin11", email: "admin@gmail.com" },
    ],
  };
  render() {
    let sw = Dimensions.get("window").width;
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <Image
            source={require("../images/nature.jpg")}
            style={[styles.image, { width: sw }]}
          />
          <Image
            source={require("../images/nature2.jpg")}
            style={[styles.image, { width: sw }]}
          />
          <Text style={styles.welcome}>Nature Image</Text>
        </ScrollView>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.names.map((data) => (
            <View key={data.uname} style={styles.container}>
              <Text>{data.uname}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 30,
  //     margin: 2,
  //     borderColor: "red",
  //     borderWidth: 1,
  //     flexDirection: "row",
  //     backgroundColor: "#fff",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //   },
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 70,
  },
});
