import { shuffle } from 'lodash';
import { ICard } from '@components/Card';

const DefaultDeck = [
  { id: "0", type: 'diamondsKing' },
  { id: "1", type: 'spadesJack' },
  { id: "2", type: 'heartQueen' },
  { id: "3", type: 'spadesJack' },
  { id: "4", type: 'heartQueen' },
  { id: "5", type: 'diamondsKing' },
  // { id: "6", type: 'sanitizer' },
  // { id: "7", type: 'sanitizer' },
];

export const shuffleDeck = (cardList: ICard[]) => {
  return shuffle(cardList);
};

export const getDefaultDeck = () => {
  return DefaultDeck;
};

export const TITLE = "撲克牌配對";