import React from 'react';
import { View } from 'react-native';

import Board, { BoardProps } from '@components/Board';
import styles from './styles';

export interface Game5ViewProps {
  cardList: BoardProps['cardList'];
  disabled: BoardProps['disabled'];
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  solvedCardList: BoardProps['solvedCardList'];
};

const Game5View: React.ComponentType<Game5ViewProps> = (props) => {
  const { 
    cardList,
    disabled,
    flippedCardIdList,
    handleCardOnPress,
    solvedCardList
  } = props;
  
  return (
    <View>
      <Board 
        cardList={cardList}
        disabled={disabled}
        flippedCardIdList={flippedCardIdList}
        handleCardOnPress={handleCardOnPress}
        solvedCardList={solvedCardList}
      />
    </View>
  );
}
export default React.memo(Game5View);