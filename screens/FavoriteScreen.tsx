import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const navigation = useNavigation();

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  console.log(displayedMeals);

  return <MealList meals={displayedMeals} />;
};

export default FavoriteScreen;
