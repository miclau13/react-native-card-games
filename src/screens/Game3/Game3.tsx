import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import CorrectLoading from '@components/CorrectLoading';
import EndGameLoading from '@components/EndGameLoading';
import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';

import { CARDS_ROUND_MAP, TITLE } from './constants';
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
  startNextTurn(): void;
};

const Game3: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardDeck, setCardDeck] = React.useState<Game3ViewProps['cardDeck']>(getRandomCardDeck(3));
  const [correctLoading, setCorrectLoading] = React.useState<Game3['loading']>(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game3ViewProps['flippedCardIdList']>([]);
  const [endGameLoading, setEndGameLoading] = React.useState<Game3['loading']>(false);
  const [loading, setLoading] = React.useState<Game3['loading']>(false);
  const [round, setRound] = React.useState<Game3ViewProps['round']>(0);
  const [shouldDisplayAnswerDeck, setShouldDisplayAnswerDeck] = React.useState<Game3ViewProps['shouldDisplayAnswerDeck']>(false);
  const [solvedCardList, setSolvedCardList] = React.useState<Game3ViewProps['solvedCardList']>([]);
  const [score, setScore] = React.useState<Game3['score']>(0);

  const startTime = Date.now();

  const handleCardOnPress = React.useCallback<Game3ViewProps['handleCardOnPress']>(id => {
    if (+id === solvedCardList.length || (cardDeck.questionDeck[+id].rank === cardDeck.answerDeck[+id].rank && cardDeck.questionDeck[+id].suit === cardDeck.answerDeck[+id].suit)) {
      setFlippedCardIdList(list => list.filter(cardId => cardId !== id));
      setSolvedCardList(list => [ ...list, id]);
    }
  }, [cardDeck, solvedCardList]);

  const startNextTurn = React.useCallback<Game3['startNextTurn']>(() => {
    setCardDeck(getRandomCardDeck(CARDS_ROUND_MAP[round + 1]));
    setCorrectLoading(true);
    setFlippedCardIdList([]);
    setRound(round => round + 1);
    setSolvedCardList([]);
    setShouldDisplayAnswerDeck(false);
    setTimeout(() => setCorrectLoading(false), 2000);
  }, [round]);

  React.useEffect(() => {

    function isEndGame() {
      return round == 8
    }

    function checkShouldGoToNextTurn() {
      // Condition varies on level
      if (solvedCardList.length == CARDS_ROUND_MAP[round]) {
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
    let timeout = round === 0 ? 3000 : 5000;
    let flipTimer = setTimeout(() => {
      setFlippedCardIdList(["0", "1", "2", "3", "4"]);
      setShouldDisplayAnswerDeck(true);
    }, timeout);
    
    
    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(flipTimer)
    }
  }, [round])

  
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
      //           gameId: "IB_GAME3",
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
  // console.log("GAME 3 cardDeck",cardDeck)
  // console.log("GAME 3 flippedCardIdList", flippedCardIdList)


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
    <Game3View 
      cardDeck={cardDeck}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      shouldDisplayAnswerDeck={shouldDisplayAnswerDeck}
      solvedCardList={solvedCardList}
      round={round}
      title={TITLE}
    />
  )
};

export default React.memo(Game3);