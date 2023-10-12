
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useAppContext } from "../../Context/Context";
import { getLocationWeather, distributeWeather } from "../../Services/Functions";

export default function Suggestions({ results = [] }) {
  const { weather, setWeather } = useAppContext();

  const getWeather = (lat, lon) => {
    getLocationWeather(lat, lon)
      .then(weather => {
        const day_weather = distributeWeather(weather.list);

        console.clear();
        console.log(day_weather)
      })
      .catch(console.log);
  }

  return (
    <View style={styles.suggestions}>
      <Text>Suggestions</Text>
      <View>
        {results?.map((res) => {
          return (
            <Pressable key={res.country} style={{ border: "1px solid gray", textAlign: "left", paddingLeft: "5px" }} onPress={() => getWeather(res.lat, res.lon)}>
              <Text>{res.name}</Text>
              <Text>country: {res.country}</Text>
              <Text>lat: {res.lat}</Text>
              <Text>lon: {res.lon}</Text>
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
