import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';
import { Icon } from 'react-native-elements';

import Draggable, { DraggableProps } from '@components/Draggable';;
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';


export interface Game4ViewProps {
  dropZoneValues: LayoutRectangle;
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease: Exclude<DraggableProps['onDragRelease'], undefined>;
  isInsideDropZone: (gestureState: PanResponderGestureState) => boolean;
};

interface Game4View {};

const Game4View: React.ComponentType<Game4ViewProps> = (props) => {
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
          suit="Spades"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="5"
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="6"
          suit="Clubs"
        />
      </View>
      <View style={styles.container}>
        <FaceUpCard 
          rank="Jack"
          suit="Hearts"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="King"
          suit="Diamonds"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="5"
          suit="Spades"
        />
        <View style={styles.horizontalViewBox1} />
        <FaceUpCard 
          rank="9"
          suit="Diamonds"
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game4View);