
import { StyleSheet, View, Text } from "react-native";

export default function Suggestions({ results = [] }) {
    return (
      <View style={styles.suggestions}>
        <Text>Suggestions</Text>
        <View>
          {results?.map((res) => {
            return (
              <View style={{border: "1px solid gray", textAlign: "left", paddingLeft: "5px"}}>
                <Text>{res.name}</Text>
                <Text>country: {res.country}</Text>
                <Text>lat: {res.lat}</Text>
                <Text>lon: {res.lon}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create ({
    suggestions: {
        position: 'absolute',
        backgroundColor: 'white',
        margin: '20%',
        width: '70%',
        borderRadius: 10,

    }
  }

  )