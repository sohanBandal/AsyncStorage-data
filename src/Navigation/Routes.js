// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpalceScreen from '../Screens/SpalceScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import OtpScreen from '../Screens/OtpScreen';
import Forgot_Password from '../Screens/Forgot_Password';
import Verify_your_mobile_Screen from '../Screens/Verify_your_mobile_Screen';
import Reset_PasswordScreen from '../Screens/Reset_PasswordScreen';
import ProFileScreen from '../Screens/ProFileScreen';
import HomeScreenPagFirst from '../Screens/HomeScreenPagFirst';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SpalceScreen'>
        <Stack.Screen name="SpalceScreen" component={SpalceScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{headerShown:false}}/>
        <Stack.Screen name="Verify_your_mobile_Screen" component={Verify_your_mobile_Screen} options={{headerShown:false}}/>
        <Stack.Screen name="Reset_PasswordScreen" component={Reset_PasswordScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProFileScreen" component={ProFileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreenPagFirst" component={HomeScreenPagFirst} options={{headerShown:false}}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default Routes;