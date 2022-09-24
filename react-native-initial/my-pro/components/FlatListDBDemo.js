import { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ajaxdata from "../shared/FetchData";

export default class FlatListDBDemo extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const users = await ajaxdata.fetchUsers();
    this.setState({ users });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2text}>User Details</Text>
        <FlatList
          data={this.state.users}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.flatView}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.email}
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
    marginTop: 50,
  },
  h2text: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: "bold",
  },
  flatView: {
    justifyContent: "center",
    borderRadius: 2,
    paddingTop: 30,
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18,
  },
  email: {
    color: "blue",
  },
});
