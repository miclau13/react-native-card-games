import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

export interface GameHeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
};

interface GameHeader {};

const GameHeader: React.ComponentType<GameHeaderProps> = (props) => {
  const {
    children,
    containerStyle,
    title
  } = props;

  // const imageSrc = React.useMemo(() => {
  //   return getCardImageByRankAndSuit(rank, suit);
  // }, [rank, suit]);

  return (
    <View style={[styles.container, containerStyle]}> 
      {children ? children : <Text h2 style={{ textAlign: 'center'}}>{title}</Text> }
    </View>
  )
};

export default GameHeader;