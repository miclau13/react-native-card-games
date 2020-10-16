import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import LoginScreen, { options as LoginScreenOptions } from "@screens/Login";
// import Game1Screen, { options as Game1ScreenOptions } from "@screens/Game1";
// import Game2Screen, { options as Game2ScreenOptions } from "@screens/Game2";
// import Game3Screen, { options as Game3ScreenOptions } from "@screens/Game3";
// import Game4Screen, { options as Game4ScreenOptions } from "@screens/Game4";
// import Game5Screen, { options as Game5ScreenOptions } from "@screens/Game5";

export type LoginStackParamList = {
  Login: undefined;
  // Game1: undefined;
  // Game2: undefined;
  // Game3: undefined;
  // Game4: undefined;
  // Game5: undefined;
};

const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      // screenOptions={screenOptions}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} options={LoginScreenOptions}/>
      {/* <LoginStack.Screen name="Game1" component={Game1Screen} options={Game1ScreenOptions}/>
      <LoginStack.Screen name="Game2" component={Game2Screen} options={Game2ScreenOptions}/>
      <LoginStack.Screen name="Game3" component={Game3Screen} options={Game3ScreenOptions}/>
      <LoginStack.Screen name="Game4" component={Game4Screen} options={Game4ScreenOptions}/>
      <LoginStack.Screen name="Game5" component={Game5Screen} options={Game5ScreenOptions}/> */}
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;