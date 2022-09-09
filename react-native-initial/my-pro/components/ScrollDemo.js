import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Component } from "react";
import { Image } from "react-native-elements";
export default class ScrollDemo extends Component {
  state = {
    userData: [
      { uname: "admin1", email: "admin@mail.com" },
      { uname: "admin2", email: "admin@mail.com" },
      { uname: "admin3", email: "admin@mail.com" },
      { uname: "admin4", email: "admin@mail.com" },
      { uname: "admin5", email: "admin@mail.com" },
      { uname: "admin6", email: "admin@mail.com" },
      { uname: "admin7", email: "admin@mail.com" },
      { uname: "admin8", email: "admin@mail.com" },
      { uname: "admin9", email: "admin@mail.com" },
      { uname: "admin10", email: "admin@mail.com" },
    ],
  };
  render() {
    let sw = Dimensions.get("window").width;
    return (
      <View>
        {/* <ScrollView
          horizontal={true}
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
          {this.state.userData.map((name, index) => (
            <View key={name.uname} style={styles.container}>
              <Text>{name.uname}</Text>
            </View>
          ))}
        </ScrollView> */}
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
          <Image
            source={require("../images/Krishna.jpeg")}
            style={[styles.image, { width: sw }]}
          />
          <Text style={styles.welcome}>Hare Krishna</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 30,
  //   margin: 2,
  //   borderColor: "red",
  //   borderWidth: 1,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 20,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 70,
  },
});
