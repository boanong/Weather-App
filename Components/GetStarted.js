import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const BackgroundImage = { uri: 'https://example.com/background.png' }; 
const WeatherImage = { uri: 'https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png' };

const GetStarted = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <LinearGradient
      colors={['rgba(1, 73, 194, 1)', 'rgba(19, 166, 243, 1)']}
      style={styles.container}
    >
      <Image source={BackgroundImage} style={styles.backgroundImage} />

      <View style={styles.contentContainer}>
        <Image source={WeatherImage} style={styles.weatherImage} />
        <Text style={styles.title}>Weather</Text>
        <Text style={styles.subtitle}>Forecast</Text>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>

        <Text style={styles.description}>See weather insight</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherImage: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 150,
  },

  subtitle: {
    fontSize: 38,
    color: '#fff',
    marginTop: 0,

  },

  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#1F2471',
    fontWeight: 'bold',
  },
  
  description: {
    fontSize: 12,
    color: '#fff',
    marginTop: 10,
  },
});

export default GetStarted;