import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

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
  handleGameCardOnPress: SettingViewProps['handleGameCardOnPress'];
  loading: boolean;
};

const Setting: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState<Setting['loading']>(false);

  const handleGameCardOnPress = React.useCallback<Setting['handleGameCardOnPress']>(gameNumber => (event) => {
    // const screen = `Game${gameNumber}`;
    // navigation.navigate(screen)
  }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <SettingView 
      handleGameCardOnPress={handleGameCardOnPress}
    />
  )
};

export default React.memo(Setting);