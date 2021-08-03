import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from './src/context/AuthContext';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}> 
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  )
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackList" component={TrackListStack} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  )
}

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://club-app-graphql-server.herokuapp.com/graphql"
  });

  return (
    <>
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
    </>
  );
}

export default App;