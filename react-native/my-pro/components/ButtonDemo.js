import { Alert, Button, Linking, StyleSheet, View } from "react-native";

export default function ButtonDemo() {
  const alertMe = () => {
    //Alert.alert("") works only on app and not on browser. alert("") works both on browser and app
    Alert.alert("button clicked");
  };

  return (
    <View style={styles.container}>
      <Button style={styles.btnContainer} onPress={alertMe} title="click it" />

      <View style={styles.container}>
        <Button
          style={styles.btnContainer}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=D4qAQYlgZQs")
          }
          title="open youtube"
          color="pink"
        />
      </View>

      <View style={styles.container}>
        <Button
          style={styles.btnContainer}
          onPress={alertMe}
          title="click it"
          color="blue"
          disabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    margin: 20,
  },
});
