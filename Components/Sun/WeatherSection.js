import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const WeatherSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Feather name="droplet" size={24} color="white" />
        <Text style={styles.text}>Chance of precipitation</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.rightSection}>
        <Feather name="sun" size={24} color="white" />
        <Text style={styles.text}>UV Index</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    backgroundColor: '#ffffff4f',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around', 
    marginTop: 50, 
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'white',
    width: 2,
    height: '70%',
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
});

export default WeatherSection;
