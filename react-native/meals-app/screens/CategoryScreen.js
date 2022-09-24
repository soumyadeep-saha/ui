import { FlatList, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemdata) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemdata.item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem.bind()}
        numColumns={2}
      />
    </View>
  );
}
export default CategoryScreen;
