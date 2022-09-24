import { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default class SectionListDemoData extends Component {
  state = {
    data: [
      {
        title: "Operating System",
        data: [
          "Processes & Threads",
          "Memory Management",
          "CPU Scheduling",
          "Process Synchronization",
          "Deadlock",
        ],
      },
      {
        title: "Computer Network",
        data: [
          "Data Link Layer",
          "Network Layer",
          "Transport Layer",
          "Application Layer",
          "Network Security",
        ],
      },
      {
        title: "DBMS",
        data: [
          "Entity Relationship Model",
          "Normalisation",
          "Transaction and Concurrency Control",
          "Indexing, B and B+ trees",
          "File Organization",
        ],
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.rowText}>{item}</Text>
              <Icon name="ios-eye" type="ionicon" color="red" />
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 18,
  },
  screen: {
    marginTop: 18,
  },
  header: {
    padding: 2,
    marginTop: 10,
    backgroundColor: "lightblue",
    textAlign: "center",
  },
  row: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  rowText: {
    fontSize: 18,
  },
});
