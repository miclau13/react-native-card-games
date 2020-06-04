import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import HomeView, { HomeViewProps } from './HomeView';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface Home {
  cardList: HomeViewProps['cardList'];
  flippedCardIdList: HomeViewProps['flippedCardIdList'];
  handleCardOnPress: HomeViewProps['handleCardOnPress'];
  loading: boolean;
  solvedCardList: HomeViewProps['solvedCardList'];
};

const Home: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [cardList, setCardList] = React.useState<Home['cardList']>(getDefaultDeck());
  const [solvedCardList, setSolvedCardList] = React.useState<Home['solvedCardList']>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [flippedCardIdList, setFlippedCardIdList] = React.useState<Home['flippedCardIdList']>([]);
  const [loading] = React.useState<Home['loading']>(false);

  const handleCardOnPress = React.useCallback<Home['handleCardOnPress']>(id => {
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
    <HomeView 
      cardList={cardList}
      disabled={disabled}
      flippedCardIdList={flippedCardIdList}
      handleCardOnPress={handleCardOnPress}
      solvedCardList={solvedCardList}
    />
  )
};

export default React.memo(Home);