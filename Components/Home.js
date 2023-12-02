import React from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import WeatherForecast from '../Components/WeatherForecast/WeatherForecast';
import WeatherSection from '../Components/Sun/WeatherSection';
import FooterSection from '../FooterSection';
import Search from './Search/Search';
import TodayForecast from './TodayForecast';
import { useAppContext } from '../Context/Context';

const cloudPicture = { uri: 'https://png.pngtree.com/png-vector/20220905/ourmid/pngtree-cloudy-rainy-weather-icon-png-image_6138021.png' };

export default function App() {
  const { currentWeather, location } = useAppContext();

  React.useEffect(() => {
    console.log({location})
  }, [location])

  return (
    <View style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={['rgba(1, 73, 194, 1)', 'rgba(19, 166, 243, 1)']}
        style={styles.gradient}
      >
        <Search />

        <View style={styles.weatherContainer}>
          <Text style={styles.location}>
            <Feather name="map-pin" size={17} color="#fff" marginRight={0} style={styles.locationIcon} />
            {location?.name ?? "Location"}
          </Text>

          <Image source={cloudPicture} style={styles.cloudPicture} />
          <Text style={styles.temperature}>{currentWeather?.temp ?? "T"} &deg;</Text>
          <Text style={styles.weatherDescription}>{currentWeather?.description ?? ""}</Text>

          <WeatherSection />

          <View style={styles.weatherDetailsContainer}>
            <View style={styles.weatherDetail}>
              <Feather name="wind" size={24} color="#fff" />
              <Text style={styles.weatherDetailText}>Wind</Text>
              <Text style={styles.weatherDetailText}>{currentWeather?.wind_speed ?? ""} km/h</Text>
            </View>

            <View style={[styles.weatherDetail, { marginVertical: 10 }]}>
              <Feather name="droplet" size={24} color="#fff" />
              <Text style={styles.weatherDetailText}>Humidity</Text>
              <Text style={styles.weatherDetailText}>{currentWeather?.humidity ?? "H"} %</Text>
            </View>

            <View style={[styles.weatherDetail, { marginVertical: 10 }]}>
              <Feather name="thermometer" size={24} color="#fff" />
              <Text style={styles.weatherDetailText}>Air Pressure</Text>
              <Text style={styles.weatherDetailText}>{currentWeather?.pressure ?? ""} Pa</Text>
            </View>
          </View>
        </View>
        {/* Added the forecast prop to the WeatherForecast component */}
        <WeatherForecast />
        <TodayForecast />

        <FooterSection />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    // flex: 1,
    backgroundColor: "orange",
    // height: 200,
  },

  searchIcon: {
    position: 'absolute',
    top: 30,
    right: 30,
  },

  weatherContainer: {
    alignItems: 'center',
  },

  cloudPicture: {
    width: 150,
    height: 150,
    marginTop: 80,
  },

  temperature: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#fff',
  },

  weatherDescription: {
    fontSize: 16,
    color: '#fff',
    paddingBottom: 20,
  },

  weatherDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    // Added marginHorizontal to increase the spacing between the weather elements
    marginHorizontal: 60,
    width: '80%'
  },

  weatherDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    // Added marginHorizontal to increase the spacing between the weather elements
    marginHorizontal: 60,
    width: '80%'
  },

  weatherDetail: {
    // Added marginVertical to increase the spacing between the weather elements
    marginVertical: 10,
    alignItems: 'center',
  },

  weatherDetailText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  location: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 0,
    position: 'absolute',
  },

  locationIcon: {
    alignItems: 'center',
    fontSize: 18,
  },
});