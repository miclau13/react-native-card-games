import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated, View } from 'react-native';

import styles from './styles';

interface EndGameLoadingProps {
  progress?: number | Animated.Value;
};

const EndGameLoading: React.ComponentType<EndGameLoadingProps> = (props) => {

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay 
        loop
        source={require('./assets/4241-fireworks.json')}
        {...props}
      />
    </View>
  )
};

export default EndGameLoading;