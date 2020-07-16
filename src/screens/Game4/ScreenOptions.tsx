import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';

const options: RouteConfig<HomeStackParamList, keyof HomeStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  return {};
};

export default options;