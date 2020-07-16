import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import Game3View, { Game3ViewProps } from './Game3View';

type Game3ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Game3'
>;

type Props = {
  navigation: Game3ScreenNavigationProp;
};

interface Game3 {
  cardList: Game3ViewProps['cardList'];
  flippedCardIdList: Game3ViewProps['flippedCardIdList'];
  handleCardOnPress: Game3ViewProps['handleCardOnPress'];
  loading: boolean;
  solvedCardList: Game3ViewProps['solvedCardList'];
};

const Game3: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Game3['cardList']>(getDefaultDeck());
  const [solvedCardList, setSolvedCardList] = React.useState<Game3['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Game3['flippedCardIdList']>([]);
  const [loading] = React.useState<Game3['loading']>(false);

  const handleCardOnPress = React.useCallback<Game3['handleCardOnPress']>(id => {
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
    <Game3View 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Game3);