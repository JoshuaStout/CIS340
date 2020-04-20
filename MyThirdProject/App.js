import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

function TV(props) {
  const [isOff, setIsOff] = useState(true);

  return(
  <View style={{
    justifyContent: "center",
    alignItems: "center"
  }}>
    <Text>
     {"\n\n\n"}
     This is {props.name} TV, and it is {isOff ? "OFF" : "Turned On"}!
    </Text>
    <Button 
    onPress= {() => {
      setIsOff(false);
    }}
    disabled={!isOff}
    title={isOff ? "Turn Me On, Please!" : "Thank You!"}
    />
  </View>
  );
}

export default function MultiTVs() {
  return(
    <View>
      <TV name = "LG" />
      <TV name = "Sony" />
      <TV name = "Vizio" />
      <TV name = "Mitsubishi" />
    </View>
  );
}
 