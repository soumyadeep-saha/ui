import { View, SectionList, StyleSheet, Text } from "react-native";
import { Component } from "react";
export default class SectionListDemo extends Component {
  getData = (item) => {
    alert(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "pune", data: ["admin", "manager", "qa"] },
            { title: "mumbai", data: ["a", "b", "c"] },
            { title: "hyderabad", data: ["d", "e", "f"] },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item} onPress={this.getData.bind(this, item)}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sectionHeader: {
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 23,
    fontWeight: "bold",
    backgroundColor: "lightpink",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
