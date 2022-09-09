import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IMAGES } from "../../assets/assets";
import { COLORS } from "../../theme/theme";

function BackButton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={IMAGES.BACK} style={styles.backButton} />
      </View>
    </TouchableOpacity>
  );
}

export default BackButton;
const styles = StyleSheet.create({
  backButton: {
    height: 25,
    width: 25,
  },
  iconWrapper: {
    padding: 6,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});
