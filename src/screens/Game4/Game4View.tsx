// import React from 'react';
// import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
// import { Image, Text } from 'react-native-elements';

// import { getCardImageBySuit } from '@components/FaceUpCard/utils';
// import FaceUpCard, { FaceUpCardProps } from '@components/FaceUpCard';
// import GameHeader, { GameHeaderProps } from '@components/GameHeader';
// import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
// import styles from './styles';

// export interface CardProps {
//   handleOnPress(suit: FaceUpCardProps['suit']): TouchableOpacityProps['onPress'];
//   rank: FaceUpCardProps['rank'];
//   suit: FaceUpCardProps['suit'];
// };

// const Card: React.ComponentType<CardProps> = (props) => {
//   const { handleOnPress, rank, suit } = props;
//   return (
//     <TouchableOpacity
//       onPress={handleOnPress(suit)}
//     >
//       <FaceUpCard 
//         rank={rank}
//         suit={suit}
//       />
//     </TouchableOpacity>
//   )
// }

// export interface Game4ViewProps {
//   cardDeck: FaceUpCardProps[];
//   handleOnPress: CardProps['handleOnPress'];
//   requiredSuit: FaceUpCardProps['suit'];
// };

// interface Game4View {};

// const Game4View: React.ComponentType<Game4ViewProps> = (props) => {
//   const { 
//     cardDeck,
//     handleOnPress,
//     requiredSuit,
//   } = props;

//   return (
//     <GameBackground>
//       <GameHeader
//         containerStyle={styles.gameHeaderContainer}
//       >
//         <Text h2>請選擇帶有</Text> 
//         <Image 
//           source={getCardImageBySuit(requiredSuit)}
//           style={styles.titleImage}
//           resizeMode="contain"
//         />
//         <Text h2>的撲克牌</Text> 
//       </GameHeader>
//       <View style={styles.container}>
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[0].rank}
//           suit={cardDeck[0].suit}
//         />
//         <View style={styles.horizontalViewBox1} />
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[1].rank}
//           suit={cardDeck[1].suit}
//         />
//         <View style={styles.horizontalViewBox1} />
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[2].rank}
//           suit={cardDeck[3].suit}
//         />
//         <View style={styles.horizontalViewBox1} />
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[3].rank}
//           suit={cardDeck[3].suit}
//         />
//       </View>
//       <View style={styles.container}>
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[4].rank}
//           suit={cardDeck[4].suit}
//         />
//         <View style={styles.horizontalViewBox1} />
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[5].rank}
//           suit={cardDeck[5].suit}
//         />
//         <View style={styles.horizontalViewBox1} />
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[6].rank}
//           suit={cardDeck[6].suit}
//         />
//         <View style={styles.horizontalViewBox1} />
//         <Card 
//           handleOnPress={handleOnPress}
//           rank={cardDeck[7].rank}
//           suit={cardDeck[7].suit}
//         />
//       </View>
//     </GameBackground>
//   );
// }
// export default React.memo(Game4View);

import React from 'react';
import { Image, Text } from 'react-native-elements';

import Board, { BoardProps } from '@components/Board';
import { getCardImageBySuit } from '@components/FaceUpCard/utils';
import { FaceUpCardProps } from '@components/FaceUpCard';
import GameHeader, { GameHeaderProps } from '@components/GameHeader';
import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import styles from './styles';

export interface Game4ViewProps {
  cardList: BoardProps['cardList'];
  disabled: BoardProps['disabled'];
  flippedCardIdList: BoardProps['flippedCardIdList'];
  handleCardOnPress: BoardProps['handleCardOnPress'];
  requiredSuit: FaceUpCardProps['suit'];
  solvedCardList: BoardProps['solvedCardList'];
};

const Game4View: React.ComponentType<Game4ViewProps> = (props) => {
  const { 
    cardList,
    disabled,
    flippedCardIdList,
    handleCardOnPress,
    requiredSuit,
    solvedCardList,
  } = props;

  return (
    <GameBackground>
      <GameHeader
        containerStyle={styles.gameHeaderContainer}
      >
        <Text h2>請選擇帶有</Text> 
        <Image 
          source={getCardImageBySuit(requiredSuit)}
          style={styles.titleImage}
          resizeMode="contain"
        />
        <Text h2>的撲克牌</Text> 
      </GameHeader>
      <Board 
        cardList={cardList}
        cardPerRow={4}
        disabled={disabled}
        flippedCardIdList={flippedCardIdList}
        handleCardOnPress={handleCardOnPress}
        initialFaceDirection="UP"
        solvedCardList={solvedCardList}
      />
    </GameBackground>
  );
}
export default React.memo(Game4View);