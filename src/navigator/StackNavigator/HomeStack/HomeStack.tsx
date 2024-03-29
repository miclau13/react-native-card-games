import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import HomeScreen, { options as HomeScreenOptions } from "@screens/Home";
import Game1Screen, { options as Game1ScreenOptions } from "@screens/Game1";
import Game2Screen, { options as Game2ScreenOptions } from "@screens/Game2";
import Game3Screen, { options as Game3ScreenOptions } from "@screens/Game3";
import Game4Screen, { options as Game4ScreenOptions } from "@screens/Game4";
import Game5Screen, { options as Game5ScreenOptions } from "@screens/Game5";

export type HomeStackParamList = {
  Home: undefined;
  Game1: undefined;
  Game2: undefined;
  Game3: undefined;
  Game4: undefined;
  Game5: undefined;
};

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      // screenOptions={screenOptions}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions}/>
      <HomeStack.Screen name="Game1" component={Game1Screen} options={Game1ScreenOptions}/>
      <HomeStack.Screen name="Game2" component={Game2Screen} options={Game2ScreenOptions}/>
      <HomeStack.Screen name="Game3" component={Game3Screen} options={Game3ScreenOptions}/>
      <HomeStack.Screen name="Game4" component={Game4Screen} options={Game4ScreenOptions}/>
      <HomeStack.Screen name="Game5" component={Game5Screen} options={Game5ScreenOptions}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;