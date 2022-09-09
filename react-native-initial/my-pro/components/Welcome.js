import { View, Text, Button } from "react-native";


export default function Welcome(props){

    return(
        <View>
            <Text>Welcome {props.name}</Text>
            <Button title='tap-me'/>
        </View>
    )
}