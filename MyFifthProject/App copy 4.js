import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginTop: 100}}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>

    </View>
  );
}

