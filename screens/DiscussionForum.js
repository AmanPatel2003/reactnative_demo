// pages/DiscussionForum.js
import React from 'react';
import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import tw from 'twrnc';

export default function DiscussionForum() {
  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Discussion Forum</Text>
      <ScrollView style={tw`flex-1`}>
        <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg`}>
          <Text style={tw`text-lg font-semibold`}>
            How to solve algebraic equations?
          </Text>
          <Text style={tw`text-sm text-gray-600`}>Posted by: Jane Doe</Text>
        </View>
        {/* Add more discussions here */}
      </ScrollView>
      <TextInput
        style={tw`border p-4 rounded-lg mt-4`}
        placeholder="Start a new discussion..."
      />
      <Button title="Post" onPress={() => {}} />
    </View>
  );
}
