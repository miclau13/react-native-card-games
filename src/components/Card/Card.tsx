import React from 'react';
import { Animated, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';

const BackImage = require('./assets/rice_cover.jpeg');

export interface CardProps {
  disabled: boolean;
  id: string;
  handleCardOnPress(id: string): void;
  isFlipped: boolean;
  solved: boolean;
  type: string;
};

export interface ICard {
  id: string, 
  type: string
};

interface Card { 
  handleOnPress(id: string): TouchableOpacityProps['onPress'];
};

const Card: React.ComponentType<CardProps> = (props) => {
  const {
    disabled,
    id,
    isFlipped,
    handleCardOnPress,
    solved,
    type,
  } = props;

  const imageSrc = React.useMemo(() => {
    const frontImage = 
      type === "paper" 
        ? require('./assets/paper_roll_cover.jpeg')
        : type === "mask" 
            ? require('./assets/mask_cover.png')
            : require('./assets/sanitizer_cover.jpeg')
    return isFlipped || solved ? frontImage : BackImage
  }
    
  , [BackImage, isFlipped, type, solved]);

  let flipAnimatedValue = new Animated.Value(0);
  let val = 0;

  flipAnimatedValue.addListener(({ value }) => {
    val = value;
  });

  let frontInterpolate = flipAnimatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  let backInterpolate = flipAnimatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }]
  }
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }]
  }

  const handleOnPress = React.useCallback<Card['handleOnPress']>(id => () => {
    handleCardOnPress(id);
    if (val >= 90) {
      Animated.spring(flipAnimatedValue, {
        friction: 8,
        toValue: 0,
        tension: 1,
      }).start();
    } else {
      Animated.spring(flipAnimatedValue, {
        friction: 8,
        toValue: 180,
        tension: 10,
      }).start();
    }
  }, [flipAnimatedValue]);

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={disabled ? undefined : handleOnPress(id)}
      >
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <Image 
            containerStyle={[styles.flipContainer, styles.flipCard]}
            source={imageSrc}
            style={{ height: 200, width: 150 }}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
          <Image 
            containerStyle={[styles.flipContainer, styles.flipCard]}
            source={imageSrc}
            style={{ height: 200, width: 150 }}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
};

export default Card;