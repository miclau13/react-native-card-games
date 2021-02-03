import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import Board, { BoardProps } from '@components/Board';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';
import { CARDS_ROUND_MAP } from './constants';

type CardDeck = {
  answerDeck: BoardProps['cardList'];
  answerPoint: number;
  questionDeck: FaceUpCardProps[];
};

export interface Game2ViewProps {
  cardDeck: CardDeck;
  handleCardOnPress: BoardProps['handleCardOnPress'];
  round: number;
  title: GameHeaderProps['title'];
};

interface Game2View {};

const Game2View: React.ComponentType<Game2ViewProps> = (props) => {
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
        <Icon
          name='add' 
          size={90}
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank={cardDeck.questionDeck[1].rank}
          suit={cardDeck.questionDeck[1].suit}
        />
        <View style={styles.horizontalViewBox1} />
        {
          round < 3 
            ? null 
            :  <>
                <Icon
                  name='add' 
                  size={90}
                />
                <View style={styles.horizontalViewBox1} />
                <FaceUpCard 
                  rank={cardDeck.questionDeck[2].rank}
                  suit={cardDeck.questionDeck[2].suit}
                />
                <View style={styles.horizontalViewBox1} />
              </>
        }

        <Icon 
          name="equal"
          size={90}
          type="material-community"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          // TODO
          rank="0"
          suit="Spades"
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
export default React.memo(Game2View);