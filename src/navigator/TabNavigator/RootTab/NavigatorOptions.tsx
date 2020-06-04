import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions, BottomTabBarOptions } from "@react-navigation/bottom-tabs"; 

import { RootTabsParamList } from './RootTab';

type ScreenOptions = BottomTabNavigationOptions | ((props: {
  route: RouteProp<RootTabsParamList, keyof RootTabsParamList>;
  navigation: any;
}) => BottomTabNavigationOptions)

export const screenOptions: ScreenOptions = (props) => {
  return ({})
};

export const tabBarOptions: BottomTabBarOptions = {};
