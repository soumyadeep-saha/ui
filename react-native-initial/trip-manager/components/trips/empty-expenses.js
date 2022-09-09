import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IMAGES } from "../../assets/assets";
function EmptyExpenses() {
  return (
    <View style={styles.emptyList}>
      <Image source={IMAGES.EMPTY_EXPENSES} style={styles.banner} />
      <Text style={styles.message}>
        You havent recorded any expenses for this trip
      </Text>
    </View>
  );
}

export default EmptyExpenses;
const styles = StyleSheet.create({
  banner: {
    height: 240,
    width: 240,
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  message: {
    fontSize: 14,
    fontWeight: 600,
  },
});
