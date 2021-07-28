import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SigninScreen from "./src/screens/SigninScreen";
import {AccountScreen} from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import {TrackCreateScreen} from "./src/screens/TrackCreateScreen";
import {TrackDetailScreen} from "./src/screens/TrackDetailScreen";
import {TrackListScreen} from "./src/screens/TrackListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;