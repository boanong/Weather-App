import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodayForecast = () => {
  const forecasts = [
    { time: '12:00 PM', temperature: '70°F', condition: 'Sunny' },
    { time: '3:00 PM', temperature: '75°F', condition: 'Partly Cloudy' },
    { time: '6:00 PM', temperature: '68°F', condition: 'Rainy' },
    { time: '9:00 PM', temperature: '63°F', condition: 'Cloudy' },
  ];

  return (
    <View style={styles.container}>
      {forecasts.map((forecast, index) => (
        <View key={index} style={styles.forecastContainer}>
          <Text style={styles.time}>{forecast.time}</Text>
          <Text style={styles.temperature}>{forecast.temperature}</Text>
          <Text style={styles.condition}>{forecast.condition}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffffff4f',
    marginBottom: 'auto'
  },
  forecastContainer: {
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  condition: {
    fontSize: 12,
    color: '#666',
  },
});

export default TodayForecast;
