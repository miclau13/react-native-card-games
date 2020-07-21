import { FaceUpCardProps } from './FaceUpCard';

export const getCardImageBySuitAndRank = (rank: FaceUpCardProps['rank'], suit: FaceUpCardProps['suit']) => {
  const imageLocation = `${suit}_${rank}`;
  let image = require('@assets/Cards/Back_Side_Card.jpg');
  // let image =""
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