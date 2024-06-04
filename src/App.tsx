/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import RecommendedCreditCard from './components/RecommendedCreditCard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Recommended Credit Card"
            component={RecommendedCreditCard}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
