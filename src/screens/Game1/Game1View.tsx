import React from 'react';

import Board, { BoardProps } from '@components/Board';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

export interface Game1ViewProps {
  cardList: BoardProps['cardList'];
  disabled: BoardProps['disabled'];
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  solvedCardList: BoardProps['solvedCardList'];
  title: GameHeaderProps['title'];
};

const Game1View: React.ComponentType<Game1ViewProps> = (props) => {
  const { 
    cardList,
    disabled,
    flippedCardIdList,
    handleCardOnPress,
    solvedCardList,
    title,
  } = props;
  
  return (
    <GameBackground>
      <GameHeader 
        title={title}
      />
      <Board 
        cardList={cardList}
        disabled={disabled}
        flippedCardIdList={flippedCardIdList}
        handleCardOnPress={handleCardOnPress}
        solvedCardList={solvedCardList}
      />
    </GameBackground>
  );
}
export default React.memo(Game1View);