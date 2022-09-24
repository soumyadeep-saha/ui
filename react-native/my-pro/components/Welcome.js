import { Button, Text, View } from "react-native";

export default function Welcome(props) {
  return (
    <View>
      <Text>Welcome {props.name}</Text>
    </View>
  );
}
