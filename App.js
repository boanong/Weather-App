import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import GetStarted from './Components/GetStarted';
import Home from './Components/Home';
import NewsPage from './Components/NewsPage';
import { Stack } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="Home"
          component={Home}
          headerTitle="Home"
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          headerTitle="Get Started"
        />
        <Stack.Screen
          name="NewsPage"
          component={NewsPage}
          headerTitle="News"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;