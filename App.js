import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import GetStarted from './Components/GetStarted';
import Home from './Components/Home';
import NewsPage from './Components/NewsPage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notifications from './Components/Notifications/Notifications'; // Corrected import statement

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }} // Updated options format
        />

        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ title: 'Get Started', headerShown: false }} // Updated options format
        />

        <Stack.Screen
          name="NewsPage"
          component={NewsPage}
          options={{ title: 'News', headerShown: false }} // Updated options format
        />

        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: 'Notifications', headerShown: true }} // Updated options format
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
