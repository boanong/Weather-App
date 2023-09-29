import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const WeatherAppScreen = () => {
  return (
    <View style={styles.container}>
      <Avatar.Icon style={styles.avatar} size={80} icon="weather-sunny" />
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Today's Weather</Title>
          <Paragraph style={styles.subtitle}>Sunny</Paragraph>
          <Paragraph style={styles.temperature}>24°C</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Humidity: 60%</Text>
        <Text style={styles.detailsText}>Wind: 10 km/h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 20,
  },
  card: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  temperature: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default WeatherAppScreen;
