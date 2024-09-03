// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from 'twrnc';
import landingPage from './screens/landingPage';
import register from './screens/register';
import HomeScreen from './screens/Home';
import Blueprints from './screens/Blueprints';
import DiscussionForum from './screens/DiscussionForum';
import Notifications from './screens/Notifications';
import PracticeTests from './screens/PracticeTests';
import Resources from './screens/Resources';
import Settings from './screens/Settings';
import Syllabus from './screens/Syllabus';
import UserProfile from './screens/UserProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="blueprints" component={Blueprints} />
        <Stack.Screen name="discussion" component={DiscussionForum} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="notification" component={Notifications} />
        <Stack.Screen name="practice" component={PracticeTests} />
        <Stack.Screen name="resources" component={Resources} />
        <Stack.Screen name="setting" component={Settings} />
        <Stack.Screen name="syllabus" component={Syllabus} />
        <Stack.Screen name="profile" component={UserProfile} />
        <Stack.Screen name="landing" component={landingPage} />
        <Stack.Screen name="register" component={register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
