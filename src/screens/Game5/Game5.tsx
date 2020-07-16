import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import Game5View, { Game5ViewProps } from './Game5View';

type Game5ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game5'
>;

type Props = {
  navigation: Game5ScreenNavigationProp;
};

interface Game5 {
  cardList: Game5ViewProps['cardList'];
  flippedCardIdList: Game5ViewProps['flippedCardIdList'];
  handleCardOnPress: Game5ViewProps['handleCardOnPress'];
  loading: boolean;
  solvedCardList: Game5ViewProps['solvedCardList'];
};

const Game5: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game5['cardList']>(getDefaultDeck());
  const [solvedCardList, setSolvedCardList] = React.useState<Game5['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game5['flippedCardIdList']>([]);
  const [loading] = React.useState<Game5['loading']>(false);

  const handleCardOnPress = React.useCallback<Game5['handleCardOnPress']>(id => {
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
    <Game5View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Game5);