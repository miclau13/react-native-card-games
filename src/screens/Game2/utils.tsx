import { getRandomRank, getRandomSuit, shuffleDeck } from '@components/FaceUpCard/utils';

export const getRandomAnswerCardDeck = (cardTotal: number, answerPoint: number) => {
  const cardTotalInHalf = Math.floor(cardTotal / 2);
  const lowerDeck = Array.from(Array(cardTotalInHalf), _ => {
    return { rank: getRandomRank(1, answerPoint - 1), suit: getRandomSuit(2) }
  });
  const upperDeck = Array.from(Array(cardTotalInHalf), _ => {
    return { rank: getRandomRank(answerPoint + 1, 10), suit: getRandomSuit(2) }
  });
  const answerCard = { rank: getRandomRank(answerPoint, answerPoint), suit: getRandomSuit(2) };

  const deck = [
    ...lowerDeck,
    answerCard,
    ...upperDeck
  ];

  return shuffleDeck(deck);
};

export const getRandomQuestionCardDeck = (cardTotal: number) => {
  const deck = Array.from(Array(cardTotal), _ => {
    return { rank: getRandomRank(1, 5), suit: getRandomSuit(2) }
  });

  return deck;
};

export const getRandomCardDeck = (answerCardTotal: number, questionCardTotal: number) => {
  const questionDeck = getRandomQuestionCardDeck(questionCardTotal);
  const answerPoint = questionDeck.reduce((total, card) => Number(card.rank) + total, 0);
  const answerDeck = getRandomAnswerCardDeck(answerCardTotal, answerPoint);
  const deck = { answerDeck, answerPoint, questionDeck };
  return deck;
};