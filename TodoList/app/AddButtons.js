import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Buttons = ({ onPress, title }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    padding: 20,
    justifyContent: "flex-end"
  },
  buttonContainer:
  {
    backgroundColor: "#0376f5",
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation:5,
    shadowColor:"#0376f5",
    shadowRadius: 2
  },
  buttonText:
  {
    textAlign: "center",
    fontSize: 25,
    color: "white"
  }

})