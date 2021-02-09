import React from 'react';
import { Animated, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Image } from 'react-native-elements';

import { FaceUpCardProps } from '@components/FaceUpCard'; 
import { getCardImageByRankAndSuit } from '@components/FaceUpCard/utils'; 
import styles from './styles';

const BACKSIDE_CARD_IMAGE = require('@assets/Cards/Back_Side_Card.png');

type FaceDirection = "UP" | "DOWN";
export interface ICard {
  id: string;
  rank: FaceUpCardProps['rank'];
  suit: FaceUpCardProps['suit'];
};
export interface CardProps {
  disabled: boolean;
  id: string;
  gameNumber?: number;
  handleCardOnPress(id: string): void;
  initialFaceDirection: FaceDirection;
  isFlipped: boolean;
  rank: ICard['rank'];
  suit: ICard['suit'];
  solved: boolean;
};

interface Card { 
  handleOnPress(id: string): TouchableOpacityProps['onPress'];
};

const Card: React.ComponentType<CardProps> = (props) => {
  const {
    disabled,
    id,
    initialFaceDirection,
    isFlipped,
    gameNumber,
    handleCardOnPress,
    solved,
    rank,
    suit,
  } = props;

  const imageSrc = React.useMemo(() => {
    const initialImage = initialFaceDirection === "DOWN" ? BACKSIDE_CARD_IMAGE : getCardImageByRankAndSuit(rank, suit);
    if (gameNumber === 3) {
      if (isFlipped) {
        return initialFaceDirection === "UP" ? BACKSIDE_CARD_IMAGE : getCardImageByRankAndSuit(rank, suit);
      } 

    } else if (isFlipped || solved) {
      return initialFaceDirection === "UP" ? BACKSIDE_CARD_IMAGE : getCardImageByRankAndSuit(rank, suit);
    } 
    return initialImage;
  }, [BACKSIDE_CARD_IMAGE, initialFaceDirection, isFlipped, rank, solved, suit]);

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
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(flipAnimatedValue, {
        friction: 8,
        toValue: 180,
        tension: 10,
        useNativeDriver: false,
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
            style={{ height: 240, width: 160 }}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
          <Image 
            containerStyle={[styles.flipContainer, styles.flipCard]}
            source={imageSrc}
            style={{ height: 240, width: 160 }}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
};

export default Card;