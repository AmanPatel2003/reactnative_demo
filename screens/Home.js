// pages/HomeScreen.js
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import {useTailwind} from 'tailwindcss-react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';

export default function HomeScreen() {
 
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Image
        source={require('../assets/logo.webp')}
        style={tw`w-24 h-24`}
      />
      <Text style={tw`text-2xl font-bold mt-4`}>Welcome to Foryou</Text>
      <Text style={tw`text-lg mt-2`}>
        Your Exam Preparation Companion
      </Text>
      <View style={tw`mt-6`}>
        <TouchableOpacity
          style={tw`bg-blue-500 p-4 rounded-full mb-4`}
          onPress={() => navigation.navigate('PracticeTests')}>
          <Text style={tw`text-white text-center`}>
            Start Practice Tests
          </Text>
        </TouchableOpacity>
        {/* Add more navigation buttons here */}
      </View>
    </View>
  );
}
