import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const ListItem = ({ item }) => {

    console.log(item)
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.TitleText}>{item.title} </Text>
            <Text style={styles.TodoText}>{item.project}</Text>
            <Text style={styles.TodoText}>{item.date}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    itemContainer:
    {
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal:20,
        marginVertical:5,
        width: 350,

    },
    TitleText:
    {
        color: "black",
        fontSize: 20,
        alignItems: "flex-start",
        padding: 10,
        fontWeight: "bold"

    },
    TodoText:
    {
        color: "grey",
        fontSize: 15,
        alignItems: "flex-start",
        padding: 10,
    }
})