import { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class FlatListDemo extends Component {
  renderData = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "lightpink" }}
      ></View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { uname: "Admin" },
            { uname: "Manager" },
            { uname: "QA" },
            { uname: "CA" },
            { uname: "Tester" },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.uname}</Text>
          )}
          itemSepratorComponent={this.renderData}
        />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
