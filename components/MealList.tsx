import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealList = ({ meals = [] }) => {
  const navigation = useNavigation();

  //Funzione per rendirizzare
  function _renderMealItem({ item }: any) {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        {...item}
        onPress={() => navigation.navigate("MealDetails" as never, { ...item })}
      />
    );
  }

  return (
    <View style={styles.container}>
      {meals.length > 0 ? (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={_renderMealItem}
          style={{ width: "100%", padding: 10 }}
        />
      ) : (
        <Text style={styles.placeholder}>Add some favorite meals</Text>
      )}
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  placeholder: {
    color: "black",
    fontSize: 20,
    lineHeight: 22,
  },
});
