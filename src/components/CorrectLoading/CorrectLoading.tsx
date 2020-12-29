import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated, View } from 'react-native';

import styles from './styles';

interface CorrectLoadingProps {
  progress?: number | Animated.Value;
};

const CorrectLoading: React.ComponentType<CorrectLoadingProps> = (props) => {

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay 
        loop
        source={require('./assets/8808-correct-animation.json')}
        {...props}
      />
    </View>
  )
};

export default CorrectLoading;