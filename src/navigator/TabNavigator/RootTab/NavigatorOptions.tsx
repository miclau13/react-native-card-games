import React from "react";
import { Icon } from "react-native-elements";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions, BottomTabBarOptions } from "@react-navigation/bottom-tabs"; 

import { RootTabsParamList } from './RootTab';

type ScreenOptions = BottomTabNavigationOptions | ((props: {
  route: RouteProp<RootTabsParamList, keyof RootTabsParamList>;
  navigation: any;
}) => BottomTabNavigationOptions)

export const screenOptions: ScreenOptions = (props) => {
  const { route } = props;
  return ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = 'home';
      if (route.name === 'HomeStack') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      }
      return <Icon color={color} name={iconName} size={size * 1.5} type="material-community" />
    },
  })
};

export const tabBarOptions: BottomTabBarOptions = {};
