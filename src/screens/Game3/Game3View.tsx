import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';

import Draggable, { DraggableProps } from '@components/Draggable';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import { getCardImageByRankAndSuit } from '@components/FaceUpCard/utils';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

type CardDeck = {
  answerDeck: FaceUpCardProps[];
  questionDeck: FaceUpCardProps[];
};

export interface Game3ViewProps {
  cardDeck: CardDeck;
  dropZoneValues: LayoutRectangle;
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease(rank: FaceUpCardProps['rank'], suit: FaceUpCardProps['suit']): Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone: (gestureState: PanResponderGestureState) => boolean;
  shouldFlip: boolean;
  title: GameHeaderProps['title'];
};

interface Game3View {};

const Game3View: React.ComponentType<Game3ViewProps> = (props) => {
  const { 
    cardDeck,
    dropZoneValues,
    handleDropZoneOnLayout,
    handleOnDragRelease,
    isInsideDropZone,
    shouldFlip,
    title,
  } = props;

  return (
    <GameBackground>
      <GameHeader 
        title={title}
      />
      <View style={styles.container}>
        <FaceUpCard 
          rank={shouldFlip ? "0" : cardDeck.questionDeck[0].rank}
          suit={cardDeck.questionDeck[0].suit}
        />
        <View style={styles.horizontalViewBox3} />
        <FaceUpCard 
          rank={shouldFlip ? "0" : cardDeck.questionDeck[1].rank}
          suit={cardDeck.questionDeck[1].suit}
        />
        <View style={styles.horizontalViewBox3} />
        <FaceUpCard 
          rank={shouldFlip ? "0" : cardDeck.questionDeck[2].rank}
          suit={cardDeck.questionDeck[2].suit}
        />
      </View>
      <View style={styles.container}>
        <Draggable 
          shouldReverse
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[0].rank, cardDeck.answerDeck[0].suit)}
          renderSize={300} 
          x={150}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[0].rank, cardDeck.answerDeck[0].suit)}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[1].rank, cardDeck.answerDeck[1].suit)}
          renderSize={300} 
          x={450}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[1].rank, cardDeck.answerDeck[1].suit)}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[2].rank, cardDeck.answerDeck[2].suit)}
          renderSize={300} 
          x={750}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[2].rank, cardDeck.answerDeck[2].suit)}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game3View);