import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import CorrectLoading from '@components/CorrectLoading';
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
  const [correctLoading, setCorrectLoading] = React.useState<Game2['loading']>(false);
  const [score, setScore] = React.useState<Game2['score']>(0);

  const startTime = Date.now();

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
        setCorrectLoading(true);
        setTimeout(() => setCorrectLoading(false), 2000);
      } else {

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
                gameId: "IB_GAME2",
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