
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useAppContext } from "../../Context/Context";
import { distributeWeather } from "../../Services/weather/functions";
import getLocationWeather from "../../Services/weather/weather.api";

export default function Suggestions({ suggestions = [] }) {
  const { setWeatherForeCast, setTodaysWeather } = useAppContext();

  const getWeather = (lat, lon) => {
    getLocationWeather(lat, lon)
      .then(weather => {
        const { _5_day_weather, sorted_days } = distributeWeather(weather.list);
        const today = new Date().toDateString();

        console.clear();
        console.log({ _5_day_weather, sorted_days });
        setWeatherForeCast(_5_day_weather);
        setTodaysWeather(_5_day_weather[today]);
      })
      .catch(console.log);
  }

  return (
    <View style={styles.suggestions}>
      <Text>Suggestions</Text>
      <View>
        {suggestions?.map((suggestion) => {
          return (
            <Pressable key={suggestion.country} style={{ border: "1px solid gray", textAlign: "left", paddingLeft: "5px" }} onPress={() => getWeather(suggestion.lat, suggestion.lon)}>
              <Text>{suggestion.name}</Text>
              <Text>country: {suggestion.country}</Text>
              <Text>lat: {suggestion.lat}</Text>
              <Text>lon: {suggestion.lon}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestions: {
    position: 'absolute',
    backgroundColor: 'red',
    margin: '20%',
    width: '70%',
    borderRadius: 10,
    zIndex: 3,
  }
});
