import React from 'react';
import {  Text, View, SectionList } from 'react-native';

export default  StatesApp =() => {
return(
  <View style={{flex: 1, paddingTop: 22}}>
    <SectionList
      sections={[
        {title: 'A', data: ['Alabama', 'Alaska', 'Arkansas', 'Arizona']},
        {title: 'C', data: ['Colorado', 'Califorina', 'Connecticut']},
        {title: 'D', data: ['Delaware']},
        {title: 'F', data: ['Florida']},
        {title: 'G', data: ['Georgia']},
        {title: 'H', data: ['Hawaii']},

      ]}//You can continue with more sections
        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44,}}> {item} </Text> }
        renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#B02B3B',}}>{section.title}</Text>} //Set your custom color
        keyExtractor={(item,index) =>index}
    />
  </View>

    
  ); //end of return statement
}
