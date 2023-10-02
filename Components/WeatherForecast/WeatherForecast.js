import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const WeatherForecast = ({ forecast }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

  return (
    <View style={styles.forecastContainer}>
      {forecast?.map((day, index) => (
        <View key={index} style={styles.forecastDay}>
          <Text style={styles.forecastDayLabel}>{days[index]}</Text>
          <Feather name="sun" size={24} color="#fff" />
          <Text style={styles.forecastDayTemperature}>{day.temperature}°C</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '80%',
    backgroundColor: '#ffffff4f',
    padding: 10,
    height: 200,
    margin: 'auto',
    borderRadius: 20,
    // opacity: 0.5,
  },

  forecastDay: {
    alignItems: 'center',
  },

  forecastDayLabel: {
    color: '#fff',
    fontSize: 16,
  },

  forecastDayTemperature: {
    color: '#fff',
    fontSize: 20,
  },

});

export default WeatherForecast;