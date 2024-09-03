// pages/PracticeTests.js
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function PracticeTests() {
  return (
    <ScrollView style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Practice Tests</Text>
      <TouchableOpacity style={tw`bg-white p-4 mb-4 rounded-lg shadow`}>
        <Text style={tw`text-lg font-semibold`}>
          Mathematics - Basic Algebra
        </Text>
        <Text style={tw`text-sm text-gray-500`}>20 Questions</Text>
      </TouchableOpacity>
      {/* Add more test options here */}
    </ScrollView>
  );
}
