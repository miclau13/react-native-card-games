import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import LoadingComponent from '@components/Loading';
import { HomeStackParamList } from '@navigator/StackNavigator/HomeStack';
import { getDefaultDeck } from './constants';
import HomeView, { HomeViewProps } from './HomeView';
import Game1 from 'screens/Game1';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface Home {
  handleGameCardOnPress: HomeViewProps['handleGameCardOnPress'];
  loading: boolean;
};

const Home: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState<Home['loading']>(false);

  const handleGameCardOnPress = React.useCallback<Home['handleGameCardOnPress']>(gameNumber => (event) => {
    let screen: keyof HomeStackParamList = "Game5";
    switch (gameNumber) {
      case 1: 
        screen = "Game1";
        break;
      case 2: 
        screen = "Game2";
        break;
      case 3: 
        screen = "Game3";
        break;
      case 4: 
        screen = "Game4";
        break;
      default: 
        screen = "Game5";
        break;
    }

    navigation.navigate(screen)
  }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <HomeView 
      handleGameCardOnPress={handleGameCardOnPress}
    />
  )
};

export default React.memo(Home);