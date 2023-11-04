import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Modal, TouchableOpacity } from 'react-native';
import { API_KEY } from "../../Services/Constants";
import { Feather } from '@expo/vector-icons';
import Suggestions from './Suggestion';

export default function Search({ forecast }) {
  const [searchval, setSearchVAl] = React.useState("");
  const [suggestions, setLocationSuggestions] = React.useState(null);
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  const [showSearchBAr, setShowSearchBar] = React.useState(true);

  const handleClose = () => {
    setShowSuggestions(false);
    setShowSearchBar(false);
  };

  const handleSearch = async () => {
    if (!searchval.trim()) return;

    const search_url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchval}&limit=5&appid=${API_KEY}`;

    try {
      const res = await fetch(search_url).then(r => r.json());

      console.log({ res });

      setLocationSuggestions(res);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const timeId = setTimeout(() => {
      searchval.trim() && handleSearch();
    }, 1000);

    return () => clearTimeout(timeId);
  }, [searchval]);

  React.useEffect(() => {
    console.clear();
    console.log({ showSearchBAr })
  }, [showSearchBAr])

  return (
    <View style={styles.container}>
      <Feather
        style={styles.searchIcon}
        onPress={() => {
          setShowSearchBar(prev => !prev);
          console.log("i was clicked")
        }}
        name="search"
        size={30}
        color="white"
      />

      {showSearchBAr && (

        <View style={styles.searchContainer}>
          <TextInput

            style={styles.input}
            placeholder='search location'
            value={searchval}
            onBlur={handleClose}
            onChangeText={(value) => setSearchVAl(value)}
            style={styles.searchStyles}
          />
        </View>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 3,
  },

  searchIcon: {
    position: 'fixed',
    right: 25,
    top: 31,
    zIndex: 59,
  },

  searchContainer: {
    position: 'absolute',
    top: 32,
    left: 85,
    width: '60%',
    paddingLeft: 10,
  },

  input: {
    height: 90
  },
  searchStyles: {
    fontSize: 21,
    color: 'black',
    borderRadius: 50,
    backgroundColor: 'white',
    width: '100%',
    height: 'fitConent',

  }
});