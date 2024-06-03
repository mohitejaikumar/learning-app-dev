/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({text, fontSize}: {text: string; fontSize: number}) => {
  return (
    <View style={styles.textContainer}>
      {React.createElement(
        MaskedView,
        {maskElement: <Text style={[{fontSize}]}>{text}</Text>},
        <LinearGradient
          colors={['#a8e063', '#56ab2f']} // Light green to dark green
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{flex: 1}}
        />,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

export default GradientText;
