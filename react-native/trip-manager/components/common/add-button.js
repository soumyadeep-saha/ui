import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/theme";

function AddButton(props) {
  const { buttontext, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.buttontext}>{buttontext ? buttontext : "ADD"}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default AddButton;
const styles = StyleSheet.create({
  addButton: {
    backgroundColor: COLORS.ORANGE_SEC,
    paddingVertical: 12,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
  },
  buttontext: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: "700",
  },
});
