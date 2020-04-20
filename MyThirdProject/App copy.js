import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hello, my name is {props.name}. I am a student app developer in CIS-340!</Text>
    </View>
  );
}

export default function MultiComponent() {
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text>Welcome to CIS-340!</Text>
      <Student name = "Joshua Stout"/>
      <Student name = "Hannah Metzger"/>
      <Student name = "Christian Stout"/>
      <Student name = "Alyssa Stout"/>
    </View>
  );
}