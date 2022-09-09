import { Alert, Button, Linking, StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.con1} />
      <View style={styles.con2} />
      <View style={styles.con3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection: "row",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'stretch'
  },
  con1: {
    width: 60,
    height: 60,
    backgroundColor: "blue",
  },
  con2: {
    width: 60,
    height: 60,
    backgroundColor: "green",
  },
  con3: {
    // width: 60,
    height: 60,
    backgroundColor: "yellow",
  },
});
