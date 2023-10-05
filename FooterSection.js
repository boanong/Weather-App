import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FooterSection = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <FontAwesome name="home" size={24} color="black" />
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <FontAwesome name="newspaper-o" size={24} color="black" />
                <Text style={styles.text}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <FontAwesome name="bell" size={24} color="black" />
                <Text style={styles.text}>Notifications</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff4f',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        color: 'white'
    },
    item: {
        alignItems: 'center',
    },
    text: {
        marginTop: 5,
    },
});

export default FooterSection;