import { shuffle } from 'lodash';
import { ICard } from '@components/Card';

import { getRandomRank, getRandomSuit } from '@components/FaceUpCard/utils';

export const shuffleDeck = (cardList: ICard[]) => {
  return shuffle(cardList);
};

export const getRandomDeckInPair = (pair: number) => {
  const cardList = Array.from(Array(pair), (_, i) => {
    return { id: `${i}`, rank: getRandomRank(), suit: getRandomSuit() }
  });
  const deck = [...cardList, ...cardList].map((card, index) => {
    return { ...card, id: `${index}`}
  })
  return deck;
};