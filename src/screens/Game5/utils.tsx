import { getRandomRank, getRandomSuit, shuffleDeck } from '@components/FaceUpCard/utils';

export const getRandomQuestionsCardDeck = () => {

  // Now assume 5 cards in total
  const answerCard = { rank: getRandomRank(3,11), suit: getRandomSuit(4) };
  const answerRank = answerCard.rank;
  const answerPoint = 
    answerCard.rank === "Jack" 
      ? 11
      : answerCard.rank === "Queen" 
        ? 12
        : answerCard.rank === "King" 
          ? 13
          : Number(answerCard.rank);

  const lowerDeck = Array.from(Array(2), (_, index) => {
    return { rank: getRandomRank(answerPoint + index - 2, answerPoint + index - 2), suit: getRandomSuit(4) }
  });
  const upperDeck = Array.from(Array(2), (_, index) => {
    return { rank: getRandomRank(answerPoint + index + 1, answerPoint + index + 1), suit: getRandomSuit(4) }
  });

  const deck = [
    ...lowerDeck,
    answerCard,
    ...upperDeck
  ];

  return { deck, answerPoint, answerRank };
};

export const getRandomAnswerCardDeck = (cardTotal: number, answerPoint: number) => {
  const cardTotalInHalf = Math.floor(cardTotal / 2);
  // const cardTotalInLowerHalf = Math.floor(cardTotal / 2);
  const cardTotalInUpperHalf = cardTotal % 2 ? Math.floor(cardTotal / 2) : Math.floor(cardTotal / 2) - 1;
  const lowerDeck = Array.from(Array(cardTotalInHalf), (_, index) => {
    return { id: `${index}`, rank: getRandomRank(1, answerPoint - 1), suit: getRandomSuit(4) }
  });
  const upperDeck = Array.from(Array(cardTotalInUpperHalf), (_, index) => {
    return { id: `${cardTotalInHalf + index + 1}`, rank: getRandomRank(answerPoint + 1, 13), suit: getRandomSuit(4) }
  });
  const answerCard = { id: `${cardTotalInHalf}`, rank: getRandomRank(answerPoint, answerPoint), suit: getRandomSuit(4) };

  const deck = [
    ...lowerDeck,
    answerCard,
    ...upperDeck
  ];

  return shuffleDeck(deck);
};

export const getRandomCardDeck = (lowerCardTotal: number, upperCardTotal: number, ) => {
  const questionDeck = getRandomQuestionsCardDeck();
  const answerDeck = getRandomAnswerCardDeck(lowerCardTotal, questionDeck.answerPoint);

  const deck = { answerDeck, answerPoint: questionDeck.answerPoint, answerRank: questionDeck.answerRank, questionDeck: questionDeck.deck };
  return deck;
};