import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { TITLE } from './constants';
import { getRandomCardDeck } from './utils';
import Game5View, { Game5ViewProps } from './Game5View';

type Game5ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game5'
>;

type Props = {
  navigation: Game5ScreenNavigationProp;
};

interface Game5 {
  loading: boolean;
  score: number;
};

const Game5: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardDeck, setCardDeck] = React.useState<Game5ViewProps['cardDeck']>(getRandomCardDeck(5, 3));
  const [dropZoneValues, setDropZoneValues] = React.useState<Game5ViewProps['dropZoneValues']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [loading] = React.useState<Game5['loading']>(false);
  const [score, setScore] = React.useState<Game5['score']>(0);

  const isInsideDropZone = React.useCallback<Game5ViewProps['isInsideDropZone']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZoneValues.y && gesture.moveY < dropZoneValues.y + dropZoneValues.height;
    const isInsideBoundX = gesture.moveX > dropZoneValues.x && gesture.moveX < dropZoneValues.x + dropZoneValues.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZoneValues]);

  const handleDropZoneOnLayout = React.useCallback<Game5ViewProps['handleDropZoneOnLayout']>((event) => {
    setDropZoneValues(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game5ViewProps['handleOnDragRelease']>(rank => (e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };

    function startNextTurn() {
      setCardDeck(getRandomCardDeck(5, 3));
    };

    if (isInsideDropZone(gesture)) {
      //If correct
      if (cardDeck.answerRank === rank) {
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
    <Game5View 
      cardDeck={cardDeck}
      dropZoneValues={dropZoneValues}
      handleDropZoneOnLayout={handleDropZoneOnLayout}
      handleOnDragRelease={handleOnDragRelease}
      isInsideDropZone={isInsideDropZone}
      title={TITLE}
    />
  )
};

export default React.memo(Game5);