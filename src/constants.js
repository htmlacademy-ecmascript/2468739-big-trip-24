const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const MessageType = {
  NOT_POINT:'Click New Event to create your first point',
};

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offer'];
const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const POINT_BLANK = {
  id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: {
    id: '',
    description: '',
    name: '',
    pictures: [],
  },
  isFavorite: false,
  offers: [],
  type: 'flight',
};

const POINT_COUNT = 3;

const DateTimeFormat = {
  DATE_FORMAT: 'MMM DD',
  TIME_FORMAT: 'HH:mm',
  POINT_EVENT: 'YYYY-MM-DD',
  POINT_SHEDULE_EVENT: 'YYYY-MM-DDTHH:mm',
  EDIT_POINT: 'DD/MM/YY HH:mm',
};

const DurationFormat = {
  DAYS_HOURS_MINUTES: 'DD[D] HH[H] mm[M]',
  HOURS_MINUTES: 'HH[H] mm[M]',
  MINUTES: 'mm[M]',
};

const MillisecondCount = {
  DAY: 86400000,
  HOUR: 3600000,
};

const FAVORITE_CLASS_NAME = 'event__favorite-btn--active';

export {
  FilterType,
  MessageType,
  SORT_TYPES,
  EVENT_TYPES,
  POINT_COUNT,
  MillisecondCount,
  DurationFormat,
  DateTimeFormat,
  FAVORITE_CLASS_NAME,
  POINT_BLANK,
};
