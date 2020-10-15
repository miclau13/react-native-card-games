import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';

import Draggable, { DraggableProps } from '@components/Draggable';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import { getCardImageByRankAndSuit } from '@components/FaceUpCard/utils';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';
import { getDropZone } from './utils';

type CardDeck = {
  answerDeck: FaceUpCardProps[];
  questionDeck: FaceUpCardProps[];
};

export interface Game3ViewProps {
  cardDeck: CardDeck;
  dropZone1Values: LayoutRectangle;
  dropZone2Values: LayoutRectangle;
  dropZone3Values: LayoutRectangle;
  handleDropZone1OnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleDropZone2OnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleDropZone3OnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease(rank: FaceUpCardProps['rank'], suit: FaceUpCardProps['suit']): Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone1: (gestureState: PanResponderGestureState) => boolean;
  isInsideDropZone2: (gestureState: PanResponderGestureState) => boolean;
  isInsideDropZone3: (gestureState: PanResponderGestureState) => boolean;
  shouldFlip: boolean;
  shouldReset: boolean;
  title: GameHeaderProps['title'];
};

interface Game3View {};

const Game3View: React.ComponentType<Game3ViewProps> = (props) => {
  const { 
    cardDeck,
    dropZone1Values,
    dropZone2Values,
    dropZone3Values,
    handleDropZone1OnLayout,
    handleDropZone2OnLayout,
    handleDropZone3OnLayout,
    handleOnDragRelease,
    isInsideDropZone1,
    isInsideDropZone2,
    isInsideDropZone3,
    shouldFlip,
    shouldReset,
    title,
  } = props;

  const dropZoneForAnswerCard1 = getDropZone(cardDeck.answerDeck[0], cardDeck.questionDeck);
  const dropZoneForAnswerCard2 = getDropZone(cardDeck.answerDeck[1], cardDeck.questionDeck);
  const dropZoneForAnswerCard3 = getDropZone(cardDeck.answerDeck[2], cardDeck.questionDeck);


  return (
    <GameBackground>
      <GameHeader 
        title={title}
      />
      <View style={styles.container}>
        <View
          onLayout={handleDropZone1OnLayout}
        >
          <FaceUpCard 
            rank={shouldFlip ? "0" : cardDeck.questionDeck[0].rank}
            suit={cardDeck.questionDeck[0].suit}
          />
        </View>
        <View style={styles.horizontalViewBox3} />
        <View
          onLayout={handleDropZone2OnLayout}
        >
          <FaceUpCard 
            rank={shouldFlip ? "0" : cardDeck.questionDeck[1].rank}
            suit={cardDeck.questionDeck[1].suit}
          />
        </View>
        <View style={styles.horizontalViewBox3} />
        <View
          onLayout={handleDropZone3OnLayout}
        >
          <FaceUpCard 
            rank={shouldFlip ? "0" : cardDeck.questionDeck[2].rank}
            suit={cardDeck.questionDeck[2].suit}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Draggable 
          shouldReverse
          shouldReset={shouldReset}
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[0].rank, cardDeck.answerDeck[0].suit)}
          renderSize={300} 
          x={150}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[0].rank, cardDeck.answerDeck[0].suit)}
          dropZoneValues={
            dropZoneForAnswerCard1 === 0 
            ? dropZone1Values 
            : dropZoneForAnswerCard1 === 1 
              ? dropZone2Values 
              : dropZone3Values 
          }
          isInsideDropZone={
            dropZoneForAnswerCard1 === 0 
              ? isInsideDropZone1 
              : dropZoneForAnswerCard1 === 1 
                ? isInsideDropZone2
                : isInsideDropZone3
          }
        />
        <Draggable 
          shouldReverse
          shouldReset={shouldReset}
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[1].rank, cardDeck.answerDeck[1].suit)}
          renderSize={300} 
          x={450}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[1].rank, cardDeck.answerDeck[1].suit)}
          dropZoneValues={
            dropZoneForAnswerCard2 === 0 
            ? dropZone1Values 
            : dropZoneForAnswerCard2 === 1 
              ? dropZone2Values 
              : dropZone3Values 
          }
          isInsideDropZone={
            dropZoneForAnswerCard2 === 0 
              ? isInsideDropZone1 
              : dropZoneForAnswerCard2 === 1 
                ? isInsideDropZone2
                : isInsideDropZone3
          }
        />
        <Draggable 
          shouldReverse
          shouldReset={shouldReset}
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[2].rank, cardDeck.answerDeck[2].suit)}
          renderSize={300} 
          x={750}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[2].rank, cardDeck.answerDeck[2].suit)}
          dropZoneValues={
            dropZoneForAnswerCard3 === 0 
            ? dropZone1Values 
            : dropZoneForAnswerCard3 === 1 
              ? dropZone2Values 
              : dropZone3Values 
          }
          isInsideDropZone={
            dropZoneForAnswerCard3 === 0 
              ? isInsideDropZone1 
              : dropZoneForAnswerCard3 === 1 
                ? isInsideDropZone2
                : isInsideDropZone3
          }
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game3View);