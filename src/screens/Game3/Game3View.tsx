import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';

import Draggable, { DraggableProps } from '@components/Draggable';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

export interface Game3ViewProps {
  dropZoneValues: LayoutRectangle;
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease: Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone: (gestureState: PanResponderGestureState) => boolean;
  shouldFlip: boolean;
  title: GameHeaderProps['title'];
};

interface Game3View {};

const Game3View: React.ComponentType<Game3ViewProps> = (props) => {
  const { 
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
          rank={shouldFlip ? "0" : "2"}
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox3} />
        <FaceUpCard 
          rank={shouldFlip ? "0" : "3"}
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox3} />
        <FaceUpCard 
          rank={shouldFlip ? "0" : "5"}
          suit="Hearts"
        />
      </View>
      <View style={styles.container}>
        <Draggable 
          shouldReverse
          imageSource={require('@assets/Cards/Hearts/Hearts_10.png')}
          renderSize={300} 
          x={150}
          y={0}
          onDragRelease={handleOnDragRelease}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={require('@assets/Cards/Hearts/Hearts_9.png')}
          renderSize={300} 
          x={450}
          y={0}
          onDragRelease={handleOnDragRelease}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={require('@assets/Cards/Hearts/Hearts_4.png')}
          renderSize={300} 
          x={750}
          y={0}
          onDragRelease={handleOnDragRelease}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game3View);