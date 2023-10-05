import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import GetStarted from './Components/GetStarted';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home'
import NewsPage from './Components/NewsPage';



const App = () => {
  return (
    <View >
      <NavigationContainer>
      <GetStarted/>
      <Home/>
      
    </NavigationContainer>






    <NewsPage/>


    
  

    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;