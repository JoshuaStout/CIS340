import React from 'react';
import {  Text, Image , ScrollView } from 'react-native';

export default function MyScrollViewApp() {
const dog = {
  uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
}

  return (
    <ScrollView style={{padding: 40}}>
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style={{fontSize: 80}}> Try to scroll down again, if you would like to LIVE!</Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
    </ScrollView>
  );
}
