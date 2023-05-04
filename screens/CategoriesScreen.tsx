import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import React from "react";

export default function CategoriesScreen({ navigation }: any) {
  function _renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("Meals", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        handlePress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={_renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}
