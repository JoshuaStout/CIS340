import React from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {
  let picture = {uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png'};
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Image source= {picture}
      style={{width: 200, height: 200}}/>
      <Text>Hello, This is my Dog!</Text>
    </View>
  );
}
