import { View, Text, StyleSheet } from "react-native";
import Welcome from "./Welcome";


export default function NestedView(){

    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'blue', flex:0.3}}/>
            <View style={{backgroundColor:'yellow', flex:0.5}}/>
            <Text style={styles.textdemo}>Nested View Demo</Text>
            <View style={{alignItems: 'center'}}>
                <Welcome name='admin'/>
                <Welcome name='Manager'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      height: 100,
      width: '80%',
      backgroundColor: 'pink',
    },
    textdemo:{
        fontSize:18
    }
  });