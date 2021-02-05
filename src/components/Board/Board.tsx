import React from 'react';
import { View } from 'react-native';

import Card, { CardProps, ICard } from '@components/Card';
import styles from './styles';

export interface BoardProps {
  cardList: ICard[];
  cardPerRow: number;
  disabled: CardProps['disabled'];
  flippedCardIdList: string[];
  gameNumber?: CardProps['gameNumber'];
  handleCardOnPress: CardProps['handleCardOnPress'];
  initialFaceDirection: CardProps['initialFaceDirection'];
  solvedCardList: string[];
};

const Board: React.ComponentType<BoardProps> = (props) => {
  const {
    cardList,
    cardPerRow,
    disabled,
    flippedCardIdList,
    gameNumber,
    handleCardOnPress,
    initialFaceDirection,
    solvedCardList
  } = props;

  return (
    <View style={styles.root}>
      {
        cardList.map((card, index) => {
          return (
            <React.Fragment key={card.id}>
              <Card 
                disabled={disabled || solvedCardList.includes(card.id)}
                gameNumber={gameNumber}
                handleCardOnPress={handleCardOnPress}
                id={card.id}        
                initialFaceDirection={initialFaceDirection}
                isFlipped={flippedCardIdList.includes(card.id)}
                rank={card.rank}
                suit={card.suit}
                solved={solvedCardList.includes(card.id)}
              />
              <View style={{ marginLeft: ((index+1) % cardPerRow) ? 0 : 2000 }} />
            </React.Fragment>
          )
        })
      }
    </View>
  )
};

export default Board;