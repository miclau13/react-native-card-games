import React from 'react';
import { ImageBackground, StyleProp, View, ViewStyle } from 'react-native';

import styles from './styles';

const IMAGE = require('@assets/Background.png')

export interface GameBackgroundProps {
  containerStyle?: StyleProp<ViewStyle>;
};

const GameBackground: React.ComponentType<GameBackgroundProps> = (props) => {
  const { containerStyle, children } = props;
  return (
    <View style={containerStyle || styles.container}>
      <ImageBackground source={IMAGE} style={styles.image}>
        { children }
      </ImageBackground>
    </View>
  )
};

export default GameBackground;