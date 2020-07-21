import React from 'react';
import { View } from 'react-native';

import Card, { CardProps, ICard } from '@components/Card';
import styles from './styles';

export interface BoardProps {
  cardList: ICard[];
  disabled: CardProps['disabled'];
  flippedCardIdList: string[];
  handleCardOnPress: CardProps['handleCardOnPress'];
  solvedCardList: string[];
};

const Board: React.ComponentType<BoardProps> = (props) => {
  const {
    cardList,
    disabled,
    flippedCardIdList,
    handleCardOnPress,
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
                handleCardOnPress={handleCardOnPress}
                id={card.id}        
                isFlipped={flippedCardIdList.includes(card.id)}
                // key={card.id}
                solved={solvedCardList.includes(card.id)}
                type={card.type}
              />
              <View style={{ marginLeft: ((index+1) % 3) ? 0 : 2000 }} />
            </React.Fragment>
          )
        })
      }
    </View>
  )
};

export default Board;