import React from 'react';
 import {MEALS, CATEGORIES} from '../data/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

 
function MealsOverview({route,navigation}) {
    const catId= route.params.categoryId

    const displayMeals=MEALS.filter((mealItem) =>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })
    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation])
    
    function renderMealItem(itemData){
        const item= itemData.item

        const mealItemPorps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration
        }
        return <MealItem {...mealItemPorps}/>
    }
    return (
        <View style={styles.container}>
         
         <FlatList 
         data={displayMeals}
         keyExtractor={(item) => item.id}
         renderItem={renderMealItem}
         
         />
        </View>
        
    )
}

export default MealsOverview;
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})