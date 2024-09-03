import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'twrnc';

const landingPage = ({navigation}) => {
      const handlePress = () => {
        console.log('Button pressed');
      };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={tw``}
        onPress={() => navigation.navigate('Register')}>
        <Text style={tw`text-black`}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landingPage;
