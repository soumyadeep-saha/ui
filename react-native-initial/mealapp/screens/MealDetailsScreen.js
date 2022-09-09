import React, { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
function MealDetailsScreen({ route ,navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function callme(){
      console.log('pressed');
      
  }
useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton onPress={callme}/>
        }
    })
})


  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "purple",
  },
  detailText: {
    color: "blue",
  },
  subtitle: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "pink",
    borderBottomWidth: 2,
  },
});
