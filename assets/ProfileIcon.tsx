/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export default function ProfileIcon() {
  return (
    <>
      <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <Circle cx="20" cy="20" r="20" fill="#21A870" />
        <Path
          d="M20.0001 17.7778C22.4547 17.7778 24.4446 15.788 24.4446 13.3334C24.4446 10.8788 22.4547 8.88892 20.0001 8.88892C17.5455 8.88892 15.5557 10.8788 15.5557 13.3334C15.5557 15.788 17.5455 17.7778 20.0001 17.7778Z"
          fill="white"
        />
        <Path
          opacity="0.5"
          d="M28.8891 26.1111C28.8891 28.8722 28.8891 31.1111 20.0002 31.1111C11.1113 31.1111 11.1113 28.8722 11.1113 26.1111C11.1113 23.35 15.0913 21.1111 20.0002 21.1111C24.9091 21.1111 28.8891 23.35 28.8891 26.1111Z"
          fill="white"
        />
      </Svg>
    </>
  );
}
