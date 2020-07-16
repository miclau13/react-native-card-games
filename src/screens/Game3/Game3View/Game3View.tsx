import React from 'react';
import { View } from 'react-native';

import Board, { BoardProps } from '@components/Board';
import styles from './styles';

export interface Game3ViewProps {
  cardList: BoardProps['cardList'];
  disabled: BoardProps['disabled'];
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  solvedCardList: BoardProps['solvedCardList'];
};

const Game3View: React.ComponentType<Game3ViewProps> = (props) => {
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
export default React.memo(Game3View);