import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';

import Board, { BoardProps } from '@components/Board';
import Draggable, { DraggableProps } from '@components/Draggable';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import { getCardImageByRankAndSuit } from '@components/FaceUpCard/utils';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import { CARDS_ROUND_MAP } from './constants';
import styles from './styles';
import { getDropZone } from './utils';

type CardDeck = {
  answerDeck: BoardProps['cardList'];
  questionDeck: BoardProps['cardList'];
};

export interface Game3ViewProps {
  cardDeck: CardDeck;
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  round: number;
  shouldDisplayAnswerDeck: boolean;
  solvedCardList: BoardProps['solvedCardList'];
  title: GameHeaderProps['title'];
};

interface Game3View {};

const Game3View: React.ComponentType<Game3ViewProps> = (props) => {
  const { 
    cardDeck,
    flippedCardIdList,
    handleCardOnPress,
    round,
    shouldDisplayAnswerDeck,
    solvedCardList,
    title,
  } = props;

  return (
    <GameBackground>
      <GameHeader 
        title={title}
      />
      <View style={styles.container}>
        <Board 
          cardList={cardDeck.questionDeck}
          cardPerRow={CARDS_ROUND_MAP[round]}
          disabled
          flippedCardIdList={flippedCardIdList}
          gameNumber={3}
          handleCardOnPress={()=>{}}
          initialFaceDirection="UP"
          solvedCardList={solvedCardList}
        />
      </View>
      <View style={styles.container}>
        {
          shouldDisplayAnswerDeck && 
          <Board 
            cardList={cardDeck.answerDeck}
            cardPerRow={CARDS_ROUND_MAP[round]}
            disabled={false}
            flippedCardIdList={flippedCardIdList}
            gameNumber={3}
            handleCardOnPress={handleCardOnPress}
            initialFaceDirection="DOWN"
            solvedCardList={solvedCardList}
          />
        }
      </View>
    </GameBackground>
  );
}
export default React.memo(Game3View);