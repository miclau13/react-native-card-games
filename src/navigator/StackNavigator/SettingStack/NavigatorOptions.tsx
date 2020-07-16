import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { HomeStackParamList } from './SettingStack';

type ScreenOptions = StackNavigationOptions | ((props: {
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>;
  navigation: any;
}) => StackNavigationOptions) | undefined;

export const screenOptions: ScreenOptions = (props) => {

  return ({
    // title: "Home"
    tabBarLabel: "Settings"
  })
};
