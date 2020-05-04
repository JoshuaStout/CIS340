import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
      <View style={{flex: 2, backgroundColor: 'yellow'}}/>
      <View style={{flex: 3, backgroundColor: 'blue'}}></View>
      <View style={{flex: 4, backgroundColor: 'purple'}}></View>

    </View>
  );
}

