import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const colorPalette = {
  primary: "#E74C3C",
  secondary: "#F2F3F4",
};

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen
            name="Meals"
            component={MealsOverview}
            // options={{
            //   title: "Categories",
            //   headerStyle: { backgroundColor: colorPalette.primary },
            //   headerTintColor: "white",
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            //@ts-ignore
            component={MealDetails}
            // options={{
            //   headerRight: () => {
            //     return (
            //       <IconButton
            //         iconType="star"
            //         color="#fcf009"
            //         onPress={() => {}}
            //       />
            //     );
            //   },
            //   headerStyle: { backgroundColor: colorPalette.primary },
            //   headerTintColor: "white",
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
