// pages/Settings.js
import React from 'react';
import {View, Text, Switch} from 'react-native';
import tw from 'twrnc';

export default function Settings() {
  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Settings</Text>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Enable Notifications</Text>
        <Switch />
      </View>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Dark Mode</Text>
        <Switch />
      </View>
      {/* Add more settings here */}
    </View>
  );
}
