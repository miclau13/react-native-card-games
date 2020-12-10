import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';

export interface HomeViewProps {
  handleGameCardOnPress(gameNumber: number): Exclude<TouchableOpacityProps['onPress'], undefined>;
};

const HomeView: React.ComponentType<HomeViewProps> = (props) => {
  const { 
    handleGameCardOnPress,
  } = props;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGameCardOnPress(1)}>
        <Image
          source={require('@assets/Game/Game_1.png')}
          style={{ height: 300, width: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.horizontalViewBox1} />
      <TouchableOpacity onPress={handleGameCardOnPress(2)}>
        <Image
          source={require('@assets/Game/Game_2.png')}
          style={{ height: 300, width: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* <View style={styles.horizontalViewBox1} />
      <TouchableOpacity onPress={handleGameCardOnPress(3)}>
        <Image
          source={require('@assets/Game/Game_3.png')}
          style={{ height: 300, width: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity> */}
      <View style={styles.horizontalViewBox1} />
      <TouchableOpacity onPress={handleGameCardOnPress(4)}>
        <Image
          source={require('@assets/Game/Game_4.png')}
          style={{ height: 300, width: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.horizontalViewBox1} />
      <TouchableOpacity onPress={handleGameCardOnPress(5)}>
        <Image
          source={require('@assets/Game/Game_5.png')}
          style={{ height: 300, width: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
export default React.memo(HomeView);