import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Modal, TouchableOpacity } from 'react-native';
import { API_KEY } from "../../Services/Constants";
import { Feather } from '@expo/vector-icons';
import Suggestions from './Suggestion';

export default function Search({ forecast }) {
    const [searchval, setSearchVAl] = React.useState("");
    const [suggestions, setLocationSuggestions] = React.useState(null);
    const [showSuggestions, setShowSuggestions] = React.useState(true)

    const handleClose = () => setShowSuggestions(false);

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
        <View>
            <View style={styles.container}>
                <Modal
                    style={styles.overlay}
                    visible={showSuggestions}
                    transparent
                    onRequestClose={handleClose}
                >
                    <TouchableOpacity
                        style={{ flex: 1 }}
                    >
                        <TextInput
                            placeholder='search location'
                            style={styles.input}
                            value={searchval}
                            onBlur={handleClose}
                            onChangeText={(value) => setSearchVAl(value)} style={styles.searchStyles}
                        />

                        <Suggestions suggestions={suggestions} />
                    </TouchableOpacity>
                </Modal>

                <Feather
                    name="search"
                    size={30}
                    color="white"
                    style={styles.searchIcon}
                    onPress={handleSearch}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "orange",
        // position: "fixed",
        // width: "100%",
        // height: "100%",
        // zIndex: 90,
    },
    container: {
        position: "relative",
        zIndex: 3,
    },

    searchIcon: {
        position: 'absolute',
        right: 25,
        top: 31, 
      },

    input: {
        height: 90
    },
    searchStyles: {
        fontSize: 21,
        color: 'black',
        borderRadius: 50,
        backgroundColor: 'orange',
        width: '60%',
        height: '100%',
        margin: 'auto',
        marginTop: '9%',
    }
});
