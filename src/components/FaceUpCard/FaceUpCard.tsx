import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';
import { getCardImageByRankAndSuit } from './utils';

type CardRank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King';
type CardSuit = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';

export interface FaceUpCardProps {
  rank: CardRank;
  suit: CardSuit;
};

interface FaceUpCard { 
  handleOnPress(id: string): TouchableOpacityProps['onPress'];
};

const FaceUpCard: React.ComponentType<FaceUpCardProps> = (props) => {
  const {
    rank,
    suit
  } = props;

  const imageSrc = React.useMemo(() => {
    return getCardImageByRankAndSuit(rank, suit);
  }, [rank, suit]);

  return (
    <View style={styles.container}>
      <Image 
        source={imageSrc}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )
};

export default FaceUpCard;