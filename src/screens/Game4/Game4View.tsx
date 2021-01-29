import React from 'react';
import { Image, Text } from 'react-native-elements';

import Board, { BoardProps } from '@components/Board';
import { getCardImageBySuit } from '@components/FaceUpCard/utils';
import { FaceUpCardProps } from '@components/FaceUpCard';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

import { CARDS_ROUND_MAP } from './constants';

export interface Game4ViewProps {
  cardList: BoardProps['cardList'];
  disabled: BoardProps['disabled'];
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  requiredSuit: FaceUpCardProps['suit'];
  round: number;
  solvedCardList: BoardProps['solvedCardList'];
};

const Game4View: React.ComponentType<Game4ViewProps> = (props) => {
  const { 
    cardList,
    disabled,
    flippedCardIdList,
    handleCardOnPress,
    requiredSuit,
    round,
    solvedCardList,
  } = props;

  return (
    <GameBackground>
      <GameHeader
        containerStyle={styles.gameHeaderContainer}
      >
        <Text h2>請選擇帶有</Text> 
        <Image 
          source={getCardImageBySuit(requiredSuit)}
          style={styles.titleImage}
          resizeMode="contain"
        />
        <Text h2>的撲克牌</Text> 
      </GameHeader>
      <Board 
        cardList={cardList}
        cardPerRow={CARDS_ROUND_MAP[round]/2}
        disabled={disabled}
        flippedCardIdList={flippedCardIdList}
        handleCardOnPress={handleCardOnPress}
        initialFaceDirection="UP"
        solvedCardList={solvedCardList}
      />
    </GameBackground>
  );
}
export default React.memo(Game4View);