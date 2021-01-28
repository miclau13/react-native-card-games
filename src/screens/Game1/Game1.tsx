import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import CorrectLoading from '@components/CorrectLoading';
import EndGameLoading from '@components/EndGameLoading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { CARDS_ROUND_MAP, TITLE } from './constants';
import { getRandomDeckInPair, shuffleDeck } from './utils';
import Game1View, { Game1ViewProps } from './Game1View';

type Game1ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game1'
>;

type Props = {
  navigation: Game1ScreenNavigationProp;
};

interface Game1 {
  loading: boolean;
  score: number;

  isAllCardsSolved(round: number): number;
  startNextTurn(): void;
};

const Game1: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game1ViewProps['cardList']>(getRandomDeckInPair(3));
  const [solvedCardList, setSolvedCardList] = React.useState<Game1ViewProps['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState<Game1ViewProps['disabled']>(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game1ViewProps['flippedCardIdList']>([]);
  const [loading] = React.useState<Game1['loading']>(false);
  const [correctLoading, setCorrectLoading] = React.useState<Game1['loading']>(false);
  const [endGameLoading, setEndGameLoading] = React.useState<Game1['loading']>(false);
  const [score, setScore] = React.useState<Game1['score']>(0);
  const [round, setRound] = React.useState<Game1ViewProps['round']>(0);

  const startTime = Date.now();

  const handleCardOnPress = React.useCallback<Game1ViewProps['handleCardOnPress']>(id => {
    setDisabled(true);
    if (flippedCardIdList.length === 0) {
      setFlippedCardIdList([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlippedCardIdList(list => [...list, id]);
      if (isMatch(id)) {
        setSolvedCardList(list => [ ...list, flippedCardIdList[0], id]);
        resetCardList();
      } else {
        setTimeout(resetCardList, 500)
      }
    }
  }, [flippedCardIdList]);

  const isMatch = React.useCallback(id => {
    const clickedCard = cardList.find(card => card.id === id);
    const flippedCard = cardList.find(card => flippedCardIdList[0] === card.id);
    return (flippedCard?.rank === clickedCard?.rank) && (flippedCard?.suit === clickedCard?.suit);
  }, [flippedCardIdList]);

  const resetCardList = React.useCallback(() => {
    setFlippedCardIdList([]);
    setDisabled(false);
  }, []);

  const sameCardClicked = React.useCallback(id => {
    return flippedCardIdList.includes(id)
  }, [flippedCardIdList]);

  const isAllCardsSolved = React.useCallback<Game1['isAllCardsSolved']>(round => {
    return CARDS_ROUND_MAP[round];
  }, []);

  const startNextTurn = React.useCallback<Game1['startNextTurn']>(() => {
    setCardList(shuffleDeck(getRandomDeckInPair(CARDS_ROUND_MAP[round + 1]/2)));
    setSolvedCardList([]);
    setFlippedCardIdList([]);
    setScore(score => score + 1);
    setCorrectLoading(true);
    setRound(round => round + 1);
    setTimeout(() => setCorrectLoading(false), 2000);
  }, [getRandomDeckInPair, round, shuffleDeck]);

  React.useEffect(() => {

    function isEndGame() {
      return round == 8
    }

    function checkShouldGoToNextTurn() {
      // Condition varies on level
      if (solvedCardList.length == isAllCardsSolved(round)) {
        if (isEndGame()) {
          setEndGameLoading(true);
        } else {
          startNextTurn();
        }
      };
    };

    checkShouldGoToNextTurn();
  }, [round, startNextTurn, solvedCardList]);

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
      //           gameId: "IB_GAME1",
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
    <Game1View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      round={round}
      solvedCardList={solvedCardList}
      title={TITLE}
    />
  )
};

export default React.memo(Game1);