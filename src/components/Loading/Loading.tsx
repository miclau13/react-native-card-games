import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated, View } from 'react-native';

import styles from './styles';

interface LoadingProps {
  progress?: number | Animated.Value;
};

const Loading: React.ComponentType<LoadingProps> = (props) => {

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay 
        loop
        source={require('./assets/51-preloader.json')}
        {...props}
      />
    </View>
  )
};

export default Loading;