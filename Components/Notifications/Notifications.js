import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Notifications() {
  const handleGetStarted = () => {
    console.log('Get Started button pressed!');
    // Add your logic here for starting something
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconHolder}>
        <Feather name="bell" size={20} color="black" />
      </View>
      <Text style={styles.noNotifications}>No Notifications yet</Text>
      <Text style={styles.details}>You're up to date. Your Notifications will appear here</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Return home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  noNotifications: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  iconHolder: {
    backgroundColor: '#ADD8E6',
    borderRadius: 35,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  details: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'rgba(1, 73, 194, 1)',
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
