const FILTER_TYPES = ['everything', 'future', 'present', 'past'];
const SORT_TYPES = ['day', 'event', 'time', 'price', 'offer'];
const EVENT_TYPES = [
  'taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'
];

const POINT_COUNT = 3;

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';

const DateTimeFormat = {
  EVENT: 'YYYY-MM-DD',
  SHEDULE_EVENT: 'YYYY-MM-DDTHH:mm'
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
  FILTER_TYPES,
  SORT_TYPES,
  EVENT_TYPES,
  POINT_COUNT,
  DATE_FORMAT,
  TIME_FORMAT,
  MillisecondCount,
  DurationFormat,
  DateTimeFormat,
  FAVORITE_CLASS_NAME,
};
