import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Homepage from './screens/Homepage'
import About from './screens/About'
import { Ionicons } from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function BottomTabNavigator(){
  return(
      <BottomTab.Navigator>
      <BottomTab.Screen component={DrawerNavigator} name="Homepage" options={{headerShown: false, tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={18}/> }}/>
      <BottomTab.Screen component={About} name="Hello" options={{
        tabBarIcon: ({color}) => <Ionicons name="people" color={color} size={18}/> 
      }}/>
    </BottomTab.Navigator>
  )
}

function DrawerNavigator(){
  return(
    <Drawer.Navigator initialRouteName='Welcom'>
      <Drawer.Screen name="BottomTabNavigator" component={Homepage} options={{
        headerStyle: {backgroundColor: '#3c0a6b'},
        headerTintColor: 'white',
        statusbar: 'white',
        drawerLabel: 'Home',
        drawerIcon: ({color}) => (
          <Ionicons name="home" color={color} size={18} />
        )
      }}>
      </Drawer.Screen>
      <Drawer.Screen name="Hello" component={About} options={{
        headerStyle: {backgroundColor: '#3c0a6b'},
        headerTintColor: 'white',
        drawerLabel: 'About',
        drawerIcon: ({color}) => (
          <Ionicons name="people" color={color} size={18} />
        )
      }}>
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


