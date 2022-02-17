
import React, { createContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home.js';
import ToDoInput from './ToDoInput.js';
import AppProvider from './AppContext.js';
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ToDoInput" component={ToDoInput} />
        </Stack.Navigator>

      </NavigationContainer>
    </AppProvider>

  )
};

export default App;
