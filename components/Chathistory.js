import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native-web';

const Chathistory = () => {
  return (
    <View style={{marginTop: 50}}>
  
             <View>
      <Text style={styles.historytext}>Chat History Archive</Text>
        <Text style={styles.exploretext}>Explore your past conversations and interactions</Text>
    </View>
    <View style={styles.inputContainer}>
     <View style={styles.historyContainer}>
        <Text style={styles.date}>
            Dec 13
        </Text>
        <View>
            <Text>Early payment discount</Text>
            <Text>approximate time - 09:30</Text>
        </View>
        <TouchableOpacity>
        <Image
          source={require("../assets/images (3).png")}
          style={styles.icon}/>
     </TouchableOpacity>
     </View>
     <View style={styles.historyContainer}>
        <Text style={styles.date}>
            Nov 27
        </Text>
        <View>
            <Text>How to make early payment</Text>
            <Text>approximate time - 12:30</Text>
        </View>
        <TouchableOpacity>
        <Image
          source={require("../assets/images (3).png")}
          style={styles.icon}/>
     </TouchableOpacity>
     </View>  

     <View style={styles.historyContainer}>
        <Text style={styles.date}>
            Oct 18
        </Text>
        <View>
            <Text>How does early payment work</Text>
            <Text>approximate time - 14:30</Text>
        </View>
        <TouchableOpacity>
        <Image
          source={require("../assets/images (3).png")}
          style={styles.icon}/>
     </TouchableOpacity>
     </View>
     <View style={styles.historyContainer}>
        <Text style={styles.date}>
            Sep 21
        </Text>
        <View>
            <Text>Payment deadlines</Text>
            <Text>approximate time - 16:00</Text>
        </View>
        <TouchableOpacity>
        <Image
          source={require("../assets/images (3).png")}
          style={styles.icon}/>
     </TouchableOpacity>
     </View>
     <View style={styles.historyContainer}>
        <Text style={styles.date}>
            Aug 10
        </Text>
        <View>
            <Text>Discounts applicable to all bills</Text>
            <Text>approximate time - 11:20</Text>
        </View>
        <TouchableOpacity>
        <Image
          source={require("../assets/images (3).png")}
          style={styles.icon}/>
     </TouchableOpacity>
     </View>
     <View style={styles.historyContainer}>
        <Text style={styles.date}>
            Jul 28
        </Text>
        <View>
            <Text>Advantages of early payment</Text>
            <Text>approximate time - 13:45</Text>
        </View>
        <TouchableOpacity>
        <Image
          source={require("../assets/images (3).png")}
          style={styles.icon}/>
     </TouchableOpacity>
     </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    leftarrow: {
        width: 31,
        height: 31,
        borderRadius: 31,
    },
    historytext: {
        color: "black",
        fontFamily: "inter",
        fontSize: 36,
        fontStyle: "normal",
        fontWeight: 600,
        marginTop:55,
        textAlign: 'center'

    },
    exploretext: {
        color: "black",
        fontFamily: "inter",
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: "bold",
        marginTop: 26,
        textAlign: 'center'
    },
    inputContainer: {
        width:318,
        height:460,
        marginTop:80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        alignSelf: "center"
    },
    historyContainer: {
        width: 275,
        height: 50,
        background: '#FFF',
        flexDirection: "row",
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        justifyContent: "space-around",
        paddingTop: 5,
        alignSelf: 'center'
    },

    icon: {
        width: 23,
        height: 17,
        marginTop: 13
        
    },
   date: {
    color: "#A89A9A",
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: "#fff",
    borderRightColor: "#A89A9A",
    width: 36,
    
   }  

})

export default Chathistory