// pages/Notes.js
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tw from 'twrnc';

export default function Notes() {
  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Study Notes</Text>
      <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg`}>
        <Text style={tw`text-lg font-semibold`}>Algebra - Equations</Text>
        <Text style={tw`text-sm text-gray-600`}>
          Detailed notes on solving equations.
        </Text>
      </View>
      {/* Add more notes here */}
    </ScrollView>
  );
}
