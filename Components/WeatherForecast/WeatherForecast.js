import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import forecast from "../../data/DummyData";
import { useAppContext } from '../../Context/Context';

const WeatherForecast = () => {
  const { days, setCurrentDAy } = useAppContext();

  return (
    <View style={styles.forecastContainer}>
      {forecast?.map((day, index) => (
        <Pressable key={index} style={styles.forecastDay} onPress={() => setCurrentDAy(days[index])}>
          <Text style={styles.forecastDayLabel}>{days[index]}</Text>
          <day.Icon size={24} color="#fff" style={styles.forecastweather} />

          <Text style={styles.forecastDayTemperature}>{day.temperature}°C</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '90%',
    backgroundColor: '#ffffff4f',
    padding: 10,
    height: 150,
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

  forecastweather: {
    marginTop: 20,

  }

});

export default WeatherForecast;