import { shuffle } from 'lodash';
import { ICard } from '@components/Card';

const DefaultDeck = [
  { id: "0", type: 'mask' },
  { id: "1", type: 'mask' },
  { id: "2", type: 'sanitizer' },
  { id: "3", type: 'sanitizer' },
  { id: "4", type: 'paper' },
  { id: "5", type: 'paper' },
  // { id: "6", type: 'sanitizer' },
  // { id: "7", type: 'sanitizer' },
];

export const shuffleDeck = (cardList: ICard[]) => {
  return shuffle(cardList);
};

export const getDefaultDeck = () => {
  return DefaultDeck;
};

export const TITLE = "請記下撲克牌的次序";

export const CARDS_ROUND_MAP = [
  3,
  3,
  3,
  4,
  4,
  4,
  5,
  5,
  5,
];