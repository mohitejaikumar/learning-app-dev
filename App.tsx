import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <PasswordGenerator />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
