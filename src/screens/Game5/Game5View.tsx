import React from 'react';
import { View } from 'react-native';

import Board, { BoardProps } from '@components/Board';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';
import { CARDS_ROUND_MAP } from './constants';

type CardDeck = {
  answerDeck: BoardProps['cardList'];
  answerPoint: number;
  answerRank: FaceUpCardProps['rank'];
  questionDeck: FaceUpCardProps[];
};

export interface Game5ViewProps {
  cardDeck: CardDeck;
  handleCardOnPress: BoardProps['handleCardOnPress'];
  round: number;
  title: GameHeaderProps['title'];
};

interface Game5View {};

const Game5View: React.ComponentType<Game5ViewProps> = (props) => {
  const { 
    cardDeck,
    handleCardOnPress,
    round,
    title,
  } = props;

  return (
    <GameBackground>
      <GameHeader 
        title={title}
      />
      <View style={styles.container}>
        <FaceUpCard 
          rank={cardDeck.questionDeck[0].rank}
          suit={cardDeck.questionDeck[0].suit}
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank={cardDeck.questionDeck[1].rank}
          suit={cardDeck.questionDeck[1].suit}
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          // TODO
          rank="0"
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank={cardDeck.questionDeck[3].rank}
          suit={cardDeck.questionDeck[3].suit}
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank={cardDeck.questionDeck[4].rank}
          suit={cardDeck.questionDeck[4].suit}
        />
      </View>
      <View style={styles.container}>
        <Board 
          cardList={cardDeck.answerDeck}
          cardPerRow={CARDS_ROUND_MAP[round].answerDeck}
          disabled={false}
          flippedCardIdList={[]}
          handleCardOnPress={handleCardOnPress}
          initialFaceDirection="UP"
          solvedCardList={[]}
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game5View);