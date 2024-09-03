// pages/UserProfile.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function UserProfile() {
  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>User Profile</Text>
      <Text style={tw`text-lg font-semibold mb-2`}>Name: John Doe</Text>
      <Text style={tw`text-lg font-semibold mb-2`}>Exam: UPSC</Text>
      {/* Add more profile details */}
      <TouchableOpacity style={tw`bg-red-500 p-4 mt-6 rounded-full`}>
        <Text style={tw`text-white text-center`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
