import { getRandomRank, getRandomSuit, shuffleDeck } from '@components/FaceUpCard/utils';

export const getRandomQuestionCardDeck = (cardTotal: number) => {
  const deck = Array.from(Array(cardTotal), _ => {
    return { rank: getRandomRank(), suit: getRandomSuit() }
  });

  return deck;
};

export const getRandomCardDeck = (cardTotal: number) => {
  const questionDeck = getRandomQuestionCardDeck(cardTotal);
  const deck = { answerDeck: shuffleDeck([...questionDeck]), questionDeck: questionDeck };
  return deck;
};