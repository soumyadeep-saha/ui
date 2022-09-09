import { Component, Vi } from "react";
import ajaxdata from "../shared/FetchData";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default class ListViewDemoDB extends Component {
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
    marginTop: "50",
  },
  h2text: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
  },
  flatView: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18,
  },
  email: {
    color: "blue",
  },
});
