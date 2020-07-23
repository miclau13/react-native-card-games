// import React from 'react';
// import { StackNavigationProp } from '@react-navigation/stack';

// import { getRandomSuit, getCardImageBySuit } from '@components/FaceUpCard/utils';
// import LoadingComponent from '@components/Loading';
// import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
// import { getRandomCardDeck } from './utils';
// import Game4View, { Game4ViewProps } from './Game4View';

// type Game4ScreenNavigationProp = StackNavigationProp<
//   HomeStackParamList,
//   'Game4'
// >;

// type Props = {
//   navigation: Game4ScreenNavigationProp;
// };

// interface Game4 {
//   loading: boolean;
//   score: number;
// };

// const Game4: React.ComponentType<Props> = (props) => {
//   const { navigation } = props;

//   const [cardDeck, setCardDeck] = React.useState<Game4ViewProps['cardDeck']>(getRandomCardDeck(8));
//   const [requiredSuit, setRequiredSuit] = React.useState<Game4ViewProps['requiredSuit']>(getRandomSuit());
//   const [loading] = React.useState<Game4['loading']>(false);
//   const [score, setScore] = React.useState<Game4['score']>(0);

//   const handleOnPress = React.useCallback<Game4ViewProps['handleOnPress']>(suit => () => {

//   }, [requiredSuit]);

//   // Next turn if no suitable card
//   React.useEffect(()=> {

//     function startNextTurn() {
//       setCardDeck(getRandomCardDeck(8));
//     };

//     function checkShouldGoToNextTurn() {
//       // Condition varies on level
//       if (!cardDeck.find(card => card.suit === requiredSuit)) {
//         startNextTurn();
//       };
//     };

//     checkShouldGoToNextTurn();
//   }, [cardDeck, requiredSuit]);

//   if (loading) {
//     return (
//       <LoadingComponent />
//     );
//   };

//   return (
//     <Game4View 
//       cardDeck={cardDeck}
//       handleOnPress={handleOnPress}
//       requiredSuit={requiredSuit}
//     />
//   )
// };

// export default React.memo(Game4);


import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';

import { getRandomSuit } from '@components/FaceUpCard/utils';
import LoadingComponent from '@components/Loading';

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
};

const Game4: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game4ViewProps['cardList']>(getRandomCardDeck(8));
  const [disabled] = React.useState<Game4ViewProps['disabled']>(false);
  const [requiredSuit, setRequiredSuit] = React.useState<Game4ViewProps['requiredSuit']>(getRandomSuit());
  const [solvedCardList, setSolvedCardList] = React.useState<Game4ViewProps['solvedCardList']>([]);

  const [flippedCardIdList] = React.useState<Game4ViewProps['flippedCardIdList']>([]);
  const [loading] = React.useState<Game4['loading']>(false);
  const [score, setScore] = React.useState<Game4['score']>(0);

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

  React.useEffect(()=> {
    function startNextTurn() {
      setCardList(getRandomCardDeck(8));
      setSolvedCardList([]);
      setRequiredSuit(getRandomSuit());
    };
    function checkShouldGoToNextTurn() {
      // Condition varies on level
      const numberOfCorrectCard = cardList.filter(card => card.suit === requiredSuit).length;
      if (numberOfCorrectCard <= 0 || numberOfCorrectCard === solvedCardList.length) {
        startNextTurn();
      };
    };
    checkShouldGoToNextTurn();
  }, [cardList, requiredSuit, solvedCardList]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <Game4View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      requiredSuit={requiredSuit}
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Game4);