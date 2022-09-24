// import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
// import { Component } from "react";
// import { Picker } from "@react-native-picker/picker";
// export default class ActivityIndicatorDemo extends Component {
//   state = {
//     animating: true,
//     choosenIndex:0
//   };
//   closeActivity = () =>
//     setTimeout(() => {
//       this.setState({ animating: false });
//     }, 6000);
//   componentDidMount = () => this.closeActivity();
//   render() {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator animating={this.state.animating} size="large" color="red" />
//         <ActivityIndicator size="small" color="blue" />
//         <ActivityIndicator size="large" color="green" />
//         <Picker style={styles.textStyle}
//         selectedValue={this.state.language}
//         onValueChange={(itemValue,itemPosition) =>
//         this.setState({language:itemValue,choosenIndex:itemPosition})>
//             <Picker.item label="english" value="english"/>
//             <Picker.item label="french" value="french"/>
//             <Picker.item label="chinese" value="chinese"/>
//             <Text>{"index " +this.state.choosenIndex}</Text>
//         </Picker>       
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     paddingVertical: 20,
//     backgroundColor: "white",
//   },
//   textStyle: {
//     margin: 24,
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   pickerStyle: {
//     height: 150,
//     width: "80%",
//     color: "green",
//   },
// });
