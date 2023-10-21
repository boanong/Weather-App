
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useAppContext } from "../../Context/Context";
import getWeatherData from "../../Services/weather/weather.api";

export default function Suggestions({ suggestions = [] }) {
  const { setWeatherForeCast, setTodaysWeather, setDays, setCurrentDAy, setLocation } = useAppContext();

  const getWeather = (lat, lon) => {
    getWeatherData(lat, lon)
      .then((res) => {
        const { _5_day_weather, sorted_days, today } = res;

        console.log({ _5_day_weather, sorted_days });

        setWeatherForeCast(_5_day_weather);
        setTodaysWeather(_5_day_weather[today]);
        setDays([...sorted_days]);
        setCurrentDAy(today);
        setLocation(location);
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
