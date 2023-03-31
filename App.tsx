import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import { IStackScreenTypes } from "./@types/StackScreenTypes";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
              headerStyle: { backgroundColor: "#3e76ca" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverview}
            options={{
              title: "Categories",
              headerStyle: { backgroundColor: "#3e76ca" },
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
                  <Button
                    title="Tap me"
                    onPress={() => console.log("pressed")}
                  />
                );
              },
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
