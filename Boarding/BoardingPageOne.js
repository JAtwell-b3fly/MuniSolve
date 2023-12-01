import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const BoardingPageOne = () => {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity  style={styles.SkipButton}>SKIP</TouchableOpacity>
      <Image style={styles.BoardingImageOne} source={require("../assets/chatbot-artificial.jpg")} />
      <Text style={styles.Subtitle}>Description:</Text>
      <Text style={styles.Paragraph}>Munibot is an intelligent and user-friendly chatbot
         designed to assist residents and stakeholders with common
         inquiries related to municipal services and information.
         </Text>

         <View style={{flexDirection:"row",marginTop:70}}>
            <View style={{flexDirection:"row",marginRight:120,marginLeft:-30,marginTop:15}}>
                <View style={{width:30,height:10,backgroundColor:"#22719E",marginLeft:5,borderRadius:10}}></View>
                <View style={{width:30,height:10,backgroundColor:"#9ACAE5",marginLeft:5,borderRadius:10}}></View>
                <View style={{width:30,height:10,backgroundColor:"#9ACAE5",marginLeft:5,borderRadius:10}}></View>
            </View>
           
            <TouchableOpacity>
                <Image style={styles.NextPageArrow} source={require("../assets/icons8-arrow-50.png")} />
               </TouchableOpacity>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
     
    MainContainer: {
        height:600,
        width:300,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    SkipButton: {
        color:"#22719E",
        textAlign:"center",
        marginBottom:20,
        marginLeft:180,
        marginTop:70,
        fontFamily: "sansSerif",
    },

    BoardingImageOne: {
        height:350,
        width:290,
        alignContent:"center",
    },

    Subtitle: {
        fontSize:15,
        color:"#22719E",
        marginLeft:-140,
        fontWeight:500,
    },

    Paragraph: {
        color:"#9A8E8E",
        width:250,
        marginLeft:25,
        marginTop:10
    },

    NextPageArrow:{
      height:40,
      width:40,
    },
})


export default BoardingPageOne