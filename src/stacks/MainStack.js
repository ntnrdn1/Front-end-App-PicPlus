import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import Photographer from '../screens/Photographer';
import SignUp from '../screens/SignUp';
import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Photographer" component={Photographer} />
    </Stack.Navigator>
  );
};
