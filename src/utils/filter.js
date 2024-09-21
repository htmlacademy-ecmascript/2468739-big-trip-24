import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { FilterType } from '../constants';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const isFuturePoint = (data) => dayjs().isBefore(dayjs(data));
const isPastPoint = (data) => dayjs().isAfter(dayjs(data));
const isPresentPoint = (startData, endData) => dayjs().isSameOrAfter(dayjs(startData)
    && dayjs().isSameOrBefore(dayjs(endData)));

const filter = {
  [FilterType.EVERYTHING]: (points) => points.length,
  [FilterType.FUTURE]: (points) => points
    .filter(({dateFrom}) => isFuturePoint(dateFrom))
    .length,
  [FilterType.PAST]: (points) => points
    .filter(({dateTo}) => isPastPoint(dateTo))
    .length,
  [FilterType.PRESENT]: (points) => points
    .filter(({dateFrom, dateTo}) => isPresentPoint(dateFrom, dateTo))
    .length,
};

export {
  filter,
};
