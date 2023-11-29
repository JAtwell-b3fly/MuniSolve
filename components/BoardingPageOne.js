import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const BoardingPageOne = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.SkipButton}> SKIP </TouchableOpacity>
      <Image
        style={styles.onBoardingImage}
        source={require("../assets/chatbot-artificial-intelligence-abstract-concept-illustration-artificial-intelligence-chatbot-service-interactive-support-machine-learning-natural-language-processing_335657-339.jpg")}
      />

      <Text style={styles.Header}>Description:</Text>

      <Text style={styles.paragraph}>
        Munibot is an intelligent and user-friendly chatbot designed to assist
        residents and stakeholders with common inquiries related to municipal
        services and information.
      </Text>
      <View style={{ flexDirection: "row",marginTop:60, }}>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 30,marginRight:100,marginTop:15 }}>
          <View
            style={{
              backgroundColor: "#22719E",
              marginRight: 5,
              width: "2rem",
              height: 13,
              borderRadius: 15,
            }}
          />
          <View
            style={{
              backgroundColor: "#9ACAE5",
              marginRight: 5,
              width: "2rem",
              height: 13,
              borderRadius: 15,
            }}
          />
          <View
            style={{
              backgroundColor: "#9ACAE5",
              marginRight: 5,
              width: "2rem",
              height: 13,
              borderRadius: 15,
            }}
          />
        </View>
        <Image
          style={styles.NextPageArrow}
          source={require("../assets/icons8-arrow-50.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "center",
  },

  SkipButton: {
    color: "#22719E",
    marginBottom: 50,
    marginLeft: 270,
    fontWeight:600,

    // marginTop: -50,
  },

  onBoardingImage: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },

  Header: {
    fontSize: 17,
    fontWeight: 500,
    color: "#22719E",
    marginLeft: 40,
    marginBottom: 10,
  },

  paragraph: {
    width: 250,
    marginLeft: 40,
    color: "gray",
  },

  NextPageArrow: {
    height: 40,
    width: 40,
    // marginTop:40,
    alignSelf: "flex-end",
  },
});

export default BoardingPageOne;
