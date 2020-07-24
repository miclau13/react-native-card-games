import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { TITLE } from './constants';
import { getRandomCardDeck } from './utils';
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
  solvedCardIDList: number[];
};

const Game3: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardDeck, setCardDeck] = React.useState<Game3ViewProps['cardDeck']>(getRandomCardDeck(3));
  const [dropZone1Values, setDropZone1Values] = React.useState<Game3ViewProps['dropZone1Values']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [dropZone2Values, setDropZone2Values] = React.useState<Game3ViewProps['dropZone2Values']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [dropZone3Values, setDropZone3Values] = React.useState<Game3ViewProps['dropZone3Values']>({
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0,
  });
  const [loading, setLoading] = React.useState<Game3['loading']>(false);
  const [score, setScore] = React.useState<Game3['score']>(0);
  const [solvedCardIDList, setSolvedCardIDList] = React.useState<Game3['solvedCardIDList']>([]);
  const [shouldFlip, setShouldFlip] = React.useState<Game3ViewProps['shouldFlip']>(false);

  const isInsideDropZone1 = React.useCallback<Game3ViewProps['isInsideDropZone1']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZone1Values.y && gesture.moveY < dropZone1Values.y + dropZone1Values.height;
    const isInsideBoundX = gesture.moveX > dropZone1Values.x && gesture.moveX < dropZone1Values.x + dropZone1Values.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZone1Values]);

  const isInsideDropZone2 = React.useCallback<Game3ViewProps['isInsideDropZone2']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZone2Values.y && gesture.moveY < dropZone2Values.y + dropZone2Values.height;
    const isInsideBoundX = gesture.moveX > dropZone2Values.x && gesture.moveX < dropZone2Values.x + dropZone2Values.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZone2Values]);

  const isInsideDropZone3 = React.useCallback<Game3ViewProps['isInsideDropZone3']>((gesture: PanResponderGestureState) => { 
    const isInsideBoundY = gesture.moveY > dropZone3Values.y && gesture.moveY < dropZone3Values.y + dropZone3Values.height;
    const isInsideBoundX = gesture.moveX > dropZone3Values.x && gesture.moveX < dropZone3Values.x + dropZone3Values.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZone3Values]);

  const handleDropZone1OnLayout = React.useCallback<Game3ViewProps['handleDropZone1OnLayout']>((event) => {
    setDropZone1Values(event.nativeEvent.layout);
  }, []);

  const handleDropZone2OnLayout = React.useCallback<Game3ViewProps['handleDropZone2OnLayout']>((event) => {
    setDropZone2Values(event.nativeEvent.layout);
  }, []);

  const handleDropZone3OnLayout = React.useCallback<Game3ViewProps['handleDropZone3OnLayout']>((event) => {
    setDropZone3Values(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game3ViewProps['handleOnDragRelease']>((rank, suit) => (e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };

    // function startNextTurn() {
    //   setCardDeck(getRandomCardDeck(3));
    // };

    if (isInsideDropZone1(gesture)) {
      // If correct
      if (cardDeck.questionDeck[0].rank === rank) {
        // increaseScore();
        setSolvedCardIDList(list => [ ...list, 0]);
        if (solvedCardIDList.length === cardDeck.questionDeck.length - 1) {
          // startNextTurn();
        };
      } else {

      };
      // startNextTurn();
    } else if (isInsideDropZone2(gesture)) {
      // If correct
      if (cardDeck.questionDeck[1].rank === rank) {
        // increaseScore();
        setSolvedCardIDList(list => [ ...list, 1]);
        if (solvedCardIDList.length === cardDeck.questionDeck.length - 1) {
          // startNextTurn();
        };
      } else {

      };

      // startNextTurn();
    } else if (isInsideDropZone3(gesture)) {
      // If correct
      if (cardDeck.questionDeck[2].rank === rank) {
        // increaseScore();
        setSolvedCardIDList(list => [ ...list, 2]);
        if (solvedCardIDList.length === cardDeck.questionDeck.length - 1) {
          // startNextTurn();
        };
      } else {

      };

      // startNextTurn();
    };
  }, [cardDeck, dropZone1Values, dropZone2Values, dropZone2Values, solvedCardIDList ]);

  // React.useEffect(() => {
  //   let timer = 0;
  //   function flipAfter3Second() {
  //     timer = setTimeout(() => setShouldFlip(true), 3000);
  //     return timer;
  //   };
  //   flipAfter3Second();
  //   return () => {
  //     clearTimeout(timer);
  //   }
  // }, []);

  React.useEffect(() => {
    let timer = 0;
    function flipAfter(ms: number) {
      timer = setTimeout(() => setShouldFlip(true), ms);
      return timer;
    };
    function startNextTurn() {
      setLoading(true);
      setSolvedCardIDList([]);
      setShouldFlip(false);
      setCardDeck(getRandomCardDeck(3));
      setTimeout(() => setLoading(false), 500);
      flipAfter(3000);
    };
    if (solvedCardIDList.length === cardDeck.questionDeck.length ) {
      startNextTurn();
    };
    if (!shouldFlip) {
      flipAfter(3000);
    }
    return () => {
      clearTimeout(timer);
    }
    // console.log("solvedCardIDList", solvedCardIDList)
  }, [cardDeck, solvedCardIDList, shouldFlip]);

  // console.log("cardDeck outside",cardDeck)
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <Game3View 
      cardDeck={cardDeck}
      dropZone1Values={dropZone1Values}
      dropZone2Values={dropZone2Values}
      dropZone3Values={dropZone3Values}
      handleDropZone1OnLayout={handleDropZone1OnLayout}
      handleDropZone2OnLayout={handleDropZone2OnLayout}
      handleDropZone3OnLayout={handleDropZone3OnLayout}
      handleOnDragRelease={handleOnDragRelease}
      isInsideDropZone1={isInsideDropZone1}
      isInsideDropZone2={isInsideDropZone2}
      isInsideDropZone3={isInsideDropZone3}
      shouldFlip={shouldFlip}
      title={TITLE}
    />
  )
};

export default React.memo(Game3);