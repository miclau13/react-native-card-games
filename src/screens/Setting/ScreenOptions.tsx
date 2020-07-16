import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { SettingStackParamList } from '@navigator/StackNavigator/SettingStack';

const options: RouteConfig<SettingStackParamList, keyof SettingStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    // title: 'Setting', 
  };
};

export default options;