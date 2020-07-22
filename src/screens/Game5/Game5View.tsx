import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';
import { Icon } from 'react-native-elements';

import Draggable, { DraggableProps } from '@components/Draggable';;
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';


export interface Game5ViewProps {
  dropZoneValues: LayoutRectangle;
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease: Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone: (gestureState: PanResponderGestureState) => boolean;
};

interface Game5View {};

const Game5View: React.ComponentType<Game5ViewProps> = (props) => {
  const { 
    dropZoneValues,
    handleDropZoneOnLayout,
    handleOnDragRelease,
    isInsideDropZone,
  } = props;

  return (
    <GameBackground>
      <View style={styles.container}>
        <FaceUpCard 
          rank="2"
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="3"
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox1} />
        <View
          onLayout={handleDropZoneOnLayout}
        >
          <FaceUpCard 
            // TODO
            rank="0"
            suit="Hearts"
          />
        </View>
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="5"
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="6"
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
export default React.memo(Game5View);