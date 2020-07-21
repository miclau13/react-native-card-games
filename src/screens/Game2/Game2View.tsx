import React from 'react';
import { LayoutRectangle, PanResponderGestureState, View, ViewProps } from 'react-native';
import { Icon } from 'react-native-elements';

import Draggable, { DraggableProps } from '@components/Draggable';;
import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';


export interface Game2ViewProps {
};

interface Game2View {
  handleDropZoneOnLayout: Exclude<ViewProps['onLayout'], undefined>;
  handleOnDragRelease: Exclude<DraggableProps['onDragRelease'], undefined>;
};

const Game2View: React.ComponentType<Game2ViewProps> = (props) => {
  const { 
  } = props;

  const [dropZoneValues, setDropZoneValues] = React.useState<LayoutRectangle>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });

  const [score, setScore] = React.useState(0);

  const isInsideDropZone = React.useCallback((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZoneValues.y && gesture.moveY < dropZoneValues.y + dropZoneValues.height;
    const isInsideBoundX = gesture.moveX > dropZoneValues.x && gesture.moveX < dropZoneValues.x + dropZoneValues.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZoneValues]);

  const handleDropZoneOnLayout = React.useCallback<Game2View['handleDropZoneOnLayout']>((event) => {
    setDropZoneValues(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game2View['handleOnDragRelease']>((e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };
    if (isInsideDropZone(gesture)) {
      increaseScore();
    };
  }, [dropZoneValues]);
  
  return (
    <GameBackground>
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
          // onRelease={()=>console.log('onRelease')}
          onDragRelease={handleOnDragRelease}
          // onLongPress={()=>console.log('long press')}
          // onShortPressRelease={()=>console.log('press drag')}
          // onPressIn={()=>console.log('in press')}
          // onPressOut={()=>console.log('out press')}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
        <Draggable 
          shouldReverse
          imageSource={require('@assets/Cards/Spades/Spades_9.png')}
          renderSize={300} 
          x={450}
          y={0}
          // onRelease={()=>console.log('onRelease')}
          onDragRelease={handleOnDragRelease}
          // onLongPress={()=>console.log('long press')}
          // onShortPressRelease={()=>console.log('press drag')}
          // onPressIn={()=>console.log('in press')}
          // onPressOut={()=>console.log('out press')}
          dropZoneValues={dropZoneValues}
          isInsideDropZone={isInsideDropZone}
        />
      </View>
    </GameBackground>
  );
}
export default React.memo(Game2View);