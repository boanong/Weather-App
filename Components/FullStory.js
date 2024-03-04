import { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';

import { getWeatherNews } from '../Services/news/api-call';
import { shortenText } from '../Services/utils';
import { useNavigation } from '@react-navigation/native';

const FullStory = () => {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={styles.weatherItem} onPress={() => handleNewsItemClick(news)}>
                {/* <Image source={{ uri: displayData[0]?.urlToImage }} style={styles.weatherImage} />
                    <View style={styles.weatherDetails}>
                        <Text style={styles.newsTitle}>{shortenText(displayData[0]?.title)}</Text>
                        <Text style={styles.newsText}>
                            {shortenText(displayData[0]?.description, 90)}
                        </Text>
                    </View> */}
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({});

export default FullStory;
