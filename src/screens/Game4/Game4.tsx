import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import Game4View, { Game4ViewProps } from './Game4View';

type Game4ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game4'
>;

type Props = {
  navigation: Game4ScreenNavigationProp;
};

interface Game4 {
  loading: boolean;
  score: number;
};

const Game4: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [dropZoneValues, setDropZoneValues] = React.useState<Game4ViewProps['dropZoneValues']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [loading] = React.useState<Game4['loading']>(false);
  const [score, setScore] = React.useState<Game4['score']>(0);

  const isInsideDropZone = React.useCallback<Game4ViewProps['isInsideDropZone']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZoneValues.y && gesture.moveY < dropZoneValues.y + dropZoneValues.height;
    const isInsideBoundX = gesture.moveX > dropZoneValues.x && gesture.moveX < dropZoneValues.x + dropZoneValues.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZoneValues]);

  const handleDropZoneOnLayout = React.useCallback<Game4ViewProps['handleDropZoneOnLayout']>((event) => {
    setDropZoneValues(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game4ViewProps['handleOnDragRelease']>((e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };
    if (isInsideDropZone(gesture)) {
      increaseScore();
    };
  }, [dropZoneValues]);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <Game4View 
      dropZoneValues={dropZoneValues}
      handleDropZoneOnLayout={handleDropZoneOnLayout}
      handleOnDragRelease={handleOnDragRelease}
      isInsideDropZone={isInsideDropZone}
    />
  )
};

export default React.memo(Game4);