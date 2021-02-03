import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import CorrectLoading from '@components/CorrectLoading';
import EndGameLoading from '@components/EndGameLoading';
import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { TITLE, CARDS_ROUND_MAP } from './constants';
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

  startNextTurn(): void;
};

const Game2: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardDeck, setCardDeck] = React.useState<Game2ViewProps['cardDeck']>(getRandomCardDeck(3, 2));
  const [correctLoading, setCorrectLoading] = React.useState<Game2['loading']>(false);
  const [endGameLoading, setEndGameLoading] = React.useState<Game2['loading']>(false);
  const [loading] = React.useState<Game2['loading']>(false);
  const [round, setRound] = React.useState<Game2ViewProps['round']>(0);
  const [score, setScore] = React.useState<Game2['score']>(0);

  const startTime = Date.now();

  const isMatch = React.useCallback(id => {
    const clickedCard = cardDeck.answerDeck.find(card => card.id === id) || { rank: 0,};
    return +clickedCard.rank === cardDeck.answerPoint;
  }, [cardDeck]);


  const startNextTurn = React.useCallback<Game2['startNextTurn']>(() => {

    setCardDeck(getRandomCardDeck(CARDS_ROUND_MAP[round + 1].answerDeck, CARDS_ROUND_MAP[round + 1].questionDeck));
    setCorrectLoading(true);
    setRound(round => round + 1);
    setTimeout(() => setCorrectLoading(false), 2000);

  }, [round]);

  const handleCardOnPress = React.useCallback<Game2ViewProps['handleCardOnPress']>(id => {
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
      //           gameId: "IB_GAME2",
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

  console.log("Game2 cardDeck", cardDeck)
  
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
    <Game2View 
      cardDeck={cardDeck}
      handleCardOnPress={handleCardOnPress}
      round={round}
      title={TITLE}
    />
  )
};

export default React.memo(Game2);