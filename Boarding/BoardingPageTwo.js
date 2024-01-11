import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const BoardingPageTwo = () => {
  const navigation = useNavigation(); // Use the hook to get the navigation object

  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate("Login")}> <Text style={styles.SkipButton}>SKIP</Text></TouchableOpacity>
      <Image style={styles.BoardingImageOne} source={require("../assets/virtual-influencer.jpg")} />
      
        <Text style={styles.Subtitle}>Personalized Assistance:</Text>
        <Text style={styles.Paragraph}>The chatbot can provide personalized assistance by
          remembering user preferences and previous interactions.
        </Text>
      

      <View style={{ flexDirection: "row", marginTop: 70 }}>
        <View style={{ flexDirection: "row", marginRight: 120, marginLeft: -30, marginTop: 15 }}>
          <View style={{ width: 30, height: 10, backgroundColor: "#9ACAE5", marginLeft: 5, borderRadius: 10 }}></View>
          <View style={{ width: 30, height: 10, backgroundColor: "#22719E", marginLeft: 5, borderRadius: 10 }}></View>
          <View style={{ width: 30, height: 10, backgroundColor: "#9ACAE5", marginLeft: 5, borderRadius: 10 }}></View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Board3")}>
          <Image style={styles.NextPageArrow} source={require("../assets/icons8-arrow-50.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SkipButton: {
    color: "#22719E",
    
    marginBottom: 20,
    marginLeft: 180,
    marginTop: 70,
    
    fontSize: 22,
    marginRight: 90,
  },

  BoardingImageOne: {
    height: 350,
    width: 290,
    alignContent: "center",
  },

  Subtitle: {
    fontSize: 15,
    color: "#22719E",
    marginLeft: -80,
    
  },

  Paragraph: {
    color: "#9A8E8E",
    width: 250,
    marginLeft: 25,
    marginTop: 10
  },

  NextPageArrow: {
    height: 40,
    width: 40,
  },
});

export default BoardingPageTwo;
