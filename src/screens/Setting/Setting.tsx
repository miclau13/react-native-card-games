import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthContext } from '../../../App';
import LoadingComponent from '@components/Loading';
import { SettingStackParamList } from '@navigator/StackNavigator/SettingStack';
import SettingView, { SettingViewProps } from './SettingView';

type SettingScreenNavigationProp = StackNavigationProp<
  SettingStackParamList,
  'Setting'
>;

type Props = {
  navigation: SettingScreenNavigationProp;
};

interface Setting {
  loading: boolean;
};

const Setting: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState<Setting['loading']>(false);
  const { signOut } = React.useContext(AuthContext);

  const handleLogoutOnPress = React.useCallback<SettingViewProps['handleLogoutOnPress']>(() => {
    signOut();
  }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <SettingView 
      handleLogoutOnPress={handleLogoutOnPress}
    />
  )
};

export default React.memo(Setting);