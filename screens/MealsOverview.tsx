import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IStackScreenTypes } from "../@types/StackScreenTypes";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

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

  //Funzione per rendirizzare
  function _renderMealItem({ item }: any) {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        {...item}  
        onPress={() => navigation.navigate("MealDetails", { ...item })}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={_renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
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
