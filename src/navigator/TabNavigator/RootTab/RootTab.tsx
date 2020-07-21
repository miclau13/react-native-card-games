import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '@navigator/StackNavigator/HomeStack';
import SettingStack from '@navigator/StackNavigator/SettingStack';
import { screenOptions, tabBarOptions } from './NavigatorOptions';

export type RootTabsParamList = {
  HomeStack: undefined;
  SettingStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="SettingStack" component={SettingStack} options={{ tabBarLabel: 'Settings' }} />
    </Tab.Navigator>
  )
};

export default RootTab;