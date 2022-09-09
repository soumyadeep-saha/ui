import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IMAGES } from "../../assets/assets";
function EmptyList() {
  return (
    <View style={styles.emptyList}>
      <Image source={IMAGES.EMPTY_TRIPS} style={styles.banner} />
      <Text style={styles.message}>You havent recorded any trip yet</Text>
    </View>
  );
}

export default EmptyList;
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
