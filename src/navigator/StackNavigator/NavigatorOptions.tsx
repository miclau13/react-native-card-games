import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { HomeStackParamList } from './HomeStack';

type ScreenOptions = StackNavigationOptions | ((props: {
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>;
  navigation: any;
}) => StackNavigationOptions)

export const screenOptions: ScreenOptions = (props) => {

  return ({

  })
};
