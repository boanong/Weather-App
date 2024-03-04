import { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import FooterSection from '../FooterSection';
import { getWeatherNews } from '../Services/news/api-call';
import { shortenText } from '../Services/utils';
import { useNavigation } from '@react-navigation/native';

const LIMIT_COUNT = 7;
const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(LIMIT_COUNT);
  const navigation = useNavigation();

  const handleNewsItemClick = (news) => {
    // Logic for handling news item click
    navigation.navigate('FullStory');
    console.log('Clicked news item:', news);
  };

  useEffect(() => {
    getWeatherNews()
      .then(res => {
        console.log(res);
        setNewsData(res.articles)
      })
      .catch(() => {
        //
      })
      .finally(() => setLoading(false));
  }, []);

  const displayData = useMemo(() => {
    // if (seeMore) return newsData;

    if (newsData.length <= 0) return [];

    return newsData.slice(0, limit);
  }, [limit, newsData]);

  return (
    <>
      <ScrollView style={styles.container} screenOptions={{ headerShown: false }}>

        {
          loading ? (
            <Text style={[styles.title,]}>Loading news...</Text>
          ) : (
            <>
              <View style={styles.headingContainer}>
                <Text style={[styles.title,]}>Weather News</Text>
                <Text style={[styles.subTitle]}>The latest weather insight accross the territory</Text>
              </View>

              <View style={styles.envelop}>
                <TouchableOpacity style={styles.weatherItem} onPress={() => handleNewsItemClick(displayData[0])}>
                  <Image source={{ uri: displayData[0]?.urlToImage }} style={styles.weatherImage} />
                  <View style={styles.weatherDetails}>
                    <Text style={styles.newsTitle}>{shortenText(displayData[0]?.title)}</Text>
                    <Text style={styles.newsText}>
                      {shortenText(displayData[0]?.description, 90)}
                    </Text>
                  </View>
                </TouchableOpacity>

                {
                  displayData?.slice(1, -1).map((news) => (
                    <TouchableOpacity key={news.title} style={styles.newsItem} onPress={() => handleNewsItemClick(news)}>
                      <Image source={{ uri: news.urlToImage }} style={styles.image} />
                      <View style={styles.newsDetails}>
                        <Text style={styles.newsTitle}>{shortenText(news.title)}</Text>
                        <Text style={styles.newsText}>
                          {shortenText(news.description, 70)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))
                }

              </View>
            </>
          )
        }

        <Pressable style={styles.caughtUp}>
          {limit < newsData.length - 1 && (
            <Text style={styles.more} onPress={() => setLimit(prev => prev + LIMIT_COUNT)}>
              See More
            </Text>
          )}

          {limit > LIMIT_COUNT && (
            <Text style={styles.more} onPress={() => setLimit(prev => prev - LIMIT_COUNT)}>
              See Less
            </Text>
          )}
          <Feather name='chevron-down' size={20} color='black' />
        </Pressable>

      </ScrollView>
      <FooterSection style={{ ...styles.footerElements, width: '20%', backgroundColor: 'black', }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(to right, rgba(1, 73, 194, 1), rgba(19, 166, 243, 1))',
    flexGrow: 1,
    marginBottom: 70
  },

  headingContainer: {
    marginBottom: '5%',
  },

  envelop: {
    margin: 'auto',
    alignItems: 'center',
    // marginHorizontal: '5%', // Center horizontally
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(1, 73, 194, 1)',
    marginTop: '8%',
    marginLeft: 12,
  },

  weatherItem: {
    marginTop: 50,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'black',
    width: '80%',
    alignItems: 'center',
  },

  weatherImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'contain',
  },

  weatherDetails: {
    flex: 1,
    padding: 10,
  },

  newsItem: {
    marginTop: 20,
    flexDirection: 'row', borderRadius: 10,
    backgroundColor: '#f4f4f4',
    height: 110,
    width: '93%',
    margin: 'auto',
  },

  image: {
    width: 100,
    height: '100%',
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
  },

  newsDetails: {
    flex: 1,
    padding: 10,
  },


  newsText: {
    fontSize: 16,
    color: '#666',
    flexWrap: 'wrap',
    width: '90%',
  },

  weatherItem: {
    width: '98%',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    width: '93%',
    margin: 'auto',
  },

  weatherImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  weatherDetails: {
    padding: 10,
  },

  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(1, 73, 194, 1)'
  },

  newsText: {
    fontSize: 16,
    color: '#666',
  },

  caughtUp: {
    marginLeft: 12,
    backgroundColor: '#ADD8E6',
    marginTop: 12,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    gap: 10,
    borderRadius: 3,
    textAlign: 'center',
    marginBottom: 30,
  },

  more: {
    marginLeft: 3,
  },

  subTitle: {
    marginLeft: 12,
    opacity: 0.7
  }

});

export default NewsPage;
