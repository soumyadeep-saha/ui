import { StyleSheet, View } from "react-native";

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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  con1: {
    height: 60,
    width: 60,
    backgroundColor: "blue",
  },
  con2: {
    height: 60,
    width: 60,
    backgroundColor: "green",
  },
  con3: {
    height: 60,
    // width: 60,
    backgroundColor: "pink",
  },
});
