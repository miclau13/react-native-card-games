import React from 'react';
import { PanResponderGestureState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import EndGameLoading from '@components/EndGameLoading';
import CorrectLoading from '@components/CorrectLoading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { CARDS_ROUND_MAP, TITLE } from './constants';
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

  startNextTurn(): void;
};

const Game5: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardDeck, setCardDeck] = React.useState<Game5ViewProps['cardDeck']>(getRandomCardDeck(3, 5));

  const [loading, setLoading] = React.useState<Game5['loading']>(false);
  const [correctLoading, setCorrectLoading] = React.useState<Game5['loading']>(false);
  const [endGameLoading, setEndGameLoading] = React.useState<Game5['loading']>(false);
  const [round, setRound] = React.useState<Game5ViewProps['round']>(0);
  const [score, setScore] = React.useState<Game5['score']>(0);

  const startTime = Date.now();

  const isMatch = React.useCallback(id => {
    const clickedCard = cardDeck.answerDeck.find(card => card.id === id) || { rank: 0,};
    return +clickedCard.rank === cardDeck.answerPoint;
  }, [cardDeck]);


  const startNextTurn = React.useCallback<Game5['startNextTurn']>(() => {

    setCardDeck(getRandomCardDeck(CARDS_ROUND_MAP[round + 1].answerDeck, CARDS_ROUND_MAP[round + 1].questionDeck));
    setCorrectLoading(true);
    setRound(round => round + 1);
    setTimeout(() => setCorrectLoading(false), 2000);

  }, [round]);

  const handleCardOnPress = React.useCallback<Game5ViewProps['handleCardOnPress']>(id => {
    function isEndGame() {
      return round == 8
    }
    if (isMatch(id)) {
      if (isEndGame()) {
        setEndGameLoading(true);
      } else {
        startNextTurn();
      }
    };
  }, [isMatch, round]);

  React.useEffect(() => {
    return () => {

      // const endTime = Date.now();

      // const logging = async () => {
      //   try {
      //     const response = await fetch(`http://ec2-18-163-0-98.ap-east-1.compute.amazonaws.com:8080/api`, {
      //       method: 'POST',
      //       headers: {
      //         // Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //         userToken: "",
      //         sysId: "IBRAIN",
      //         funcId: "GAME_RSLT",
      //         data: {
      //           startTime,
      //           endTime,
      //           gameId: "IB_GAME5",
      //           gameLogs: [
      //             {
      //               "logTime": "1546325436806",
      //               "logDetail": {
      //                   "miss": "T",
      //                   "x": 123,
      //                   "y": 321
      //               }
      //           },
      //           {
      //               "logTime": "1546325438105",
      //               "logDetail": {
      //                   "miss": "F",
      //                   "x": 652,
      //                   "y": 721,
      //               }
      //           }
      //           ]
      //         }
      //       }),
      //     });
      //     console.log("response", response)
      //     const result = await response.json();
      //     console.log("result", result)
          
      //   } catch (error) {
      //     console.log("error", error)
      //   }
      // }

      // logging();
    }
  }, []);

  console.log("Game5 cardDeck", cardDeck)
  
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

  if (endGameLoading) {
    return (
      <EndGameLoading />
    );
  };

  return (
    <Game5View 
      cardDeck={cardDeck}
      handleCardOnPress={handleCardOnPress}
      round={round}
      title={TITLE}
    />
  )
};

export default React.memo(Game5);