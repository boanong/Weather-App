import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../Context/Context';
import { removeSecondsFromTime } from '../Services/utils';

const TodayForecast = () => {
  const { todaysWeather } = useAppContext();
  const forecasts = [
    { time: '12:00 PM', temperature: '70°F', condition: 'Sunny' },
    { time: '3:00 PM', temperature: '75°F', condition: 'Partly Cloudy' },
    { time: '6:00 PM', temperature: '68°F', condition: 'Rainy' },
    { time: '9:00 PM', temperature: '63°F', condition: 'Cloudy' },
  ];


  return (
    <View style={styles.container}>
      {todaysWeather?.map((forecast, index) => (
        <View key={forecast.dt} style={styles.forecastContainer}>
          <Text style={styles.time}>{removeSecondsFromTime(forecast.dt_txt)}</Text>
          <Text style={styles.temperature}>{forecast.main.temp + " "}&deg;C</Text>
          <Text style={styles.condition}>{forecast.weather[0].description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff4f',
    marginBottom: 'auto',
    width: '90%',
    margin: 'auto',
    marginTop: 20,
    borderRadius: 10,
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
