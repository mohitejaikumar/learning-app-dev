/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomCardImage} from './CustomImage';
import Atm3x from '../../assets/atm3x.jpg';
import CardWrapper from './CardWrapper';
import {Button, Divider} from 'react-native-elements';
import {formatPrice} from '../helper/priceFormat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function RecommendedCreditCard() {
  const [creditCardName, setCreditCardName] = useState(
    'Samsung Axis Credit Card',
  );
  const [savingAmt, setSavingAmt] = useState<number>(4500);
  const [spendingAmt, setSpendingAmt] = useState<number>(32000);

  const handleOnAdd = () => {
    setSpendingAmt(spendingAmt + 1); // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('soft', options);
  };
  const handleOnSubtract = () => {
    setSpendingAmt(spendingAmt - 1); // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('soft', options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardName}>{creditCardName}</Text>
      <Text style={styles.subtxt}>
        Based on your spendings, we think you can save most using this card
      </Text>
      <View style={styles.cardContainer}>
        <CustomCardImage
          imageURL={Atm3x}
          width={250}
          height={150}
          borderRadius={20}
        />
        <View style={styles.viewDetails}>
          <Text style={styles.viewDetailstxt}>View details</Text>
        </View>
      </View>
      <CardWrapper>
        <View style={styles.savingCard}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.savingAmt}>
              {formatPrice.format(savingAmt).split('.')[0]}
            </Text>
            <Text style={{fontSize: 13, color: '#004D78', fontWeight: 'bold'}}>
              SAVINGS / year
            </Text>
          </View>
          <Divider style={{marginVertical: 15}} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 13, color: '#616C6F', fontWeight: 'bold'}}>
              PREDICTED ON SPENDINGS OF
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* + */}
              <AntDesign
                name="minuscircleo"
                color="#21A870"
                size={15}
                style={{marginHorizontal: 13}}
                onPress={handleOnSubtract}
              />
              <Text
                style={{
                  fontSize: 23,
                  color: 'black',
                  fontWeight: 'bold',
                  marginVertical: 5,
                }}>
                {formatPrice.format(spendingAmt).split('.')[0]}{' '}
              </Text>
              <AntDesign
                name="pluscircleo"
                color="#21A870"
                size={15}
                style={{marginHorizontal: 10}}
                onPress={handleOnAdd}
              />
              {/*  */}
            </View>
          </View>
        </View>
      </CardWrapper>
      <Button
        title="Apply For Card"
        buttonStyle={{
          width: 300,
          backgroundColor: '#21A870',
          borderRadius: 30,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginVertical: 38,
          justifyContent: 'center',
        }}
        icon={
          <EvilIcon
            name="external-link"
            size={30}
            color="white"
            style={{marginHorizontal: 10}}
          />
        }
        iconPosition="right"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardName: {
    marginTop: 20,
    fontSize: 23,
    color: '#00A8B2',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  subtxt: {
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#616C6F',
    fontSize: 17,
    marginVertical: 8,
  },
  cardContainer: {
    marginTop: 15,
    marginBottom: 60,
    alignItems: 'center',
  },
  viewDetails: {
    backgroundColor: 'white',
    width: 120,
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    top: '95%',
    right: '17%',
  },
  viewDetailstxt: {
    color: '#21A870',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  savingCard: {
    width: 260,
    height: 140,
  },
  savingAmt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#21A870',
  },
});
