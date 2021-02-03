import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';
import { Icon } from 'react-native-elements';

import Draggable, { DraggableProps } from '@components/Draggable';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import { getCardImageByRankAndSuit } from '@components/FaceUpCard/utils';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

type CardDeck = {
  answerDeck: FaceUpCardProps[];
  answerPoint: number;
  questionDeck: FaceUpCardProps[];
};

export interface Game2ViewProps {
  cardDeck: CardDeck;
  dropZoneValues: LayoutRectangle;
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease(rank: FaceUpCardProps['rank']): Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone: (gestureState: PanResponderGestureState) => boolean;
  title: GameHeaderProps['title'];
};

interface Game2View {};

const Game2View: React.ComponentType<Game2ViewProps> = (props) => {
  const { 
    cardDeck,
    dropZoneValues,
    handleDropZoneOnLayout,
    handleOnDragRelease,
    isInsideDropZone,
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
        <View style={styles.horizontalViewBox2} />
        <Icon
          name='add' 
          size={90}
        />
        <View style={styles.horizontalViewBox2} />
        <FaceUpCard 
          rank={cardDeck.questionDeck[1].rank}
          suit={cardDeck.questionDeck[1].suit}
        />
        <View style={styles.horizontalViewBox2} />
        <Icon 
          name="equal"
          size={90}
          type="material-community"
        />
        <View style={styles.horizontalViewBox2} />
        <View
          onLayout={handleDropZoneOnLayout}
        >
          <FaceUpCard 
            // TODO
            rank="0"
            suit="Spades"
          />
        </View>
      </View>
      <View style={styles.container}>
        <Draggable 
          shouldReverse
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[0].rank, cardDeck.answerDeck[0].suit)}
          renderSize={300} 
          x={150}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[0].rank)}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[1].rank, cardDeck.answerDeck[1].suit)}
          renderSize={300} 
          x={450}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[1].rank)}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={getCardImageByRankAndSuit(cardDeck.answerDeck[2].rank, cardDeck.answerDeck[2].suit)}
          renderSize={300} 
          x={750}
          y={0}
          onDragRelease={handleOnDragRelease(cardDeck.answerDeck[2].rank)}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game2View);