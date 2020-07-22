import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { TITLE } from './constants';
import Game3View, { Game3ViewProps } from './Game3View';

type Game3ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game3'
>;

type Props = {
  navigation: Game3ScreenNavigationProp;
};

interface Game3 {
  loading: boolean;
  score: number;
};

const Game3: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [dropZoneValues, setDropZoneValues] = React.useState<Game3ViewProps['dropZoneValues']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [loading] = React.useState<Game3['loading']>(false);
  const [score, setScore] = React.useState<Game3['score']>(0);
  const [shouldFlip, setShouldFlip] = React.useState<Game3ViewProps['shouldFlip']>(false);

  const isInsideDropZone = React.useCallback<Game3ViewProps['isInsideDropZone']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZoneValues.y && gesture.moveY < dropZoneValues.y + dropZoneValues.height;
    const isInsideBoundX = gesture.moveX > dropZoneValues.x && gesture.moveX < dropZoneValues.x + dropZoneValues.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZoneValues]);

  const handleDropZoneOnLayout = React.useCallback<Game3ViewProps['handleDropZoneOnLayout']>((event) => {
    setDropZoneValues(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game3ViewProps['handleOnDragRelease']>((e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };
    if (isInsideDropZone(gesture)) {
      increaseScore();
    };
  }, [dropZoneValues]);

  React.useEffect(() => {
    let timer = 0;
    function flipAfter2Second() {
      timer = setTimeout(() => setShouldFlip(true), 2000);
      return timer;
    };
    flipAfter2Second();
    return () => {
      clearTimeout(timer);
    }
  }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <Game3View 
      dropZoneValues={dropZoneValues}
      handleDropZoneOnLayout={handleDropZoneOnLayout}
      handleOnDragRelease={handleOnDragRelease}
      isInsideDropZone={isInsideDropZone}
      shouldFlip={shouldFlip}
      title={TITLE}
    />
  )
};

export default React.memo(Game3);