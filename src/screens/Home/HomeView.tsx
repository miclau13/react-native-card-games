import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps, Card, Icon } from 'react-native-elements';

import styles from './styles';

export interface HomeViewProps {
  handleGameCardOnPress(gameNumber: number): Exclude<ButtonProps['onPress'], undefined>;
};

const HomeView: React.ComponentType<HomeViewProps> = (props) => {
  const { 
    handleGameCardOnPress,
  } = props;
  
  return (
    <View>
      <Card
        title='Game1'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleGameCardOnPress(1)}
          title='PLAY GAME 1' 
        />
      </Card>
      <Card
        title='Game2'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleGameCardOnPress(2)}
          title='PLAY GAME 2' 
        />
      </Card>
      <Card
        title='Game3'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleGameCardOnPress(3)}
          title='PLAY GAME 3' 
        />
      </Card>
      <Card
        title='Game4'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleGameCardOnPress(4)}
          title='PLAY GAME 4' 
        />
      </Card>
      <Card
        title='Game5'
        // image={require('../images/pic2.jpg')}
      >
        <Button
          icon={<Icon name='input' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={handleGameCardOnPress(5)}
          title='PLAY GAME 5' 
        />
      </Card>
    </View>
  );
}
export default React.memo(HomeView);