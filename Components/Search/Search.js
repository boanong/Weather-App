import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { API_KEY } from "../../Services/Constants";
import { Feather } from '@expo/vector-icons';
import Suggestions from './Suggestion';

export default function Search({ forecast }) {
    const [searchval, setSearchVAl] = React.useState("");
    const [suggestions, setLocationSuggestions] = React.useState(null);

    const handleSearch = async () => {
        if (!searchval.trim()) return;

        const search_url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchval}&limit=5&appid=${API_KEY}`;

        try {
            const res = await fetch(search_url).then(r => r.json());

            console.log({ res });

            setLocationSuggestions(res)
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        const timeId = setTimeout(() => {
            searchval.trim() && handleSearch();
        }, 1000);

        return () => clearTimeout(timeId);
    }, [searchval])

    return (
        <View style={styles.container}>
            <TextInput placeholder='search location' value={searchval} onChangeText={(value) => setSearchVAl(value)} style={styles.searchStyles} />
            <Suggestions suggestions={suggestions} />

            <Feather
                name="search"
                size={30}
                color="#fff"
                style={styles.searchIcon}
                onPress={handleSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 3,
    },
    searchStyles: {
        fontSize: 20,
        color: 'black',
        borderRadius: 50,
        backgroundColor: 'orange',
        width: '60%',
        height: '100%',
        margin: 'auto',
        marginTop: '9%',
    }
});
