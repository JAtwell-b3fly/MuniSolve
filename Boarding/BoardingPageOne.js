import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const BoardingPageOne = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
    <TouchableOpacity style={styles.SkipButtonContainer} onPress={() => navigation.navigate("Login")}>
      <Text style={styles.SkipButtonText}>SKIP</Text>
    </TouchableOpacity>
    <Image style={styles.BoardingImageOne} source={require("../assets/artificial.jpg")} />

    <Text style={styles.Subtitle}>FAQ Database:</Text>
    <Text style={styles.Paragraph}>
      Munibot is equipped with an extensive database of frequently asked questions and their corresponding answers.
    </Text>

    <View style={{ flexDirection: "row", marginTop: 70 }}>
      <View style={{ flexDirection: "row", marginRight: 120, marginLeft: -30, marginTop: 15 }}>
        <View style={{ width: 30, height: 10, backgroundColor: "#9ACAE5", marginLeft: 5, borderRadius: 10 }}></View>
        <View style={{ width: 30, height: 10, backgroundColor: "#9ACAE5", marginLeft: 5, borderRadius: 10 }}></View>
        <View style={{ width: 30, height: 10, backgroundColor: "#22719E", marginLeft: 5, borderRadius: 10 }}></View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Image style={styles.NextPageArrow} source={require("../assets/icons8-arrow-50.png")} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SkipButtonContainer: {
    marginBottom: 20,
    marginLeft: 180,
    marginTop: 70,
    marginRight: 90,
    marginTop: '-10px',
  },

  SkipButtonText: {
    color: "#22719E",
    
    fontSize: 18,
  },

  BoardingImageOne: {
    height: 350,
    width: 290,
  },

  Subtitle: {
    fontSize: 15,
    color: "#22719E",
    marginLeft: -140,
    
  },

  Paragraph: {
    color: "#9A8E8E",
    width: 250,
    marginLeft: 25,
    marginTop: 10,
  },

  NextPageArrow: {
    height: 40,
    width: 40,
  },
});


export default BoardingPageOne