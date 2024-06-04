/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

function HomeScreen({navigation}:{
  navigation:any
}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Recommended Credit Card"
        onPress={() => navigation.navigate('Recommended Credit Card')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
