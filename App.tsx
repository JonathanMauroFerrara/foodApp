import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import React from "react";
import FavoriteScreen from "./screens/FavoriteScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconButton from "./components/IconButton";
import FavoriteContextProvider from "./store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const colorPalette = {
  primary: "#E74C3C",
  secondary: "#F2F3F4",
};

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meals"
        component={MealsOverview}
        options={{
          title: "MealsOverview",
          headerStyle: { backgroundColor: colorPalette.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="MealDetails"
        //@ts-ignore
        component={MealDetails}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Categories"
              component={StackNavigator}
              options={{
                tabBarIcon: () => {
                  return (
                    <IconButton
                      iconType="home"
                      color="black"
                      onPress={() => {}}
                    />
                  );
                },
                title: "Home",
              }}
            />
            <Tab.Screen
              name="Favorite"
              component={FavoriteScreen}
              options={{
                tabBarIcon: () => {
                  return (
                    <IconButton
                      iconType="star"
                      color="black"
                      onPress={() => {}}
                    />
                  );
                },
                title: "Favorite",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
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
