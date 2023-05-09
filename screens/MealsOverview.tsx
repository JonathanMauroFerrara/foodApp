import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import MealList from "../components/MealList";

type MealsRouteParams = {
  categoryId: string;
};
type MealsProps = NativeStackScreenProps<ParamListBase, "Meals">;

export default function MealsOverview({ route, navigation }: MealsProps) {
  const { categoryId } = route.params as MealsRouteParams;
  //Filtro per l'id ricevuto
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId as string) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle: string | undefined = CATEGORIES.find((item) => {
      if (item.id === categoryId) {
        return true;
      }
    })?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealList meals={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
