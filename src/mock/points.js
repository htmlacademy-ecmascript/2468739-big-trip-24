import { getRandomArrayElement } from '../utils/common';

const points = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 1100,
    dateFrom: '2019-07-08T22:55:56.845Z',
    dateTo: '2019-07-10T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: true,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa31'],
    type: 'taxi',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2809c',
    basePrice: 1000,
    dateFrom: '2019-07-11T11:11:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa37'
    ],
    type: 'bus',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2807c',
    basePrice: 900,
    dateFrom: '2019-07-11T22:55:56.845Z',
    dateTo: '2019-07-12T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    isFavorite: true,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa33'],
    type: 'train',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2806c',
    basePrice: 800,
    dateFrom: '2019-07-12T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa34',
      'b4c3e4e6-9053-42ce-b747-e281314baa38',
      'b4c3e4e6-9053-42ce-b747-e281314baa39'
    ],
    type: 'ship',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2805c',
    basePrice: 700,
    dateFrom: '2019-07-13T22:55:56.845Z',
    dateTo: '2019-07-14T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa35'],
    type: 'drive',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2804c',
    basePrice: 600,
    dateFrom: '2019-07-14T22:55:56.845Z',
    dateTo: '2019-07-15T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa36'],
    type: 'flight',
  },
];

const getRandomPoint = () => getRandomArrayElement(points);

export {
  getRandomPoint,
};
