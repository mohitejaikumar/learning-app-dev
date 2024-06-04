/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {PropsWithChildren} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Image} from 'react-native-elements';

type ImageProps = PropsWithChildren<{
  imageURL: ImageSourcePropType;
  height?: number;
  width?: number;
  borderRadius?: number;
}>;

export const CustomCardImage = ({
  imageURL,
  height,
  width,
  borderRadius,
}: ImageProps) => {
  return (
    <View>
      <Image
        source={imageURL}
        style={{width: width, height: height, borderRadius: borderRadius}}
      />
    </View>
  );
};
