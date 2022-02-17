import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ title }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                {title}
            </Text>

        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    container:{
        marginLeft: 5, 
        padding: 20, 
        alignItems: "flex-start" 
    },
    textStyle:{
        fontSize: 45, 
        fontWeight: "bold", 
        color: "black"
    }
})