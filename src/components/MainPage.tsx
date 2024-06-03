/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ProfileIcon from '../../assets/ProfileIcon';
import {Divider} from 'react-native-elements';
import Barchart from './Barchart';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import CardWrapper from './CardWrapper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RecommendedCard from './RecommendedCard';
import {formatPrice} from '../helper/priceFormat';

let ScreenHeight = Dimensions.get('window').height;

function MainPage() {
  const mostSpent = {
    category: 'Household',
    value: 24500,
  };
  const mostShoppedAt = {
    category: 'Ikea',
    value: 7860,
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>KredSmart</Text>
          <ProfileIcon />
        </View>
        <Divider style={styles.divider} />
        <View>
          <Barchart />
        </View>
        <RecommendedCard />
        <CardWrapper>
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                fontFamily: 'Montserrat',
                color: '#616C6F',
              }}>
              YOU SPENT MOST ON
            </Text>
            <View style={[styles.rowflex]}>
              <View style={[styles.rowflex, {marginVertical: 10}]}>
                <FontAwesomeIcon
                  name="home"
                  size={20}
                  style={{marginRight: 12}}
                />
                <View
                  style={{
                    backgroundColor: '#DAE0E2',
                    paddingHorizontal: 15,
                    paddingVertical: 3,
                    borderRadius: 7,
                  }}>
                  <Text style={styles.categorystyle}>{mostSpent.category}</Text>
                </View>
              </View>
              <Text style={styles.pricestyle}>
                -{formatPrice.format(mostSpent.value).split('.')[0]}
              </Text>
            </View>
          </View>
          <Divider style={{marginVertical: 12}} />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                fontFamily: 'Montserrat',
                color: '#616C6F',
              }}>
              YOU SHOPPED MOST AT
            </Text>
            <View style={[styles.rowflex, {marginVertical: 10}]}>
              <View
                style={{
                  backgroundColor: '#DAE0E2',
                  paddingHorizontal: 15,
                  paddingVertical: 3,
                  borderRadius: 7,
                }}>
                <Text style={styles.categorystyle}>
                  {mostShoppedAt.category}
                </Text>
              </View>
              <Text style={styles.pricestyle}>
                -{formatPrice.format(mostShoppedAt.value).split('.')[0]}
              </Text>
            </View>
          </View>
        </CardWrapper>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // height: ScreenHeight,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  maskedView: {
    height: 100,
    width: 100,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  gradient: {
    flex: 1,
  },
  divider: {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4, // For Android shadow
  },
  chartArea: {
    width: ScreenWidth,
  },
  rowflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricestyle: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#7B8788',
  },
  categorystyle: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: 'semibold',
    color: 'black',
  },
});

export default MainPage;
