import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ActivityIndicatorDemo from "./components/ActivityIndicatorDemo";
import Alignment from "./components/Alignment";
import FlatListDBDemo from "./components/FlatListDBDemo";
import FlatListDemo from "./components/FlatListDemo";
import Layout from "./components/Layout";
import ModalDemo from "./components/ModalDemo";
import ScrollDemo from "./components/ScrollDemo";
import SectionListDemo from "./components/SectionListDemo";
import SectionListDemoData from "./components/SetcionListDemoData";
import TouchableDemo from "./components/TouchableDemo";
import MainApp from "./todoapp/MainApp";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sri Krishna</Text>
      <StatusBar style="auto" />
      {/* <Welcome/> */}
      {/* <NestedView/> */}
      {/* <PassToggle/> */}
      {/* <ButtonDemo /> */}
      {/* <Layout/> */}
      {/* <Alignment/> */}
      {/* <ScrollDemo/> */}
      {/* <FlatListDemo/> */}
      {/* <FlatListDBDemo/> */}
      {/* <SectionListDemo/> */}
      {/* <SectionListDemoData/> */}
      {/* <ModalDemo/> */}
      {/* <TouchableDemo/> */}
      {/* <ActivityIndicatorDemo/> */}
      <MainApp/>
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
});
