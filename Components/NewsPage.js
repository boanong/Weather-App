import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FooterSection from "../FooterSection";

const NewsPage = () => {
  const image1 = "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2019/09/18/431150-rain-6.jpg?itok=caYeS9WQ&im=Resize=(400,229)";
  const image2 = "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2019/09/18/431150-rain-6.jpg?itok=caYeS9WQ&im=Resize=(400,229)";
  const image3 = "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2019/09/18/431150-rain-6.jpg?itok=caYeS9WQ&im=Resize=(400,229)";
  const weatherImage = "https://previews.123rf.com/images/davidoff205020/davidoff2050201801/davidoff205020180102079/94584653-people-walk-by-the-river-in-the-city-video-a-sunny-day-in-the-city-people-walking-around-the-city.jpg";

  const handleNewsItemClick = (newsTitle) => {
    // Logic for handling news item click
    console.log("Clicked news item:", newsTitle);
  };

  return (


    <View style={styles.container} screenOptions={{ headerShown: false }}>
      <Text style={styles.title}>Weather News</Text>
      <TouchableOpacity style={styles.weatherItem}>
        <Image source={{ uri: weatherImage }} style={styles.weatherImage} />
        <View style={styles.weatherDetails}>
          <Text style={styles.newsTitle}>Weather Update</Text>
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
      <FooterSection style={{ ...styles.footerElements, width: '20%', }} />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(to right, rgba(1, 73, 194, 1), rgba(19, 166, 243, 1))',
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white'

  },
  weatherItem: {
    marginTop: 50,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "black",
    margin: 'auto',
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
    backgroundColor: "#f8f8f8",
    width: '93%',
    margin: 'auto'

  },
  image: {
    width: 100,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: "cover",
  },
  newsDetails: {
    flex: 1,
    padding: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
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
  },
  newsText: {
    fontSize: 16,
    color: "#666",
  },

});

export default NewsPage;