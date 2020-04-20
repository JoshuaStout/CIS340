import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {

  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n\n\n\t\t"}
        Hello, I am a student app developer in CIS-340! {"\n"}
        </Text>
        <TextInput 
        style={{
          height: 40,
          borderColor: "black",
          borderWidth: 1
        }}
        dafaultValue = "Enter Input!"/>
        </View>
  );
}


