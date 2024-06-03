/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function CardWrapper({children}: {children: React.ReactNode}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    marginHorizontal: 15,
    marginVertical: 6,
    borderColor: '#99AAAB',
    borderRadius: 20,
    borderWidth: 1,
  },
});
