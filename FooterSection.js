import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomePage } from './Components/Home'

const FooterSection = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.item}
                onPress={() => navigation.navigate('Home')}>
                <FontAwesome name="home" size={18} color="black" /> 
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}
                onPress={() => navigation.navigate('NewsPage')}>
                <FontAwesome name="newspaper-o" size={18} color="black" />
                <Text style={styles.text}>News</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>navigation.navigate('Notifications')}
                style={styles.item}>

                <FontAwesome name="bell" size={18} color="black" />
                <Text style={styles.text}>Notifications</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff4f',
        // paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        color: 'white',
        height: 60,
        width: '100%',
        position: 'absolute',
        bottom: 0,
      },

    item: {
        alignItems: 'center',
    },
    text: {
        marginTop: 5,
    },
});

export default FooterSection;