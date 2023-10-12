import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../Context/Context';

const TodayForecast = () => {
  const { todaysWeather } = useAppContext();
  const forecasts = [
    { time: '12:00 PM', temperature: '70°F', condition: 'Sunny' },
    { time: '3:00 PM', temperature: '75°F', condition: 'Partly Cloudy' },
    { time: '6:00 PM', temperature: '68°F', condition: 'Rainy' },
    { time: '9:00 PM', temperature: '63°F', condition: 'Cloudy' },
  ];

  React.useEffect(() => {
    console.clear();
    console.log("todaysWeather", todaysWeather);
  }, [todaysWeather])

  return (
    <View style={styles.container}>
      {todaysWeather?.map((forecast, index) => (
        <View key={forecast.dt} style={styles.forecastContainer}>
          <Text style={styles.time}>{new Date(forecast.dt_txt).toLocaleTimeString()}</Text>
          <Text style={styles.temperature}>{forecast.main.temp + "deg C"}</Text>
          <Text style={styles.condition}>{forecast.weather[0].description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    backgroundColor: 'red',
    marginBottom: 'auto',
    width: '90%',
    margin: 'auto'
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


{forecast.map(forecast, index)} => {
  <View 
}