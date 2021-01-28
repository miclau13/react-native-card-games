import React from 'react';

import Board, { BoardProps } from '@components/Board';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';
import { CARDS_ROUND_MAP, TITLE } from './constants';

export interface Game1ViewProps {
  cardList: BoardProps['cardList'];
  disabled: BoardProps['disabled'];
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  round: number;
  solvedCardList: BoardProps['solvedCardList'];
  title: GameHeaderProps['title'];
};

const Game1View: React.ComponentType<Game1ViewProps> = (props) => {
  const { 
    cardList,
    disabled,
    flippedCardIdList,
    handleCardOnPress,
    round,
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
        cardPerRow={CARDS_ROUND_MAP[round]/2}
        disabled={disabled}
        flippedCardIdList={flippedCardIdList}
        handleCardOnPress={handleCardOnPress}
        initialFaceDirection="DOWN"
        solvedCardList={solvedCardList}
      />
    </GameBackground>
  );
}
export default React.memo(Game1View);