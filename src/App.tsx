/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <SafeAreaView style={{marginBottom: 10}}>
        <ScrollView>
          <MainPage />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
