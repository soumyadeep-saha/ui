import React from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";

export default function DisplayModal(props) {
  return (
    <Modal
      visible={props.display}
      animationType="slide"
      onRequestClose={() => Alert.alert('closed')}>
      <View style={styles.container}>
        <Image source={props.image} style={styles.image} />
        <Text style={styles.text}>{props.data}</Text>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  image:{
      marginTop: 20,
      marginLeft:90,
      height: 200,
      width:200
  },
  text:{
      fontSize:20,
      marginLeft: 150
  }
});