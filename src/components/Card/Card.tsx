import React from 'react';
import { Animated, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Image } from 'react-native-elements';

import { getCardImageByRankAndSuit } from '@components/FaceUpCard/utils'; 
import styles from './styles';

const BACKSIDE_CARD_IMAGE = require('@assets/Cards/Back_Side_Card.jpg');

export interface CardProps {
  disabled: boolean;
  id: string;
  handleCardOnPress(id: string): void;
  isFlipped: boolean;
  rank: string;
  suit: string;
  solved: boolean;
};

export interface ICard {
  id: string;
  rank: string;
  suit: string;
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
    rank,
    suit,
  } = props;

  const imageSrc = React.useMemo(() => {
    const frontImage = getCardImageByRankAndSuit(rank, suit);
    return isFlipped || solved ? frontImage : BACKSIDE_CARD_IMAGE
  }
    
  , [BACKSIDE_CARD_IMAGE, isFlipped, rank, suit, solved]);

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
            style={{ height: 300, width: 200 }}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
          <Image 
            containerStyle={[styles.flipContainer, styles.flipCard]}
            source={imageSrc}
            style={{ height: 300, width: 200 }}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
};

export default Card;