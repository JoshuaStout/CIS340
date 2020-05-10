
// This is a template project sent to students
import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput, Image} from "react-native";


class WeatherForecast extends Component {
  
  
  render() {
    
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/sky.jpg")}
          resizeMode="cover"
          style={styles.backdrop}
        />
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current Weather For:
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={() => {
                    alert('Weather Forcast!');
                  }}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
          
          </View>
        
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30, backgroundColor: "#000000", },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
     opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#FFFAF0",
    borderBottomWidth: 3,
    marginLeft: 18,
   
  },
  zipCode: { flex: 1, width: 60, height: baseFontSize },
  mainText: { fontSize: baseFontSize , color: "#FFFAF0" }
});

export default WeatherForecast;
