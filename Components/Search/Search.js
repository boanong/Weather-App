import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { API_KEY } from "../../Services/Constants";
import { Feather } from '@expo/vector-icons';
import Suggestions from './Suggestion';

export default function Search({ forecast }) {
    const [searchval, setSearchVAl] = React.useState("");
    const [results, setResults] = React.useState(null);

    const handleSearch = async () => {
        const search_url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchval}&limit=5&appid=${API_KEY}`;

        try {
            const res = await fetch(search_url).then(r => r.json());

            console.log({ res });

            setResults(res)
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
        <View>
            <TextInput placeholder='search location' value={searchval} onChangeText={(value) => setSearchVAl(value)} style ={styles.searchStyles} />
            <Suggestions results={results} />
        </View>
    )
};


const styles = StyleSheet.create ( {
    searchStyles: {
        fontSize: 20,
        color: 'black',
        borderRadius: 50,
        backgroundColor: 'red', 
        width: '60%',
        height: '100%',
        margin:'auto',
        marginTop: '9%',
    }


})

