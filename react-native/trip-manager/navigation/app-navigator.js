import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/home';
import AddTrip from '../screens/add-trip';
import AddExpenses from '../screens/add-expense';
import TripExpenses from '../screens/trip-expense';

const Stack=createNativeStackNavigator()
const AppNavigator=()=> {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="AddTrip" component={AddTrip} options={{headerShown:false}}/>
        <Stack.Screen name="AddExpenses" component={AddExpenses} options={{headerShown:false}}/>
        <Stack.Screen name="TripExpenses" component={TripExpenses} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
export default AppNavigator
