import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { TITLE } from './constants';
import { getRandomCardDeck } from './utils';
import Game2View, { Game2ViewProps } from './Game2View';

type Game2ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game2'
>;

type Props = {
  navigation: Game2ScreenNavigationProp;
};

interface Game2 {
  loading: boolean;
  score: number;
};

const Game2: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardDeck, setCardDeck] = React.useState<Game2ViewProps['cardDeck']>(getRandomCardDeck(3, 2));
  const [dropZoneValues, setDropZoneValues] = React.useState<Game2ViewProps['dropZoneValues']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [loading] = React.useState<Game2['loading']>(false);
  const [score, setScore] = React.useState<Game2['score']>(0);

  const isInsideDropZone = React.useCallback<Game2ViewProps['isInsideDropZone']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZoneValues.y && gesture.moveY < dropZoneValues.y + dropZoneValues.height;
    const isInsideBoundX = gesture.moveX > dropZoneValues.x && gesture.moveX < dropZoneValues.x + dropZoneValues.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZoneValues]);

  const handleDropZoneOnLayout = React.useCallback<Game2ViewProps['handleDropZoneOnLayout']>((event) => {
    setDropZoneValues(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game2ViewProps['handleOnDragRelease']>(rank => (e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };

    function startNextTurn() {
      setCardDeck(getRandomCardDeck(3, 2));
    };

    if (isInsideDropZone(gesture)) {
      //If correct
      if (Number(rank) === cardDeck.answerPoint) {
        increaseScore();
        startNextTurn();
      } else {

      };
    };
    
  }, [cardDeck, dropZoneValues]);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <Game2View 
      cardDeck={cardDeck}
      dropZoneValues={dropZoneValues}
      handleDropZoneOnLayout={handleDropZoneOnLayout}
      handleOnDragRelease={handleOnDragRelease}
      isInsideDropZone={isInsideDropZone}
      title={TITLE}
    />
  )
};

export default React.memo(Game2);