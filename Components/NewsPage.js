import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';



import FooterSection from "../FooterSection";

const NewsPage = () => {

  const image1 = "https://plus.unsplash.com/premium_photo-1661759656894-63e8748e1373?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const image2 = "https://images.unsplash.com/photo-1702584643286-4f96f1b9c45f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const image3 = "https://www.nj.com/resizer/7Dy_2ctzHvTXDlKxL1v-y0UGIsE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VPW7DCVP55AJ5KVX6YYZJTHYVA.jpeg";
  const image5 = "https://www.rmets.org/sites/default/files/tweet%252011.jpg";

  const weatherImage = "https://images.unsplash.com/photo-1483526682683-7560afbb5299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcm15JTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D";
  const image4 = "https://source.unsplash.com/400x229/?landscape";

  const handleNewsItemClick = (newsTitle) => {
    // Logic for handling news item click
    console.log("Clicked news item:", newsTitle);
  };

  return (
    <>


      <ScrollView style={styles.container} screenOptions={{ headerShown: false }}>

        <View style={styles.headingContainer}>
          <Text style={[styles.title, ]}>Weather News</Text>
          <Text style={[styles.subTitle]}>The latest weather insight accross the territory</Text>
        </View>




        <View style={styles.envelop}>
          <TouchableOpacity style={styles.weatherItem}>
            <Image source={{ uri: weatherImage }} style={styles.weatherImage} />
            <View style={styles.weatherDetails}>
              <Text style={styles.newsTitle}>Stormy weather looming Florida</Text>
              <Text style={styles.newsText}>
                Get the latest weather updates and forecasts from the National Weather Service...
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsItem} onPress={() => handleNewsItemClick("Heavy Rain Expected in the Northeast")}>
            <Image source={{ uri: image1 }} style={styles.image} />
            <View style={styles.newsDetails}>
              <Text style={styles.newsTitle}>Heavy Rain Expected in the Northeast</Text>
              <Text style={styles.newsText}>
                The National Weather Service has issued a warning for heavy...
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsItem} onPress={() => handleNewsItemClick("Sunny Skies Ahead for the West Coast")}>
            <Image source={{ uri: image2 }} style={styles.image} />
            <View style={styles.newsDetails}>
              <Text style={styles.newsTitle}>Sunny Skies Ahead for the West Coast</Text>
              <Text style={styles.newsText}>
                After a week of rain and cloudy skies, the West Coast can...
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsItem} onPress={() => handleNewsItemClick("Tornado Warning Issued for Midwest")}>
            <Image source={{ uri: image3 }} style={styles.image} />
            <View style={styles.newsDetails}>
              <Text style={styles.newsTitle}>Tornado Warning Issued for Midwest</Text>
              <Text style={styles.newsText}>
                The National Weather Service has issued a tornado warning...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.newsItem} onPress={() => handleNewsItemClick("Tornado Warning Issued for Midwest")}>
            <Image source={{ uri: image5 }} style={styles.image} />
            <View style={styles.newsDetails}>
              <Text style={styles.newsTitle}>Heatwave Blazes Through Southwest</Text>
              <Text style={styles.newsText}>
                The unforgiving sun beat down on the parched earth of the Southwest...
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        <Pressable style={styles.caughtUp}>
          <Text style={styles.more}>See more</Text>
          <Feather name="chevron-down" size={20} color="black" />

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
    fontWeight: "bold",
    color: 'rgba(1, 73, 194, 1)',
    marginTop: '8%',
    marginLeft: 12,
  },

  weatherItem: {
    marginTop: 50,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "black",
    width: '80%',
    alignItems: 'center',

  },

  weatherImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: "contain",
  },

  weatherDetails: {
    flex: 1,
    padding: 10,
  },

  newsItem: {
    marginTop: 20,
    flexDirection: "row", borderRadius: 10,
    backgroundColor: "#f4f4f4",
    height: 110,
    width: '93%',
    margin: 'auto',


  },

  image: {
    width: 100,
    height: '100%',
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 10,
    resizeMode: "cover",
  },

  newsDetails: {
    flex: 1,
    padding: 10,
  },


  newsText: {
    fontSize: 16,
    color: "#666",
    flexWrap: "wrap",
    width: "90%",
  },

  weatherItem: {
    width: "98%",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    width: '93%',
    margin: 'auto',
  },

  weatherImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  weatherDetails: {
    padding: 10,
  },

  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'rgba(1, 73, 194, 1)'
  },

  newsText: {
    fontSize: 16,
    color: "#666",
  },

  caughtUp: {
    marginLeft: 12,
    backgroundColor: '#ADD8E6',
    marginTop: 12,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
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