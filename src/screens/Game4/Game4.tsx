import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';

import { getRandomSuit } from '@components/FaceUpCard/utils';
import LoadingComponent from '@components/Loading';
import CorrectLoading from '@components/CorrectLoading';
import EndGameLoading from '@components/EndGameLoading';

import { CARDS_ROUND_MAP } from './constants';
import { getRandomCardDeck } from './utils';
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

  startNextTurn(): void;
};

const Game4: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game4ViewProps['cardList']>(getRandomCardDeck(8));
  const [disabled] = React.useState<Game4ViewProps['disabled']>(false);
  const [requiredSuit, setRequiredSuit] = React.useState<Game4ViewProps['requiredSuit']>(getRandomSuit());
  const [solvedCardList, setSolvedCardList] = React.useState<Game4ViewProps['solvedCardList']>([]);

  const [flippedCardIdList] = React.useState<Game4ViewProps['flippedCardIdList']>([]);
  const [loading] = React.useState<Game4['loading']>(false);
  const [correctLoading, setCorrectLoading] = React.useState<Game4['loading']>(false);
  const [endGameLoading, setEndGameLoading] = React.useState<Game4['loading']>(false);
  const [round, setRound] = React.useState<Game4ViewProps['round']>(0);
  const [score, setScore] = React.useState<Game4['score']>(0);

  const startTime = Date.now();

  const handleCardOnPress = React.useCallback<Game4ViewProps['handleCardOnPress']>(id => {
    if (isMatch(id)) {
      setSolvedCardList(list => [ ...list, id]);
    };
    // ** should change if cardList refresh
  }, [cardList]);

  const isMatch = React.useCallback(id => {
    const clickedCard = cardList.find(card => card.id === id);
    return requiredSuit === clickedCard?.suit;
  }, [cardList, requiredSuit]);

  const startNextTurn = React.useCallback<Game4['startNextTurn']>(() => {

    setCardList(getRandomCardDeck(CARDS_ROUND_MAP[round + 1]));
    setCorrectLoading(true);
    setRequiredSuit(getRandomSuit());
    setRound(round => round + 1);
    setSolvedCardList([]);
    setTimeout(() => setCorrectLoading(false), 2000);

  }, [round]);

  React.useEffect(()=> {

    function isEndGame() {
      return round == 8
    }

    function checkShouldGoToNextTurn() {
      // Condition varies on level
      const numberOfCorrectCard = cardList.filter(card => card.suit === requiredSuit).length;
      if (numberOfCorrectCard <= 0 || numberOfCorrectCard === solvedCardList.length) {
        if (isEndGame()) {
          setEndGameLoading(true);
        } else {
          startNextTurn();
        }
      };
    };
    checkShouldGoToNextTurn();
  }, [cardList, requiredSuit, solvedCardList]);

  console.log("GAME 4 cardLis", cardList)

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
      //           gameId: "IB_GAME4",
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
    <Game4View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      requiredSuit={requiredSuit}
      round={round}
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Game4);