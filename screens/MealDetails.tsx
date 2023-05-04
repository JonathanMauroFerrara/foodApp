import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { IStackScreenTypes } from "../@types/StackScreenTypes";
import { colorPalette } from "../App";
import Meal from "../models/meal";
import React from "react";

type MealDetailsRouteParams = Meal & { mealId: string };
type MealDetailProps = NativeStackScreenProps<ParamListBase, "MealDetails">;

function MealDetails({ route, navigation }: MealDetailProps) {
  const {
    mealId,
    title,
    imageUrl,
    ingredients,
    duration,
    complexity,
    steps,
    affordability,
  } = route.params as MealDetailsRouteParams;
  console.log(imageUrl);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.imageContainer} source={{ uri: imageUrl }} />
      <View style={styles.detailsContainer}>
        <View style={styles.contentDetails}>
          <Text style={styles.detailItem}>{duration}min</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.paragraphTitle}>Ingredients</Text>
          {ingredients.map((item) => (
            <View style={styles.singleDetailWrapper} key={item}>
              <Text style={styles.singleDetail}>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.paragraphTitle}>Steps</Text>
          {steps.map((item) => (
            <View style={styles.singleDetailWrapper} key={item}>
              <Text style={styles.singleDetail}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "F2F3F4",
  },
  title: {
    fontSize: 24,
    lineHeight: 40,
    textAlign: "center",
  },
  imageContainer: {
    marginTop: 20,
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "red",
  },
  contentDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 16,
  },
  detailItem: {
    marginHorizontal: 4,
  },
  detailsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailSection: {
    marginTop: 10,
  },
  paragraphTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  singleDetailWrapper: {
    padding: 10,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 100,
    backgroundColor: "#F5B7B1",
  },
  singleDetail: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default MealDetails;
