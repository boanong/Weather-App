import { View, Text } from "react-native";

export default function Suggestions({ resulst = [] }) {
    return (
      <View>
        <Text>Suggestions</Text>
        <View>
          {resulst?.map((res) => {
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