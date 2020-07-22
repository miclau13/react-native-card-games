import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';
import { Icon } from 'react-native-elements';

import Draggable, { DraggableProps } from '@components/Draggable';
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

export interface Game2ViewProps {
  dropZoneValues: LayoutRectangle;
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease: Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone: (gestureState: PanResponderGestureState) => boolean;
  title: GameHeaderProps['title'];
};

interface Game2View {};

const Game2View: React.ComponentType<Game2ViewProps> = (props) => {
  const { 
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
          rank="5"
          suit="Spades"
        />
        <View style={styles.horizontalViewBox2} />
        <Icon
          name='add' 
          size={90}
        />
        <View style={styles.horizontalViewBox2} />
        <FaceUpCard 
          rank="8"
          suit="Spades"
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
          imageSource={require('@assets/Cards/Spades/Spades_10.png')}
          renderSize={300} 
          x={150}
          y={0}
          onDragRelease={handleOnDragRelease}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={require('@assets/Cards/Spades/Spades_9.png')}
          renderSize={300} 
          x={450}
          y={0}
          onDragRelease={handleOnDragRelease}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game2View);