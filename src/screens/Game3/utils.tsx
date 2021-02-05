import { FaceUpCardProps } from '@components/FaceUpCard';
import { getRandomRank, getRandomSuit, shuffleDeck } from '@components/FaceUpCard/utils';

export const getRandomQuestionCardDeck = (cardTotal: number) => {
  const deck = Array.from(Array(cardTotal), (_, index) => {
    return { id: `${index}`, rank: getRandomRank(), suit: getRandomSuit() };
  });

  return deck;
};

export const getRandomCardDeck = (cardTotal: number) => {
  let questionDeck = getRandomQuestionCardDeck(cardTotal);
  const deck = { answerDeck: shuffleDeck([...questionDeck]), questionDeck: questionDeck };
  return deck;
};

export const getDropZone = (sourceDeck: FaceUpCardProps, targetDeck: FaceUpCardProps[]) => {
  const dropZone = targetDeck.reduce((acc, card, index) => {
    if (card.rank === sourceDeck.rank && card.suit === sourceDeck.suit) {
      acc = index;
    };
    return acc;
  }, 0);
  return dropZone;
};