import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "./components/common/screen-wrapper";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/app-navigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenWrapper>
          <AppNavigator />
          <StatusBar style="auto" />
        </ScreenWrapper>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
