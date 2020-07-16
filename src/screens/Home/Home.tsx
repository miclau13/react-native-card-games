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
    const screen = `Game${gameNumber}`;
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