import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { LoginStackParamList } from './LoginStack';

type ScreenOptions = StackNavigationOptions | ((props: {
  route: RouteProp<LoginStackParamList, keyof LoginStackParamList>;
  navigation: any;
}) => StackNavigationOptions) | undefined;

export const screenOptions: ScreenOptions = (props) => {

  return ({
    // title: "Login"
    // tabBarLabel: "Login"
  })
};
