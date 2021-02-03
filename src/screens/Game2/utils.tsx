import { getRandomRank, getRandomSuit, shuffleDeck } from '@components/FaceUpCard/utils';

export const getRandomAnswerCardDeck = (cardTotal: number, answerPoint: number) => {
  const cardTotalInHalf = Math.floor(cardTotal / 2);
  // const cardTotalInLowerHalf = Math.floor(cardTotal / 2);
  const cardTotalInUpperHalf = cardTotal % 2 ? Math.floor(cardTotal / 2) : Math.floor(cardTotal / 2) - 1;
  const lowerDeck = Array.from(Array(cardTotalInHalf), (_, index) => {
    return { id: `${index}`, rank: getRandomRank(1, answerPoint - 1), suit: getRandomSuit(2) }
  });
  const upperDeck = Array.from(Array(cardTotalInUpperHalf), (_, index) => {
    return { id: `${cardTotalInHalf + index + 1}`, rank: getRandomRank(answerPoint + 1, 13), suit: getRandomSuit(2) }
  });
  const answerCard = { id: `${cardTotalInHalf}`, rank: getRandomRank(answerPoint, answerPoint), suit: getRandomSuit(2) };

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
  console.log("getRandomCardDeck questionDeck", questionDeck)
  console.log("getRandomCardDeck answerPoint", answerPoint)
  const answerDeck = getRandomAnswerCardDeck(answerCardTotal, answerPoint);
  const deck = { answerDeck, answerPoint, questionDeck };
  return deck;
};