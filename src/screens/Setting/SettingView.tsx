import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps, Card, Icon } from 'react-native-elements';

import styles from './styles';

export interface SettingViewProps {
  handleLogoutOnPress: Exclude<ButtonProps['onPress'], undefined>;
};

const SettingView: React.ComponentType<SettingViewProps> = (props) => {
  const { 
    handleLogoutOnPress,
  } = props;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* <View style={{ marginVertical: 16 }} /> */}
      <View style={{ width: '50%', alignSelf: 'center'}}>
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleLogoutOnPress}
          title='Log Out' 
        />
      </View>
    </View>
  );
}
export default React.memo(SettingView);