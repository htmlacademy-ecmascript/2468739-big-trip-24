import dayjs from 'dayjs';
import { NOT_SORT_TYPE, SortType } from '../constants';
import { calculateDuration } from './point';

const sortDatesAscending = (itemA, itemB) => dayjs(itemA.dateFrom).diff(dayjs(itemB.dateFrom));

const sortPricesDescending = ({basePrice: priceA}, {basePrice: priceB}) => priceB - priceA;

const sortDurationsDescending = (
  {dateFrom: dateFromA, dateTo: dateToA},
  {dateFrom: dateFromB, dateTo: dateToB}
) => {
  const durationA = calculateDuration(dateFromA, dateToA);
  const durationB = calculateDuration(dateFromB, dateToB);

  return durationB - durationA;
};

const sortItems = (type, items) => {
  let compare = null;

  switch (type) {
    case SortType.TIME:
      compare = sortDurationsDescending;
      break;
    case SortType.PRICE:
      compare = sortPricesDescending;
      break;
    case SortType.DEFAULT:
      compare = sortDatesAscending;
      break;
    default:
      throw new Error(NOT_SORT_TYPE);
  }

  items.sort(compare);
};

export { sortItems };
