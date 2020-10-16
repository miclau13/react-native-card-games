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
    <View>
      <Card
        title='[Setting1]'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleLogoutOnPress}
          title='Log Out' 
        />
      </Card>
      {/* <Card
        title='[Setting2]'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleGameCardOnPress(2)}
          title='PLAY GAME 2' 
        />
      </Card> */}
    </View>
  );
}
export default React.memo(SettingView);