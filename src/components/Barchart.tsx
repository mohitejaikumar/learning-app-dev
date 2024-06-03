/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/AntDesign';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Feb', 'March', 'April', 'May'],
  datasets: [
    {
      data: [14, 80, 100, 55],
    },
  ],
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0, // Rounds the values to the nearest integer
  color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Green bars
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black labels
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: '#e3e3e3',
    strokeDasharray: '0',
  },
};

export default function Barchart() {
  return (
    <View style={styles.container}>
      <View style={styles.chartHeader}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 23,
            lineHeight: 24,
            color: '#040C20',
            fontFamily: 'Montserrat',
          }}>
          Your Spendings
        </Text>
        <View style={styles.seeAllContainer}>
          <Text
            style={{
              fontWeight: 'semibold',
              fontSize: 18,
              lineHeight: 20,
              color: '#040C20',
              fontFamily: 'Montserrat',
            }}>
            See all
          </Text>
          <Icon color="green" name="right" size={20} />
        </View>
      </View>
      <View>
        <BarChart
          data={data}
          width={screenWidth} // Width from screen width
          height={200}
          yAxisLabel=""
          yAxisSuffix="k"
          chartConfig={chartConfig}
          fromZero={true} // Start y-axis from zero
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    height: 280,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  titletxt: {
    fontSize: 24,
    backgroundColor: 'black',
  },
  chartHeader: {
    marginVertical: 20,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});
