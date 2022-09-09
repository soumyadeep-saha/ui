import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Children } from 'react';

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>      
    <Text style={styles.subtitle}>{children}</Text>
    </View>
    );
}

export default Subtitle;

const styles=StyleSheet.create({
    
    subtitle:{
        color:'red',
        fontSize:18,
        fontWeight:"bold",
        margin:6,
        textAlign:"center"
    },
    subtitleContainer:{
        padding:6,
        margin:4,
        marginHorizontal:24,
        marginVertical:4,
        borderBottomColor:'pink',
        borderBottomWidth:2
    
    }
    })