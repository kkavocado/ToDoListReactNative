import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DoneButon = ({ onPress,buttonText }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DoneButon

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        width: 300,
        height: 50,
        backgroundColor: "#0376f5",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation:5,
        shadowColor:"#0376f5"
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    }

})