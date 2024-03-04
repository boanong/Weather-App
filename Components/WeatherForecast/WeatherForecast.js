import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import forecast from "../../data/DummyData";
import { useAppContext } from '../../Context/Context';

const WeatherForecast = () => {
  const { days, setCurrentDay, currentDay, weatherForeCast } = useAppContext();

  console.log({ weatherForeCast })

  return (
    <View style={styles.forecastContainer}>
      {weatherForeCast && Object.keys(weatherForeCast)?.map((day, index) => {

        const weather_obj = weatherForeCast[day][0];

        const dynamicStyles = useMemo(() => {
          if (currentDay === day) {
            return {...styles.forecastDay, ...styles.currentDay}
          }
          
          return {...styles.forecastDay}
        }, [currentDay]);

        return (
          <Pressable key={day} style={dynamicStyles} onPress={() => setCurrentDay(day)}>
            <Text style={styles.forecastDayLabel}>{day}</Text>
            <Image source={weather_obj.icon_url} style={styles.forecastWeatherIcon} />
            <Text style={styles.forecastDayTemperature}>{Math.round(weather_obj.temp)}°C</Text>
          </Pressable>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginTop: 20,
    width: '90%',
    backgroundColor: '#ffffff4f',
    padding: 10,
    height: 150,
    borderRadius: 20,
    marginHorizontal: '5%', 
    backgroundColor: 'pink'
  },

  forecastDay: {
    alignItems: 'center',
  },
  
  currentDay: {
    backgroundColor: 'brown',
  },

  forecastDayLabel: {
    color: '#fff',
    fontSize: 16,
  },

  forecastDayTemperature: {
    color: '#fff',
    fontSize: 20,
  },

  forecastWeatherIcon: {
    marginTop: 20,
    width: 24,
  }
});

export default WeatherForecast;
