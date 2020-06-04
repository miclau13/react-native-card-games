import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '@navigator/StackNavigator/HomeStack';
import { screenOptions, tabBarOptions } from './NavigatorOptions';

export type RootTabsParamList = {
  HomeStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  )
};

export default RootTab;