import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import Game4View, { Game4ViewProps } from './Game4View';

type Game4ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game4'
>;

type Props = {
  navigation: Game4ScreenNavigationProp;
};

interface Game4 {
  cardList: Game4ViewProps['cardList'];
  flippedCardIdList: Game4ViewProps['flippedCardIdList'];
  handleCardOnPress: Game4ViewProps['handleCardOnPress'];
  loading: boolean;
  solvedCardList: Game4ViewProps['solvedCardList'];
};

const Game4: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game4['cardList']>(getDefaultDeck());
  const [solvedCardList, setSolvedCardList] = React.useState<Game4['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game4['flippedCardIdList']>([]);
  const [loading] = React.useState<Game4['loading']>(false);

  const handleCardOnPress = React.useCallback<Game4['handleCardOnPress']>(id => {
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
    return flippedCard?.type === clickedCard?.type;
  }, [flippedCardIdList]);

  const resetCardList = React.useCallback(() => {
    setFlippedCardIdList([]);
    setDisabled(false);
  }, []);

  const sameCardClicked = React.useCallback(id => {
    return flippedCardIdList.includes(id)
  }, [flippedCardIdList]);
  
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
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Game4);