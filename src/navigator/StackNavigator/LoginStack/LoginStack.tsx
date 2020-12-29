import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import LoginScreen, { options as LoginScreenOptions } from "@screens/Login";
import SignUpScreen, { options as SignUpScreenOptions } from "@screens/SignUp";

export type LoginStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      // screenOptions={screenOptions}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} options={LoginScreenOptions}/>
      <LoginStack.Screen name="SignUp" component={SignUpScreen} options={SignUpScreenOptions}/>
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;