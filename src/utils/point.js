import dayjs from 'dayjs';
import { DurationFormat, MillisecondCount } from '../constants';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const humanizeDate = (date, format) => dayjs(date).format(format);

const calculateDuration = (startDate, endDate, unitTime = null) => {
  const firstDate = dayjs(startDate);
  const secondDate = dayjs(endDate);
  return secondDate.diff(firstDate, unitTime);
};

const convertDuration = (durationEvent) => {
  if (durationEvent >= MillisecondCount.DAY) {
    return dayjs
      .duration(durationEvent)
      .format(DurationFormat.DAYS_HOURS_MINUTES);
  }

  if (durationEvent >= MillisecondCount.HOUR) {
    return dayjs.duration(durationEvent).format(DurationFormat.HOURS_MINUTES);
  }

  return dayjs.duration(durationEvent).format(DurationFormat.MINUTES);
};

const getDurationEvent = (startDate, endDate, unitTime = null) => {
  const durationEvent = calculateDuration(startDate, endDate, unitTime);
  return convertDuration(durationEvent);
};

export { humanizeDate, getDurationEvent };
