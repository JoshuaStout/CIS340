import React from 'react';
import {  Text} from 'react-native';

export default function MyApp() {
function getFullName(fname,mname,lname){
  return fname + " " + mname + " " + lname
}

  const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n\n\n\n\n\t\t"}
        Hello, I am a student app developer in CIS-340! {"\n\t\t\n\t\t"}
        My full name is {getFullName("Joshua", "Michael", "Stout")}! {"\n\t\t"}
        I have a {pet}! {"\n"}
        {"\t"} ╔══╗╔╗ ♡ ♡ ♡{"\n"}
        {"\t"} ╚╗╔╝║║╔═╦╦╦╔╗{"\n"}
        {"\t"} ╔╝╚╗║╚╣║║║║╔╣{"\n"}
        {"\t"} ╚══╝╚═╩═╩═╩═╝{"\n"}
        {"\t\t"} ஜ۞ஜ YOU ஜ۞ஜ{"\n"}
        </Text>
  );
}


