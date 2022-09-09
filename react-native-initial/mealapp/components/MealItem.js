import { View, Text, Pressable, Image ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

export default function MealItem({id,title,imageUrl,duration,complexity,affordability}) {

   const navigation=useNavigation()

   function selectMealHandler(){
      navigation.navigate('MealDetail',{
         mealId: id
      })
   }
  
   return (
      <View style={styles.mealItem}>
         <Pressable onPress={selectMealHandler}>
            <View>
            <Image style={styles.image} source={{uri:imageUrl}}/>
                <Text style={styles.title}>{title}</Text>
                </View>
                   <MealDetails duration={duration} 
                   affordability={affordability} 
                   complexity={complexity}/>
               
                </Pressable>   
      </View>
      
   );
}

const styles=StyleSheet.create({
   image:{
      width:'100%',
      height:200
   },
  
   mealItem:{
margin:16,
borderRadius:8,
overflow: 'hidden',
backgroundColor:'white'
   },
   title:{
      fontWeight: 'bold',
      textAlign:"center",
      fontSize:18
   }
})
 
