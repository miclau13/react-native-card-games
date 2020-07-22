import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck, TITLE } from './constants';
import Game1View, { Game1ViewProps } from './Game1View';

type Game1ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game1'
>;

type Props = {
  navigation: Game1ScreenNavigationProp;
};

interface Game1 {
  cardList: Game1ViewProps['cardList'];
  flippedCardIdList: Game1ViewProps['flippedCardIdList'];
  handleCardOnPress: Game1ViewProps['handleCardOnPress'];
  loading: boolean;
  solvedCardList: Game1ViewProps['solvedCardList'];
};

const Game1: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game1['cardList']>(getDefaultDeck());
  const [solvedCardList, setSolvedCardList] = React.useState<Game1['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game1['flippedCardIdList']>([]);
  const [loading] = React.useState<Game1['loading']>(false);

  const handleCardOnPress = React.useCallback<Game1['handleCardOnPress']>(id => {
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
    <Game1View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      solvedCardList={solvedCardList}
      title={TITLE}
    />
  )
};

export default React.memo(Game1);