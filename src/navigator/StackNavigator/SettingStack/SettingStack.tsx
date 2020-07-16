import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import SettingScreen, { options as SettingScreenOptions } from "@screens/Setting";
// import Game1Screen, { options as Game1ScreenOptions } from "@screens/Game1";
// import Game2Screen, { options as Game2ScreenOptions } from "@screens/Game2";
// import Game3Screen, { options as Game3ScreenOptions } from "@screens/Game3";
// import Game4Screen, { options as Game4ScreenOptions } from "@screens/Game4";
// import Game5Screen, { options as Game5ScreenOptions } from "@screens/Game5";

export type SettingStackParamList = {
  Setting: undefined;
  // Game1: undefined;
  // Game2: undefined;
  // Game3: undefined;
  // Game4: undefined;
  // Game5: undefined;
};

const SettingStack = createStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator
      // screenOptions={screenOptions}
    >
      <SettingStack.Screen name="Setting" component={SettingScreen} options={SettingScreenOptions}/>
      {/* <SettingStack.Screen name="Game1" component={Game1Screen} options={Game1ScreenOptions}/>
      <SettingStack.Screen name="Game2" component={Game2Screen} options={Game2ScreenOptions}/>
      <SettingStack.Screen name="Game3" component={Game3Screen} options={Game3ScreenOptions}/>
      <SettingStack.Screen name="Game4" component={Game4Screen} options={Game4ScreenOptions}/>
      <SettingStack.Screen name="Game5" component={Game5Screen} options={Game5ScreenOptions}/> */}
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;