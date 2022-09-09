import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function TaskItem(props) {
  return (
    <Pressable onPress={props.od.bind(this, props.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  taskText: {
    color: "white",
  },
});
