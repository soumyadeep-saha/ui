import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../theme/theme";
function ScreenWrapper({ children }) {
  return <View style={styles.screenwrapper}>{children}</View>;
}

export default ScreenWrapper;
const styles = StyleSheet.create({
  screenwrapper: {
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
    backgroundColor: COLORS.BACKGROUND,
    minHeight: "100%",
  },
});
