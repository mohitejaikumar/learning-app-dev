/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MetaIcon from 'react-native-vector-icons/FontAwesome6';

export default function LandingPage() {
  return (
    <View style={styles.headingText}>
      <Icon name="whatsapp" style={styles.whatsappIcon} size={100} />
      <View style={styles.footer}>
        <Text>from</Text>
        <View style={styles.meta}>
          <MetaIcon name="meta" size={25} />
          <Text style={styles.metaText}>Meta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatsappIcon: {
    marginTop: 250,
  },
  footer: {
    marginTop: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
