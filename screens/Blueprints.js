import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function Blueprints({navigation}) {
  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Exam Blueprints</Text>
      <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg`}>
        <Text style={tw`text-lg font-semibold`}>Mathematics</Text>
        <Text style={tw`text-sm text-gray-600`}>
          Weightage and exam pattern details.
        </Text>
      </View>
      <View style={tw`p-4 bg-gray-200 rounded-lg mt-4`}>
        <TouchableOpacity 
          onPress={() => {
            console.log('hello im sachin');
            navigation.navigate('practice');
          }}
          style={tw`p-3 bg-blue-500 rounded-full`}>
          <Text style={tw`text-white text-center`}>Go to Landing</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={console.log('hello im sachin')}>
        <Text style={tw`text-black `}>hello</Text>
      </TouchableOpacity>
      {/* Add more blueprints here */}
    </ScrollView>
  );
}
