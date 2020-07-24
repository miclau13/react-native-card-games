import { shuffle } from 'lodash';

import { FaceUpCardProps } from './FaceUpCard';

export const shuffleDeck = (cardList: FaceUpCardProps[]) => {
  return shuffle(cardList);
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const getRandomRank: (min?: number, max?: number) => FaceUpCardProps['rank'] = (min = 1, max = 13) => {
  const int = getRandomInt(min, max);
  switch (int) {
    case 1: 
      return '1';
    case 2: 
      return '2';
    case 3: 
      return '3';
    case 4: 
      return '4';
    case 5: 
      return '5';
    case 6: 
      return '6';
    case 7: 
      return '7';
    case 8: 
      return '8';
    case 9: 
      return '9';
    case 10: 
      return '10';
    case 11:
      return 'Jack';
    case 12:
      return 'Queen';
    default:
      return 'King';
  }
};

export const getRandomSuit: (specifySuit?: number) => FaceUpCardProps['suit'] = (specifySuit) => {
  const int = specifySuit || getRandomInt(0, 4);
  switch (int) {
    case 0:
      return 'Clubs';
    case 1:
      return 'Diamonds';
    case 2:
      return 'Hearts';
    default:
      return 'Spades';
  }
};

export const getCardImageBySuit = (suit: FaceUpCardProps['suit']) => {
  let image = require('@assets/Cards/Back_Side_Card.jpg');
  switch (suit) {
    case 'Clubs':
      image = require('@assets/Cards/Clubs/Clubs.png');
      break;
    case 'Diamonds':
      image = require('@assets/Cards/Diamonds/Diamonds.png');
      break;    
    case 'Hearts':
      image = require('@assets/Cards/Hearts/Hearts.png');
      break;    
    case 'Spades':
      image = require('@assets/Cards/Spades/Spades.png');
      break;    
  };
  return image;
};

export const getCardImageByRankAndSuit = (rank: FaceUpCardProps['rank'], suit: FaceUpCardProps['suit']) => {
  const imageLocation = `${suit}_${rank}`;
  let image = require('@assets/Cards/Back_Side_Card.jpg');
  switch (imageLocation) {
    case 'Clubs_1':
      image = require('@assets/Cards/Clubs/Clubs_1.png');
      break;
    case 'Clubs_2':
      image = require('@assets/Cards/Clubs/Clubs_2.png');
      break;    
    case 'Clubs_3':
      image = require('@assets/Cards/Clubs/Clubs_3.png');
      break;    
    case 'Clubs_4':
      image = require('@assets/Cards/Clubs/Clubs_4.png');
      break;    
    case 'Clubs_5':
      image = require('@assets/Cards/Clubs/Clubs_5.png');
      break;    
    case 'Clubs_6':
      image = require('@assets/Cards/Clubs/Clubs_6.png');
      break;
    case 'Clubs_7':
      image = require('@assets/Cards/Clubs/Clubs_7.png');
      break;    
    case 'Clubs_8':
      image = require('@assets/Cards/Clubs/Clubs_8.png');
      break;
    case 'Clubs_9':
      image = require('@assets/Cards/Clubs/Clubs_9.png');
      break;      
    case 'Clubs_10':
      image = require('@assets/Cards/Clubs/Clubs_10.png');
      break;
    case 'Clubs_Jack':
      image = require('@assets/Cards/Clubs/Clubs_Jack.png');
      break;
    case 'Clubs_Queen':
      image = require('@assets/Cards/Clubs/Clubs_Queen.png');
      break;      
    case 'Clubs_King':
      image = require('@assets/Cards/Clubs/Clubs_King.png');
      break;

    case 'Diamonds_1':
      image = require('@assets/Cards/Diamonds/Diamonds_1.png');
      break;
    case 'Diamonds_2':
      image = require('@assets/Cards/Diamonds/Diamonds_2.png');
      break;    
    case 'Diamonds_3':
      image = require('@assets/Cards/Diamonds/Diamonds_3.png');
      break;    
    case 'Diamonds_4':
      image = require('@assets/Cards/Diamonds/Diamonds_4.png');
      break;    
    case 'Diamonds_5':
      image = require('@assets/Cards/Diamonds/Diamonds_5.png');
      break;    
    case 'Diamonds_6':
      image = require('@assets/Cards/Diamonds/Diamonds_6.png');
      break;
    case 'Diamonds_7':
      image = require('@assets/Cards/Diamonds/Diamonds_7.png');
      break;    
    case 'Diamonds_8':
      image = require('@assets/Cards/Diamonds/Diamonds_8.png');
      break;
    case 'Diamonds_9':
      image = require('@assets/Cards/Diamonds/Diamonds_9.png');
      break;      
    case 'Diamonds_10':
      image = require('@assets/Cards/Diamonds/Diamonds_10.png');
      break;
    case 'Diamonds_Jack':
      image = require('@assets/Cards/Diamonds/Diamonds_Jack.png');
      break;
    case 'Diamonds_Queen':
      image = require('@assets/Cards/Diamonds/Diamonds_Queen.png');
      break;      
    case 'Diamonds_King':
      image = require('@assets/Cards/Diamonds/Diamonds_King.png');
      break;  

    case 'Hearts_1':
      image = require('@assets/Cards/Hearts/Hearts_1.png');
      break;
    case 'Hearts_2':
      image = require('@assets/Cards/Hearts/Hearts_2.png');
      break;    
    case 'Hearts_3':
      image = require('@assets/Cards/Hearts/Hearts_3.png');
      break;    
    case 'Hearts_4':
      image = require('@assets/Cards/Hearts/Hearts_4.png');
      break;    
    case 'Hearts_5':
      image = require('@assets/Cards/Hearts/Hearts_5.png');
      break;    
    case 'Hearts_6':
      image = require('@assets/Cards/Hearts/Hearts_6.png');
      break;
    case 'Hearts_7':
      image = require('@assets/Cards/Hearts/Hearts_7.png');
      break;    
    case 'Hearts_8':
      image = require('@assets/Cards/Hearts/Hearts_8.png');
      break;
    case 'Hearts_9':
      image = require('@assets/Cards/Hearts/Hearts_9.png');
      break;      
    case 'Hearts_10':
      image = require('@assets/Cards/Hearts/Hearts_10.png');
      break;
    case 'Hearts_Jack':
      image = require('@assets/Cards/Hearts/Hearts_Jack.png');
      break;
    case 'Hearts_Queen':
      image = require('@assets/Cards/Hearts/Hearts_Queen.png');
      break;      
    case 'Hearts_King':
      image = require('@assets/Cards/Hearts/Hearts_King.png');
      break;
    
    case 'Spades_1':
      image = require('@assets/Cards/Spades/Spades_1.png');
      break;
    case 'Spades_2':
      image = require('@assets/Cards/Spades/Spades_2.png');
      break;    
    case 'Spades_3':
      image = require('@assets/Cards/Spades/Spades_3.png');
      break;    
    case 'Spades_4':
      image = require('@assets/Cards/Spades/Spades_4.png');
      break;    
    case 'Spades_5':
      image = require('@assets/Cards/Spades/Spades_5.png');
      break;    
    case 'Spades_6':
      image = require('@assets/Cards/Spades/Spades_6.png');
      break;
    case 'Spades_7':
      image = require('@assets/Cards/Spades/Spades_7.png');
      break;    
    case 'Spades_8':
      image = require('@assets/Cards/Spades/Spades_8.png');
      break;
    case 'Spades_9':
      image = require('@assets/Cards/Spades/Spades_9.png');
      break;      
    case 'Spades_10':
      image = require('@assets/Cards/Spades/Spades_10.png');
      break;
    case 'Spades_Jack':
      image = require('@assets/Cards/Spades/Spades_Jack.png');
      break;
    case 'Spades_Queen':
      image = require('@assets/Cards/Spades/Spades_Queen.png');
      break;      
    case 'Spades_King':
      image = require('@assets/Cards/Spades/Spades_King.png');
      break;
  }
  return image;
};