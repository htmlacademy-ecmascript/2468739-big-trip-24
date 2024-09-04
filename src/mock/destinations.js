import { getRandomNumber } from '../utils';

const destinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description:
      'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    description:
      'Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber}`,
        description: 'Amsterdam parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    description:
      'Rome, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber}`,
        description: 'Rome parliament building',
      },
    ],
  },
];

export {
  destinations,
};
