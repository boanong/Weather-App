
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useAppContext } from "../../Context/Context";

export default function Suggestions({ suggestions = [] }) {
  const { updateStatesAndCurrentLocation } = useAppContext();


  return (
    <View style={styles.suggestions}>  
      <Text>Suggestions</Text>
      <View>
        {suggestions?.map((suggestion) => {
          return (
            <Pressable key={suggestion.country} style={{ border: "1px solid gray", textAlign: "left", paddingLeft: "5px" }} onPress={() => updateStatesAndCurrentLocation(suggestion.lat, suggestion.lon)}>
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
