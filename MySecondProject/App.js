import React from 'react';
import { Text, TextInput, View } from 'react-native';

function MyApp() {

  return (
    <View>
      <Text>
        Hello, I am a student app developer in CIS-340! 
        </Text>
    </View>
  );
}

export default function MultiComponent(){
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text> Welcome to my class!</Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}

