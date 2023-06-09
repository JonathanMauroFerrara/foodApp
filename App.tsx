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
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const colorPalette = {
  primary: "#E74C3C",
  primary900: "#000000",
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
        options={{
          title: "Meals Detail",
          headerStyle: { backgroundColor: colorPalette.primary },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <FavoriteContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                title: "Food App",
                headerStyle: { backgroundColor: colorPalette.primary900 },
                headerTintColor: "white",
              }}
            >
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
      </Provider>
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
