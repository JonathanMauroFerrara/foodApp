import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import { IStackScreenTypes } from "./@types/StackScreenTypes";
import { Text } from "react-native";
import IconButton from "./components/IconButton";

const Stack = createNativeStackNavigator();

export const colorPalette = {
  primary: "#E74C3C",
  secondary: "#F2F3F4",
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
              headerStyle: { backgroundColor: colorPalette.primary },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverview}
            options={{
              title: "Categories",
              headerStyle: { backgroundColor: colorPalette.primary },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="MealDetails"
            //@ts-ignore
            component={MealDetails}
            options={{
              headerRight: () => {
                return (
                  <IconButton
                    iconType="star"
                    color="#fcf009"
                    onPress={() => {}}
                  />
                );
              },
              headerStyle: { backgroundColor: colorPalette.primary },
              headerTintColor: "white",
            }}
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
