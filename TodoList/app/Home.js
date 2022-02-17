import React, { useState, useContext } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  SafeAreaViewComponent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddButtons from './AddButtons';
import ToDoList from './ToDoInput';
import ListItem from './ListItem';
import Title from './Title';
import AppContext, { useAppContext } from './AppContext';
import AppProvider from './AppContext';


const Home = ({ navigation }) => {

  const data = useAppContext()
  console.log({ data })

  const handlePress = () => {
    navigation.navigate('ToDoInput')
  }

  const renderItem = ({ item }) => <ListItem item={item} />


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f9fa' }}>
      <Title title={'Today'} />
      <FlatList data={data.data} renderItem={renderItem} />
      <AddButtons title={'+'} onPress={handlePress} />
    </SafeAreaView>

  )
}

export default Home
