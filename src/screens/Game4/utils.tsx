import { getRandomRank, getRandomSuit } from '@components/FaceUpCard/utils';

export const getRandomCardDeck = (cardTotal: number) => {
  const deck = Array.from(Array(cardTotal),  (_, i) => {
    return { id: `${i}` ,rank: getRandomRank(), suit: getRandomSuit() }
  });

  return deck;
};
