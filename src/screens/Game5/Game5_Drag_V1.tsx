import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import CorrectLoading from '@components/CorrectLoading';
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
  const [loading, setLoading] = React.useState<Game5['loading']>(false);
  const [correctLoading, setCorrectLoading] = React.useState<Game5['loading']>(false);
  const [score, setScore] = React.useState<Game5['score']>(0);

  const startTime = Date.now();

  const isInsideDropZone = React.useCallback<Game5ViewProps['isInsideDropZone']>((gesture: PanResponderGestureState) => { 
    console.log("isInsideDropZone dropZoneValues",dropZoneValues)
    console.log("gesture",gesture)
    const isInsideBoundY = gesture.moveY > dropZoneValues.y && gesture.moveY < dropZoneValues.y + dropZoneValues.height;
    const isInsideBoundX = gesture.moveX > dropZoneValues.x && gesture.moveX < dropZoneValues.x + dropZoneValues.width;
    return isInsideBoundY && isInsideBoundX;
  }, [dropZoneValues]);

  const handleDropZoneOnLayout = React.useCallback<Game5ViewProps['handleDropZoneOnLayout']>((event) => {
    setDropZoneValues(event.nativeEvent.layout);
  }, []);

  const handleOnDragRelease = React.useCallback<Game5ViewProps['handleOnDragRelease']>(rank => async (e, gesture) => {   
    function increaseScore() {
      setScore(score => score + 1);
    };

    function startNextTurn() {
      setLoading(false);
      setCardDeck(getRandomCardDeck(5, 3));
      increaseScore();
      setCorrectLoading(true);
      setTimeout(() => setCorrectLoading(false), 2000);
    };

    if (isInsideDropZone(gesture)) {
      //If correct
      if (cardDeck.answerRank === rank) {
        startNextTurn();

      } else {
        // startNextTurn();
      };
    };
    
  }, [cardDeck, dropZoneValues]);

  React.useEffect(() => {
    return () => {

      const endTime = Date.now();

      const logging = async () => {
        try {
          const response = await fetch(`http://ec2-18-163-0-98.ap-east-1.compute.amazonaws.com:8080/api`, {
            method: 'POST',
            headers: {
              // Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userToken: "",
              sysId: "IBRAIN",
              funcId: "GAME_RSLT",
              data: {
                startTime,
                endTime,
                gameId: "IB_GAME5",
                gameLogs: [
                  {
                    "logTime": "1546325436806",
                    "logDetail": {
                        "miss": "T",
                        "x": 123,
                        "y": 321
                    }
                },
                {
                    "logTime": "1546325438105",
                    "logDetail": {
                        "miss": "F",
                        "x": 652,
                        "y": 721,
                    }
                }
                ]
              }
            }),
          });
          console.log("response", response)
          const result = await response.json();
          console.log("result", result)
          
        } catch (error) {
          console.log("error", error)
        }
      }

      logging();
    }
  }, []);

  // console.log("dropZoneValues",dropZoneValues)
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  if (correctLoading) {
    return (
      <CorrectLoading />
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