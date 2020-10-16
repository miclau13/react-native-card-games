import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { LoginStackParamList } from '@navigator/StackNavigator/LoginStack';

const options: RouteConfig<LoginStackParamList, keyof LoginStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    // title: 'Login', 
  };
};

export default options;