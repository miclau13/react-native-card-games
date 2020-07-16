import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import Game2View, { Game2ViewProps } from './Game2View';

type Game2ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game2'
>;

type Props = {
  navigation: Game2ScreenNavigationProp;
};

interface Game2 {
  cardList: Game2ViewProps['cardList'];
  flippedCardIdList: Game2ViewProps['flippedCardIdList'];
  handleCardOnPress: Game2ViewProps['handleCardOnPress'];
  loading: boolean;
  solvedCardList: Game2ViewProps['solvedCardList'];
};

const Game2: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game2['cardList']>(getDefaultDeck());
  const [solvedCardList, setSolvedCardList] = React.useState<Game2['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game2['flippedCardIdList']>([]);
  const [loading] = React.useState<Game2['loading']>(false);

  const handleCardOnPress = React.useCallback<Game2['handleCardOnPress']>(id => {
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
    <Game2View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Game2);