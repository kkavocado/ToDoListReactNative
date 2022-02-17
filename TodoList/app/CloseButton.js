import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const CloseButton = ({ onPress, renderImage }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image source={renderImage} style={styles.imageContainer} />
            </TouchableOpacity>

        </View>
    )
}

export default CloseButton

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-end",
        margin: 15
    },
    imageContainer: {
        width: 15,
        height: 15
    }
})